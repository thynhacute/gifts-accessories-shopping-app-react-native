import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "native-base";
import products from "../data/Products";
import Colors from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

function HomeProducts() {
  const navigation = useNavigation();
  const uniqueCategories = products.reduce((categories, product) => {
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

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    if (selectedGender && product.gender !== selectedGender) {
      return false;
    }
    return true;
  });

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <View style={{ position: "relative" }}>
        <Flex
          flexWrap="wrap"
          direction="row"
          justifyContent="center"
          px={6}
          mt={3}
        >
          <Button onPress={toggleCategoryDropdown} mb={2}>
            {selectedCategory ? selectedCategory : "Chọn loại phụ kiện"}
          </Button>
          <Button onPress={toggleGenderDropdown} ml={2} mb={2}>
            {selectedGender ? selectedGender : "Chọn giới tính"}
          </Button>
        </Flex>
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
              size="sm"
              mr={2}
              mb={2}
              onPress={() => setSelectedCategory(null)}
              colorScheme={selectedCategory === null ? "blue" : "gray"}
            >
              Tất cả
            </Button>
            {uniqueCategories.map((category) => (
              <Button
                key={category}
                size="sm"
                mb={2}
                onPress={() => handleCategorySelect(category)}
                colorScheme={selectedCategory === category ? "blue" : "gray"}
              >
                {category}
              </Button>
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
              size="sm"
              mr={2}
              mb={2}
              onPress={() => setSelectedGender(null)}
              colorScheme={selectedGender === null ? "blue" : "gray"}
            >
              Tất cả
            </Button>
            <Button
              key="male"
              size="sm"
              mb={2}
              onPress={() => handleGenderSelect("Nam")}
              colorScheme={selectedGender === "Nam" ? "blue" : "gray"}
            >
              Nam
            </Button>
            <Button
              key="female"
              size="sm"
              mb={2}
              onPress={() => handleGenderSelect("Nữ")}
              colorScheme={selectedGender === "Nữ" ? "blue" : "gray"}
            >
              Nữ
            </Button>
          </View>
        )}
        <Flex
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          px={6}
          marginTop={isCategoryDropdownOpen || isGenderDropdownOpen ? 0 : 0} // Điều chỉnh khoảng cách từ dropdown menu đến danh sách sản phẩm
        >
          {filteredProducts.map((product) => (
            <Pressable
              onPress={() => navigation.navigate("Single", product)}
              key={product._id}
              w="47%"
              bg={Colors.white}
              rounded="md"
              shadow={2}
              pt={0.3}
              my={3}
              pb={2}
              overflow="hidden"
            >
              <Image
                source={{ uri: product.image }}
                alt={product.name}
                w="full"
                h={24}
                resizeMode="contain"
                style={{ marginTop: 10 }}
              />
              <Box px={4} pt={1}>
                <Text
                  fontSize={12}
                  mt={1}
                  w="full"
                  h={50}
                  fontWeight={500}
                  style={{ marginTop: 10 }}
                >
                  {product.name}
                </Text>
                <Heading size="xxl" color={Colors.blue}>
                  {product.price.toLocaleString()} VND
                </Heading>
                <Rating value={product.rating} />
              </Box>
            </Pressable>
          ))}
        </Flex>
      </View>
    </ScrollView>
  );
}

export default HomeProducts;
