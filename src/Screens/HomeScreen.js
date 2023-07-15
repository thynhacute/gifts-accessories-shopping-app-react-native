import { Box, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import HomeProducts from "../Components/HomeProducts";
import HomeSearch from "../Components/HomeSearch";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <Text
        fontSize={20}
        fontWeight={500}
        style={{ textAlign: "center", color: "#CC0066", marginTop: 10 }}
      >
        Welcome to HanaCongChua
      </Text>
      <MaterialCommunityIcons
        style={{
          textAlign: "center",
          color: "#CC0066",
          marginTop: 10,
          marginBottom: 10,
        }}
        name="flower"
        size={24}
        color="black"
      />
      <HomeProducts />
    </Box>
  );
}

export default HomeScreen;
