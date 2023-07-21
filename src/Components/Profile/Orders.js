import { Box, Button, HStack, ScrollView, Text, Badge } from "native-base";
import React, { useEffect, useState } from "react";
import { Pressable, Alert } from "react-native";
import Colors from "../../color";
import axios from "axios";

const Orders = ({ userID }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, [userID]);

  const fetchOrders = async () => {
    try {
      if (userID) {
        const response = await axios.get(
          `https://64b7e2fd21b9aa6eb079381c.mockapi.io/orders?userID=${userID}`
        );
        const data = response.data;
        setOrders(data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Helper function to get colorScheme based on status
  const getColorScheme = (status) => {
    switch (status) {
      case "Waiting":
        return "warning"; // Yellow color for Waiting status
      case "Confirm":
        return "danger"; // Red color for Confirm status
      case "Done":
        return "primary"; // Blue color for Done status
      default:
        return "info"; // Default color for unknown status
    }
  };

  const handleConfirmButtonPress = async (order) => {
    // Display an alert to confirm the action
    Alert.alert("Confirm", "Are you sure you want to change the status to Done?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => updateOrderStatus(order),
      },
    ]);
  };

  const updateOrderStatus = async (order) => {
    try {
      const updatedOrder = { ...order, status: "Done" };
      const response = await axios.put(
        `https://64b7e2fd21b9aa6eb079381c.mockapi.io/orders/${order.id}`,
        updatedOrder
      );

      if (response.status === 200) {
        // Refresh the orders after updating the status
        fetchOrders();
      }
    } catch (error) {
      console.error("Error updating order status:", error);
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
            <Pressable key={order.id} onPress={() => handleConfirmButtonPress(order)}>
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
                {order.status === "Confirm" ? (
                  <Pressable onPress={() => handleConfirmButtonPress(order)}>
                    <Badge
                      variant="subtle"
                      colorScheme={getColorScheme(order.status)} // Set color based on status
                      p={3}
                      rounded="md"
                    >
                      <Text>Confirm</Text>
                    </Badge>
                  </Pressable>
                ) : (
                  <Badge
                  variant="subtle"
                  colorScheme={getColorScheme(order.status)} // Set color based on status
                  p={3}
                  rounded="md"
                >
                  {order.status}
                </Badge>
                )}
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
