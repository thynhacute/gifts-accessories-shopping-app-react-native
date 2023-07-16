import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import Colors from "../color";
import Rating from "../Components/Rating";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import PRODUCTS from "../data/Products";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SingleProductScreen({ route, navigation }) {
  const [value, setValue] = useState(0);
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));
  const [favData, setFavData] = useState([]);
  const getProductId = route.params.productId;
  const chosenProduct = PRODUCTS.find((product) => product.id === getProductId);

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
      list = [chosenProduct.id];
    } else {
      list = [...favData, chosenProduct.id];
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

    if (favData.includes(chosenProduct.id)) {
      removeDataFromStorage();
    } else {
      setDataToStorage();
    }
  };

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }

  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={goBack}>
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={23} color="black" />
          </View>
        </TouchableWithoutFeedback>
        <Image
          source={{ uri: chosenProduct.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.header}>
          <Text style={styles.heading}>{chosenProduct.name}</Text>
          <TouchableWithoutFeedback onPress={animatedButton}>
            <Animated.View
              style={[
                styles.heartIcon,
                { transform: [{ scale: scaleValue }] },
              ]}
            >
              {favData.includes(chosenProduct.id) ? (
                <Ionicons name="heart" size={23} color="#f6736f" />
              ) : (
                <Ionicons name="heart-outline" size={23} color="black" />
              )}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <Rating
          value={chosenProduct.rating}
          text={`${chosenProduct.numReviews} reviews`}
        />
        <View style={styles.priceContainer}>
          {chosenProduct.countInStock > 0 ? (
            <NumericInput
              value={value}
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
              onChange={setValue}
            />
          ) : (
            <Text style={styles.outOfStockText}>Out of stock</Text>
          )}
          <Text style={styles.price}>
            {chosenProduct.price.toLocaleString()} VND
          </Text>
        </View>
        <Text style={styles.description}>{chosenProduct.description}</Text>
        <Text style={styles.inventory}>
          Inventory: {chosenProduct.countInStock}
        </Text>
        <Buttone
          onPress={() => navigation.navigate("Cart")}
          bg={Colors.main}
          color={Colors.white}
          mt={10}
        >
          ADD TO CART
        </Buttone>
        <Review />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
  },
  heartIcon: {
    overflow: "hidden",
    padding: 13,
    borderRadius: 30,
    backgroundColor: "#d8dfff",
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  outOfStockText: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.red,
    fontStyle: "italic",
  },
  price: {
    fontSize: 19,
    fontWeight: "bold",
    color: Colors.black,
    marginLeft: "auto",
  },
  description: {
    lineHeight: 24,
    fontSize: 12,
  },
  inventory: {
    lineHeight: 24,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default SingleProductScreen;
