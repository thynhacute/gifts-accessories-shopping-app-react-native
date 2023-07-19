import { Box, FormControl, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Colors from "../../color";
import Buttone from "../Buttone";
import { useNavigation } from "@react-navigation/native";

const Inputs = [
  {
    label: "NAME",
    info: "Hoang Nha Thy",
  },
  {
    label: "EMAIL",
    info: "nhathy@gmail.com",
  },
  {
    label: "ACCOUNT NAME",
    info: "nhathy",
  },
];

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Thực hiện các xử lý logout

    // Điều hướng về trang LoginScreen
    navigation.navigate("Login");
  };

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((input, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {input.label}
              </FormControl.Label>
              <Text
                padding={5}
                borderWidth={0.2}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={4}
                color={Colors.black}
                fontSize={15}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              >
                {input.info}
              </Text>
            </FormControl>
          ))}
          <Buttone bg={Colors.main} color={Colors.white} onPress={handleLogout}>
            LOGOUT
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
