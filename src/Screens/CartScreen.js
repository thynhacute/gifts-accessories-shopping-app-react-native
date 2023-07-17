import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React, { useState, useEffect } from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartIterms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

function CartScreen({ route }) {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

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
                {calculateTotal().toLocaleString()} VND
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
              onPress={() => navigation.navigate("Shipping")}
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
