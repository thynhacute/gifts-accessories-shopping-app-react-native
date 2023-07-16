import {
  Box,
  Heading,
  Image,
  ScrollView,
  HStack,
  View,
  Spacer,
  Text,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SingleProductScreen({ route }) {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const product = route.params;

  const addToCart = async () => {
    const cartItem = {
      product,
      quantity,
    };
    try {
      const cartItems = await AsyncStorage.getItem("cartItems");
      if (cartItems) {
        const parsedCartItems = JSON.parse(cartItems);
        const updatedCartItems = [...parsedCartItems, cartItem];
        await AsyncStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
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
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <NumericInput
              value={quantity}
              onChange={setQuantity}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
          ) : (
            <Heading bold color={Colors.red} italic fontSize={12}>
              Out of stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            {product.price.toLocaleString()} VND
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <Text lineHeight={24} fontSize={14} fontWeight={500}>
          Thích hợp dành cho: {product.gender}
        </Text>
        <Text lineHeight={24} fontSize={14} fontWeight={500}>
          Inventory: {product.countInStock}
        </Text>
        <Buttone
          onPress={addToCart}
          bg={Colors.main}
          color={Colors.white}
          mt={10}
        >
          ADD TO CART
        </Buttone>
        {/* REVIEW */}
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
