import React, { useState, useEffect, useLayoutEffect } from "react";
import { Box, Heading, ScrollView, View, Text, Image } from "native-base";
import { TouchableWithoutFeedback, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import Colors from "../color";
import Rating from "../Components/Rating";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import PRODUCTS from "../data/Products";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../AuthContext/AuthContext";

function SingleProductScreen({ route, navigation }) {
  const [quantity, setQuantity] = useState(route.params?.quantity || 1);
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));
  const [favData, setFavData] = useState([]);
  const { preview, user } = React.useContext(AuthContext);
  const getProductId = route.params.productId;
  const chosenProduct = PRODUCTS.find(
    (product) => product._id === getProductId
  );
  const previewData = preview?.filter(
    (re) => re?.idProduct === chosenProduct?.id
  );
  console.log(previewData?.length);

  const nativeNavigation = useNavigation();

  useEffect(() => {
    getFromStorage();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: chosenProduct.name,
      headerShown: false,
    });
  }, [navigation]);

  const getFromStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("favorite");
      if (data != null || data != undefined) {
        setFavData(JSON.parse(data));
      }
    } catch (error) {
      console.log("Error retrieving favorite products:", error);
    }
  };

  const setDataToStorage = async () => {
    let list;
    if (favData == []) {
      list = [chosenProduct._id];
    } else {
      list = [...favData, chosenProduct._id];
    }

    try {
      await AsyncStorage.setItem("favorite", JSON.stringify(list));
      setFavData(list);
    } catch (error) {
      console.log("Error saving favorite products:", error);
    }
  };

  const removeDataFromStorage = async () => {
    const list = favData.filter((product) => product !== getProductId);
    try {
      await AsyncStorage.setItem("favorite", JSON.stringify(list));
      setFavData(list);
    } catch (error) {
      console.log("Error saving favorite products:", error);
    }
  };

  const animatedButton = () => {
    Animated.timing(scaleValue, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });

    if (favData.includes(chosenProduct._id)) {
      removeDataFromStorage();
    } else {
      setDataToStorage();
    }
  };

  const goBack = () => {
    if (nativeNavigation.canGoBack()) {
      nativeNavigation.goBack();
    } else {
      nativeNavigation.navigate("Home");
    }
  };

  const addToCart = async () => {
    const cartItem = {
      product: chosenProduct,
      quantity: quantity,
    };
    try {
      const cartItems = await AsyncStorage.getItem("cartItems");
      if (cartItems) {
        const parsedCartItems = JSON.parse(cartItems);
        const updatedCartItems = [...parsedCartItems, cartItem];
        await AsyncStorage.setItem(
          "cartItems",
          JSON.stringify(updatedCartItems)
        );
      } else {
        await AsyncStorage.setItem("cartItems", JSON.stringify([cartItem]));
      }
    } catch (error) {
      console.log("Error adding item to cart:", error);
    }
    navigation.navigate("Cart", { item: cartItem });
  };

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={goBack}>
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={23} color="black" />
          </View>
        </TouchableWithoutFeedback>
        <Image
          source={{ uri: chosenProduct.image }}
          alt="image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <View style={styles.headerContainer}>
          <Heading bold fontSize={15} mb={2} lineHeight={22}>
            {chosenProduct.name}
          </Heading>
          <TouchableWithoutFeedback onPress={animatedButton}>
            <Animated.View
              style={[styles.heartIcon, { transform: [{ scale: scaleValue }] }]}
            >
              {favData.includes(chosenProduct._id) ? (
                <Ionicons name="heart" size={23} color="#F20800" />
              ) : (
                <Ionicons name="heart-outline" size={23} color="black" />
              )}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <Rating
          value={chosenProduct.rating}
          text={`${previewData?.length} reviews`}
        />
        <View style={styles.priceContainer}>
          {chosenProduct.countInStock > 0 ? (
            <NumericInput
              value={quantity}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={chosenProduct.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
              onChange={setQuantity}
            />
          ) : (
            <Text style={styles.outOfStockText}>Out of stock</Text>
          )}
          <Text style={styles.price}>
            {chosenProduct.price.toLocaleString()} VND
          </Text>
        </View>
        <Text lineHeight={24} fontSize={12}>
          {chosenProduct.description}
        </Text>
        <Text lineHeight={24} fontSize={14} fontWeight={500}>
          Thích hợp dành cho: {chosenProduct.gender}
        </Text>
        <Text lineHeight={24} fontSize={14} fontWeight={500}>
          Inventory: {chosenProduct.countInStock}
        </Text>
        <Buttone
          onPress={addToCart}
          bg={Colors.main}
          color={Colors.white}
          mt={10}
        >
          ADD TO CART
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
}

const styles = {
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heartIcon: {
    overflow: "hidden",
    padding: 13,
    borderRadius: 30,
    backgroundColor: "#B9BDCE",
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  outOfStockText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
    marginLeft: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
};

export default SingleProductScreen;
