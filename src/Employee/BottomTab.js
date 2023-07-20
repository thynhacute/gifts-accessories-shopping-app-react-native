import { View, Text, StyleSheet,TextInput } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialCommunityIcons, Entypo, AntDesign } from "@expo/vector-icons";
import Colors from "../color";
import Products from "./Products";
import Orders from "./Orders";
import { Center, Pressable } from "native-base";
import {Button } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true, // Hiện tiêu đề của các tab
        activeTintColor: Colors.red, // Màu của biểu tượng khi được chọn
        inactiveTintColor: Colors.black, // Màu của biểu tượng khi không được chọn
        style: styles.tab, // Kiểu cho tab bar
      }}
    >
      <Tab.Screen
        name="Product"
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <MaterialCommunityIcons name="home" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5 name="heart" size={24} color={Colors.main} />
              ) : (
                <Entypo name="heart" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
  },
});

export default BottomTab;
