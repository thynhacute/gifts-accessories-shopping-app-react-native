import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React from "react";
import products from "../data/Products";
import Colors from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

function HomeProducts() {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
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
                h="50"
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
    </ScrollView>
  );
}

export default HomeProducts;
