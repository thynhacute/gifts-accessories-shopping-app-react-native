import React from "react";
import { View, Text, Button } from "native-base";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";


const LogoutButton = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ borderTopWidth: 1, borderTopColor: "#ccc", marginTop: 10, paddingTop: 10 }}>
        <Button onPress={handleLogout} block>
          <Text>Logout</Text>
        </Button>
      </View>
    </DrawerContentScrollView>
  );
};

export default LogoutButton;
