import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'native-base';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [genders, setGenders] = useState(['Nữ', 'Nam']);
  const [categories, setCategories] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);


  const [newProductName, setNewProductName] = useState('');
  const [selectedGender, setSelectedGender] = useState('Nữ');
  const [newProductCategory, setNewProductCategory] = useState('Name 1');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [CountInStock, setCountInStock] = useState('');
  const [newProductImage, setNewProductImage] = useState('');

  useEffect(() => {
    // Gửi yêu cầu GET đến API endpoint để lấy danh sách products
    axios.get('https://64b7e5bb21b9aa6eb0793cc6.mockapi.io/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://64b7e5bb21b9aa6eb0793cc6.mockapi.io/api/Category');
      return response.data; // Trả về dữ liệu "category" từ API
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };

  const fetchCategoriesData = async () => {
    const categoriesData = await fetchCategories();
    setCategories(categoriesData);
  };

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  const handleEditProduct = (productId) => {
  };

  const addProduct = async () => {
    const gender = selectedGender === '' ? 'Nữ' : selectedGender;

    const category = newProductCategory === '' ? 'name 1' : newProductCategory;
  
    const response = await axios.post('https://64b7e5bb21b9aa6eb0793cc6.mockapi.io/api/products', {
      name: newProductName,
      image: newProductImage,
      category: newProductCategory,
      gender: selectedGender,
      description: Description,
      price: Price,
      countInStock: CountInStock,
      // ... các thông tin khác của sản phẩm mới
    });

    // Lấy dữ liệu sản phẩm mới từ response
    const newProduct = response.data;

    // Thêm sản phẩm mới vào danh sách products
    setProducts([...products, newProduct]);

    // Đóng Modal
    setIsModalVisible(false);

    // Reset các giá trị ô input về trạng thái ban đầu
    setNewProductName('');
    setNewProductImage('');
    setNewProductCategory('');
    setSelectedGender('');
    setDescription('');
    setPrice('');
    setCountInStock('');
  }

  const handleShowAddForm = () => {
    setIsModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditProduct(item._id)}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteProduct(item._id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const sortedProducts = products.sort((a, b) => b.id - a.id);

  return (
    <View>
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        {/* Nội dung của Modal */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Form để thêm sản phẩm mới */}
            <TextInput
              style={styles.input}
              placeholder="Product Name"
              value={newProductName}
              onChangeText={(text) => setNewProductName(text)}
            />
            <Text style={styles.label}>Gender:</Text>
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue) => setSelectedGender(itemValue)}
            >
              {genders.map((gender) => (
                <Picker.Item key={gender} label={gender} value={gender} />
              ))}
            </Picker>

            <Text style={styles.label}>Category:</Text>
            <Picker
              selectedValue={newProductCategory}
              onValueChange={(itemValue) => setNewProductCategory(itemValue)}
            >
              {categories.map((category) => (
                <Picker.Item key={category.id} label={category.name} value={category.name} />
              ))}
            </Picker>
            
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={Description}
              onChangeText={(text) => setDescription(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={Price}
              onChangeText={(text) => setPrice(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="countInStock"
              value={CountInStock}
              onChangeText={(text) => setCountInStock(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="image link"
              value={newProductImage}
              onChangeText={(text) => setNewProductImage(text)}
            />
            
            <View style={styles.buttonsContainer}>
              <Button mode="contained" onPress={addProduct}>
                Add Product
              </Button>
              <Button mode="outlined" onPress={() => setIsModalVisible(false)}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.addButton} onPress={handleShowAddForm}>
        <Text style={styles.addButtonText}>Add Product</Text>
      </TouchableOpacity>
      <FlatList
        data={sortedProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center', // Đưa nút vào giữa màn hình theo chiều ngang
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'orange',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  editButtonText: {
    color: 'white',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    width: '80%', // Chiều rộng của form input là 80% của màn hình
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  }
});

export default Products;
