import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React, { useState, useEffect } from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartIterms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Linking } from "react-native";
import axios from 'axios';

function CartScreen({ route }) {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Error loading user data from AsyncStorage:", error);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  };

  const addItemToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const deleteCartItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.product.id !== item.product.id);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    if (cartItems.length === 1) {
      setCartItems([]);
    } else {
      Alert.alert(
        "Clear Cart",
        "Are you sure you want to remove all items from the cart?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Remove All",
            style: "destructive",
            onPress: () => setCartItems([]),
          },
        ]
      );
    }
  };

  const saveCartItems = async (items) => {
    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(items));
    } catch (error) {
      console.log("Error saving cart items:", error);
    }
  };

  const loadCartItems = async () => {
    try {
      const storedCartItems = await AsyncStorage.getItem("cartItems");
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    } catch (error) {
      console.log("Error loading cart items:", error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.item) {
      const addedItem = route.params.item;
      addItemToCart(addedItem);
    }
  }, [route.params]);

  useEffect(() => {
    loadCartItems();
  }, []);

  useEffect(() => {
    saveCartItems(cartItems);
  }, [cartItems]);


  const handlePaymentButtonPress = async () => {
    try {
      const response = await axios.post('http://172.17.223.113:8080/payment/createPayment', {
        backCode: 'VNBANK',
        amountParam: calculateTotal(),
      });

      if (response.data.code === '00') {
        const paymentUrl = response.data.url;
        Linking.openURL(paymentUrl);

        const orderDetail = cartItems.map((item) => ({
          productId: item.product._id,
          productImage: item.product.image,
          productName: item.product.name,
          quantity: item.quantity,
        }));
  
        const paymentData = {
          userID: user.id,
          bankCode: response.data.bankCode,
          totalPrice: calculateTotal(),
          vnp_TxnRef: response.data.vnp_TxnRef,
          status: "Waiting",
          orderDetail: orderDetail
        };

        try {
          const paymentResponse = await axios.post('https://64b7e2fd21b9aa6eb079381c.mockapi.io/orders', paymentData);
          try{
            const productsFromAPI = await fetchProductsFromAPI();
            const updatedProductQuantities = cartItems.map((item) => {
              const product = productsFromAPI.find((p) => p.id === item.product.id);
              if (product) {
                // Tính toán số lượng còn lại sau khi mua hàng
                const remainingQuantity = product.countInStock - item.quantity;
    
                // Sử dụng API PUT để cập nhật lại số lượng sản phẩm trên server
                updateProductQuantityOnServer(item.product.id, remainingQuantity);
              }
    
              return item;
            });
          }catch(error){
            console.log('Error put data of products to the mock API:', error);
          }
          setCartItems([]);
        } catch (error) {
          console.log('Error adding payment data to the mock API:', error);
        }

      } else {
        Alert.alert('Error', 'Payment request failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Payment request failed');
      console.log('Error:', error.message);
    }
  };
  const fetchProductsFromAPI = async () => {
    try {
      const response = await axios.get('https://64b7e5bb21b9aa6eb0793cc6.mockapi.io/api/products');
      return response.data;
    } catch (error) {
      console.log('Error fetching products from API:', error);
      return [];
    }
  };
  
  // Hàm gọi API PUT để cập nhật lại số lượng sản phẩm trên server
  const updateProductQuantityOnServer = async (productId, quantity) => {
    try {
      await axios.put(`https://64b7e5bb21b9aa6eb0793cc6.mockapi.io/api/products/${productId}`, { countInStock: quantity });
    } catch (error) {
      console.log('Error updating product quantity on server:', error);
    }
  };

  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItems cartItems={cartItems} onDeleteItem={deleteCartItem} />
          {/* Total */}
          <Center mt={5}>
            <HStack
              rounded={50}
              justifyContent="space-between"
              bg={Colors.white}
              shadow={2}
              w="90%"
              pl={5}
              h={45}
              alignItems="center"
            >
              <Text>Total</Text>
              <Button
                px={10}
                h={45}
                rounded={50}
                bg={Colors.main}
                _text={{
                  color: Colors.white,
                  fontWeight: "semibold",
                }}
                _pressed={{
                  bg: Colors.main,
                }}
              >
                {calculateTotal().toLocaleString("en-US")} VND
              </Button>
            </HStack>
          </Center>

          {cartItems.length > 1 && (
            <Center px={5}>
              <Buttone
                onPress={clearCart}
                bg={Colors.red}
                color={Colors.white}
                mt={10}
              >
                Remove All Items
              </Buttone>
            </Center>
          )}

          {/* Checkout */}
          <Center px={5}>
            <Buttone
              onPress={handlePaymentButtonPress}
              bg={Colors.black}
              color={Colors.white}
              mt={5}
            >
              CHECKOUT
            </Buttone>
          </Center>
        </ScrollView>
      )}
    </Box>
  );
}

export default CartScreen;
