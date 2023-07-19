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
import { accounts, createAccount } from "../data/account";
import { useNavigation } from "@react-navigation/native";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    // Kiểm tra thông tin đăng ký và thực hiện các xử lý kiểm tra khác nếu cần
    if (name.trim() === "" || email.trim() === "" || account.trim() === "" || password.trim() === "") {
      // Hiển thị thông báo khi không nhập đủ thông tin
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Tạo tài khoản mới
    createAccount(name, email, account, password);

    // Hiển thị thông báo tạo tài khoản thành công (hoặc điều hướng đến trang đăng nhập)
    alert("Tạo tài khoản thành công");

    // Điều hướng đến trang đăng nhập
    navigation.navigate("Login");
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
          {/* NAME */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="Tên"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            value={name}
            onChangeText={(text) => setName(text)}
          />
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
          {/* ACCOUNT */}
          <Input
            InputLeftElement={
              <Ionicons name="person" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="Tên tài khoản"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            value={account}
            onChangeText={(text) => setAccount(text)}
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
