import React, { useEffect, useState } from "react";
import {
  Image,
  Animated,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

import PRODUCTS from "../data/Products";
import Colors from "../color";
import Rating from "./Rating";

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

  const uniqueCategories = PRODUCTS.reduce((categories, product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
    return categories;
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    setIsGenderDropdownOpen(false);
  };

  const toggleGenderDropdown = () => {
    setIsGenderDropdownOpen(!isGenderDropdownOpen);
    setIsCategoryDropdownOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setIsGenderDropdownOpen(false);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    if (selectedGender && product.gender !== selectedGender) {
      return false;
    }
    return true;
  });

  function onPressFunction(id) {
    navigation.navigate("Single", { productId: id });
  }

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <View style={{ position: "relative" }}>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 6,
            marginTop: 10,
          }}
        >
          <Button
            onPress={toggleCategoryDropdown}
            title={selectedCategory ? `${selectedCategory}` : "Chọn loại phụ kiện"}
          />
          <Button
            onPress={toggleGenderDropdown}
            title={selectedGender ? `${selectedGender}` : "Chọn giới tính"}
          />
        </View>
        {isCategoryDropdownOpen && (
          <View
            style={{
              position: "absolute",
              top: 60,
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              borderRadius: 6,
              padding: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              zIndex: 1,
            }}
          >
            <Button
              key="all"
              onPress={() => setSelectedCategory(null)}
              color={selectedCategory === null ? "blue" : "gray"}
              title="Tất cả"
            />
            {uniqueCategories.map((category) => (
              <Button
                key={category}
                onPress={() => handleCategorySelect(category)}
                color={selectedCategory === category ? "blue" : "gray"}
                title={category}
              />
            ))}
          </View>
        )}
        {isGenderDropdownOpen && (
          <View
            style={{
              position: "absolute",
              top: 60,
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              borderRadius: 6,
              padding: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              zIndex: 1,
            }}
          >
            <Button
              key="all"
              onPress={() => setSelectedGender(null)}
              color={selectedGender === null ? "blue" : "gray"}
              title="Tất cả"
            />
            <Button
              key="male"
              onPress={() => handleGenderSelect("Nam")}
              color={selectedGender === "Nam" ? "blue" : "gray"}
              title="Nam"
            />
            <Button
              key="female"
              onPress={() => handleGenderSelect("Nữ")}
              color={selectedGender === "Nữ" ? "blue" : "gray"}
              title="Nữ"
            />
          </View>
        )}
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 6,
          }}
        >
          {filteredProducts.map((product) => (
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
      </View>
    </ScrollView>
  );
}

export default HomeProducts;
