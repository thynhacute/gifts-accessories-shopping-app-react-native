import { useEffect, useState } from "react";
import { Image, Animated, ScrollView, View, Text, TouchableOpacity, Pressable } from "react-native";
import PRODUCTS from "../data/Products";
import Colors from "../color";
import Rating from "./Rating";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

function HomeProducts() {
  const [favData, setFavData] = useState([]);
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    getFromStorage();
  }, [isFocused]);

  const getFromStorage = async () => {
    const data = await AsyncStorage.getItem("favorite");
    setFavData(data != null || data != undefined ? JSON.parse(data) : []);
  };

  const setDataToStorage = async (id) => {
    let list;
    if (favData.length === 0) {
      list = [id];
      await AsyncStorage.setItem("favorite", JSON.stringify(list));
    } else {
      list = [...favData, id];
      await AsyncStorage.setItem("favorite", JSON.stringify(list));
    }
    setFavData(list);
  };

  const removeDataFromStorage = async (id) => {
    const list = favData.filter((productId) => productId !== id);
    await AsyncStorage.setItem("favorite", JSON.stringify(list));
    setFavData(list);
  };

  function favoriteButton(id) {
    if (favData.includes(id)) {
      removeDataFromStorage(id);
    } else {
      setDataToStorage(id);
    }
  }

  function onPressFunction(id) {
    navigation.navigate("Single", { productId: id });
  }

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 6,
        }}
      >
        {PRODUCTS.map((product) => (
          <TouchableOpacity
            onPress={() => onPressFunction(product.id)}
            key={product.id}
            style={{
              width: "47%",
              backgroundColor: Colors.white,
              borderRadius: 8,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              paddingTop: 3,
              marginTop: 6,
              paddingBottom: 2,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: product.image }}
              style={{ width: "100%", height: 100, resizeMode: "contain", marginTop: 10 }}
            />
            <View style={{ paddingHorizontal: 10, paddingTop: 3 }}>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 10,
                  fontWeight: "500",
                }}
                numberOfLines={2}
              >
                {product.name}
              </Text>
              <Text style={{ fontSize: 18, color: Colors.blue }}>
                {product.price.toLocaleString()} VND
              </Text>
              <Rating value={product.rating} />
            </View>
            <Pressable
              style={{
                position: "absolute",
                top: 10,
                right: "4%",
                backgroundColor: "rgba(0,0,0,0.05)",
                padding: 5,
                borderRadius: 16,
                overflow: "hidden",
              }}
              onPress={() => favoriteButton(product.id)}
            >
              {favData.includes(product.id) ? (
                <Ionicons name="heart" size={20} color="red" />
              ) : (
                <Ionicons name="heart-outline" size={20} color="grey" />
              )}
            </Pressable>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default HomeProducts;
