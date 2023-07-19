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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { accounts, createAccount } from "../data/account";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const [email, setEmail] = useState("hoangtam@gmail.com");
  const [password, setPassword] = useState("1");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Kiểm tra thông tin đăng nhập và thực hiện các xử lý kiểm tra khác nếu cần
    if (email.trim() === "" || password.trim() === "") {
      // Hiển thị thông báo khi không nhập đủ email và mật khẩu
      alert("Vui lòng nhập email và mật khẩu");
      console.log(accounts);
      return;
    }

    const foundAccount = accounts.find(
      (account) => account.gmail === email && account.password === password
    );

    if (foundAccount) {
      // Điều hướng đến trang HomeScreen
      navigation.navigate("Bottom");
    } else {
      console.log(accounts);
      // Xử lý khi đăng nhập không thành công (ví dụ: hiển thị thông báo lỗi)
      alert("Email, Password does not match, please re-enter");
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
          LOGIN
        </Heading>
        <VStack space={5}>
          {/* EMAIL */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {/* PASSWORD */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="*********"
            type="password"
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
          mt={6}
          rounded={50}
          bg={Colors.main}
          onPress={handleLogin}
        >
          LOGIN
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
