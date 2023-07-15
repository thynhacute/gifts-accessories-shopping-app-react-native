import { Box, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import HomeProducts from "../Components/HomeProducts";
import HomeSearch from "../Components/HomeSearch";

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <Text
        fontSize={20}
        fontWeight={500}
        style={{ textAlign: "center", color: "#CC0066", marginTop: 10 }}
      >
        Welcome to
      </Text>
      <Text
        fontSize={20}
        fontWeight={500}
        style={{ textAlign: "center", color: "#CC0066" }}
      >
        HanaCongChua
      </Text>
      <HomeProducts />
    </Box>
  );
}

export default HomeScreen;
