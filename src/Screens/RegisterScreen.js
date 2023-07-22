import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function RegisterScreen() {
  const [name, setName] = useState("Hoang Tam");
  const [email, setEmail] = useState("hoangtam@gmail.com");
  const [password, setPassword] = useState("1");
  const navigation = useNavigation();

  const handleCreateAccount = async () => {
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      const response = await axios.get(`https://64b7e2fd21b9aa6eb079381c.mockapi.io/users?email=${email}`);
      const users = response.data;

      if (users.length > 0) {
        alert("Email account already exists. Please use a different email or log in.");
        return;
      }

      const newUser = {
        email: email,
        fullName: name,
        password: password,
        roleName: "User",
        status: 1
      };

      await axios.post('https://64b7e2fd21b9aa6eb079381c.mockapi.io/users', newUser);

      navigation.navigate("Login");
    } catch (error) {
      console.error("Error creating account:", error);
      alert("An error occurred while trying to create the account. Please try again later.");
    }
  };

  return (
    <Box flex={1} bg={Colors.black} alignItems="center" justifyContent="center">
      <Box
        w="100%"
        h="100%"
        p={6}
        justifyContent="center"
        bg={Colors.white}
        borderRadius={10}
      >
        <Heading mb={6} textAlign="center">
          SIGN UP
        </Heading>
        <VStack space={5}>
          {/* EMAIL */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {/* NAME */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="Họ và tên...."
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          {/* PASSWORD */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="*********"
            w="70%"
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={handleCreateAccount}
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
