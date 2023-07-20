import { Box, Button, HStack, ScrollView, Text, Badge } from "native-base";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import Colors from "../../color";
import axios from "axios";

const Orders = ({ userID }) => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, [userID]); 

  const fetchOrders = async () => {
    try {
      if (userID) {
        const response = await axios.get(
          `https://64b7e2fd21b9aa6eb079381c.mockapi.io/payment?userID=${userID}`
        );
        const data = response.data;
        setOrders(data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders.length === 0 ? (
          <Text textAlign="center" fontSize={15} color={Colors.black} mt={5}>
            No transaction yet
          </Text>
        ) : (
          orders.map((order) => (
            <Pressable key={order.id}>
              <HStack
                space={4}
                justifyContent="space-between"
                alignItems="center"
                bg={Colors.deepGray}
                py={5}
                px={2}
              >
                <Text fontSize={15} color={Colors.blue} isTruncated>
                  {order.vnp_TxnRef}
                </Text>
                <Badge
                  variant="subtle"
                  colorScheme={order.totalPrice > 0 ? "success" : "danger"}
                  p={1}
                  rounded="md"
                >
                  {order.totalPrice > 0 ? "PAID" : "NOT PAID"}
                </Badge>
                <Text fontSize={15} italic color={Colors.black} isTruncated>
                  {new Date(order.paymentDateTime * 1000).toLocaleDateString()}
                </Text>
                <Button
                  px={7}
                  py={1.5}
                  rounded={50}
                  bg={order.totalPrice > 0 ? Colors.main : Colors.red}
                  _text={{
                    color: Colors.white,
                  }}
                  _pressed={{
                    bg: order.totalPrice > 0 ? Colors.main : Colors.red,
                  }}
                >
                  <Text>
                    {order.totalPrice.toLocaleString("en-US")} VND
                  </Text>
                </Button>
              </HStack>
            </Pressable>
          ))
        )}
      </ScrollView>
    </Box>
  );
};

export default Orders;
