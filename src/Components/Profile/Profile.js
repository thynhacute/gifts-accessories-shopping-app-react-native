import { Box, FormControl, ScrollView, Text, VStack } from "native-base";
import React, { useState, useEffect } from "react";
import Colors from "../../color";
import Buttone from "../Buttone";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({user}) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Clear the user data from AsyncStorage
    AsyncStorage.removeItem("cartItems");
    AsyncStorage.removeItem("user");

    // Điều hướng về trang LoginScreen
    navigation.navigate("Login");
  };

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {user && (
            <>
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Full Name
              </FormControl.Label>
              <Text
                padding={5}
                borderWidth={0.2}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={4}
                color={Colors.black}
                fontSize={18}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              >
                {user.fullName}
              </Text>
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Email
              </FormControl.Label>
              <Text
                padding={5}
                borderWidth={0.2}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={4}
                color={Colors.black}
                fontSize={18}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              >
                {user.email}
              </Text>
            </FormControl>
            </>
            
          )}
          <Buttone bg={Colors.main} color={Colors.white} onPress={handleLogout}>
            LOGOUT
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
