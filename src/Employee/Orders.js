import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const Orders = () => {
  const [waitingProducts, setWaitingProducts] = useState([]);
  const [confirmProducts, setConfirmProducts] = useState([]);
  const [doneProducts, setDoneProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://64b7e2fd21b9aa6eb079381c.mockapi.io/orders")
      .then((response) => {
        const data = response.data;

        // Lọc ra các sản phẩm có status là "Waiting"
        const waitingProducts = data.filter(
          (product) => product.status === "Waiting"
        );
        setWaitingProducts(waitingProducts);

        // Lọc ra các sản phẩm có status là "Confirm"
        const confirmProducts = data.filter(
          (product) => product.status === "Confirm"
        );
        setConfirmProducts(confirmProducts);

        // Lọc ra các sản phẩm có status là "Done"
        const doneProducts = data.filter(
          (product) => product.status === "Done"
        );
        setDoneProducts(doneProducts);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  };

  const handleConfirmProduct = (id) => {
    axios
      .put(`https://64b7e2fd21b9aa6eb079381c.mockapi.io/orders/${id}`, {
        status: "Confirm",
      })
      .then((response) => {
        // Sau khi xác nhận thành công, gọi lại fetchProducts để tải lại dữ liệu
        fetchProducts();
      })
      .catch((error) => {
        console.error("Error confirming product:", error);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productText}>
        ID: {item.id} - User ID: {item.userID} - Total Price: {item.totalPrice}
      </Text>
      {item.status === "Waiting" && (
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => handleConfirmProduct(item.id)}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Waiting" options={{ title: "Waiting" }}>
          {() => (
            <FlatList
              data={waitingProducts}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Text style={styles.title}>Waiting Screen</Text>
              }
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Confirm" options={{ title: "Confirm" }}>
          {() => (
            <FlatList
              data={confirmProducts}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Text style={styles.title}>Confirm Screen</Text>
              }
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Done" options={{ title: "Done" }}>
          {() => (
            <FlatList
              data={doneProducts}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Text style={styles.title}>Done Screen</Text>
              }
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  productContainer: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "#008000",
    padding: 8,
    borderRadius: 4,
  },
  confirmButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Orders;
