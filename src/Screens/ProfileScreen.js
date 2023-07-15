import { Center, Heading, Image, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";

function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/00/54/72/0054722b7d5a096223ebaf2620ee2440.jpg",
            }}
            alt="profile"
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Hoang Nha Thy
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined July 16 2023
        </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  );
}

export default ProfileScreen;
