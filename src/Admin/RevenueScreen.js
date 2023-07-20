import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";

const API_URL = "https://64b7e2fd21b9aa6eb079381c.mockapi.io/orders";

const RevenueScreen = () => {
  const [revenueByToday, setRevenueByToday] = useState(0);
  const [revenueByMonth, setRevenueByMonth] = useState(0);
  const [orders, setOrders] = useState([]);
  const [selectedOption, setSelectedOption] = useState("day");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      setOrders(data);
      calculateRevenues(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const calculateRevenues = (data) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const thisMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).setHours(0, 0, 0, 0);
    let revenueToday = 0;
    let revenueMonth = 0;
  
    data.forEach((order) => {
      if (order.status === "Done") {
        const paymentDate = new Date(order.paymentDateTime * 1000); // Convert UNIX timestamp to milliseconds
        if (paymentDate >= today) {
          revenueToday += order.totalPrice;
        }
  
        if (paymentDate >= thisMonth) {
          revenueMonth += order.totalPrice;
        }
      }
    });
  
    setRevenueByToday(revenueToday);
    setRevenueByMonth(revenueMonth);
  };
  

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    calculateRevenues(orders, option); // Recalculate revenue based on the selected option
  };

  const getFormattedAmount = (amount) => {
    // Assuming the amount is in VND format, format it accordingly
    return `${amount.toLocaleString()} VND`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View>
          <Text style={styles.welcomeText}>Welcome Admin,</Text>
          <Text style={styles.userName}>Hoang Tam</Text>
        </View>
        <Image
          source={require("../../assets/favicon.png")} // Replace with the path to your small image
          style={styles.userImage}
        />
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <View style={styles.revenueRow}>
          <Text style={styles.revenueLabel}>Balance</Text>
        </View>
        <Text style={styles.balanceText}>{getFormattedAmount(revenueByToday)}</Text>
        <View style={styles.revenueRow}>
          <Text style={styles.revenueLabel}>Monthly Profit</Text>
        </View>
        <Text style={styles.balanceText}>{getFormattedAmount(revenueByMonth)}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#F5F5F5",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 20,
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'gray'
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  balanceSection: {
    width: "100%",
    padding: 20,
    backgroundColor: "#4169E1",
    borderRadius: 10,
    marginTop: 20,
  },
  balanceText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  revenueRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  revenueLabel: {
    color: "white",
    fontSize: 18,
  },
  revenueValue: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  revenueSection: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  optionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#E0E0E0",
  },
  selectedOption: {
    backgroundColor: "#2196F3",
  },
  optionText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RevenueScreen;
