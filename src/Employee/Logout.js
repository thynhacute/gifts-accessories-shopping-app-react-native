import { Box, FormControl, ScrollView, Text, VStack } from "native-base";
import React, { useState, useEffect } from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ user }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    AsyncStorage.removeItem("cartItems");
    AsyncStorage.removeItem("user");
    navigation.navigate("Login");
  };

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          <Buttone bg={Colors.main} color={Colors.white} onPress={handleLogout}>
            LOGOUT
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
