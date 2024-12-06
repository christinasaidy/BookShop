import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export default function CheckoutScreen() {
  const router = useRouter();
  const { totalPrice } = useLocalSearchParams(); // Retrieve total price passed from CartScreen

  // States for the form inputs
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          const parsedUser = JSON.parse(user);
          setName(parsedUser.firstName + ' ' + parsedUser.lastName); // Autofill name
          setEmail(parsedUser.email); // Autofill email
        }
      } catch (error) {
        console.error('Error loading user details:', error);
      }
    };

    loadUserDetails();
  }, []); // Run only once when the component is mounted

  const handleOrderConfirmation = () => {
    // Validation for the form inputs
    if (!name || !address || !phoneNumber || !email) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    // Validate email format
    if (!email.includes('@') || !email.includes('.com')) {
      Alert.alert(
        'Invalid Email',
        'Please enter a valid email address with "@" and ".com".',
        [{ text: 'OK' }]
      );
      return;
    }

    // Simulate order confirmation (you can add real processing logic here)
    Alert.alert('Order Confirmed', 'Your order has been placed successfully!', [
      { text: 'OK', onPress: () => router.push('/') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      <View style={styles.formContainer}>
        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#bbb"
        />
        
        {/* Address Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
          placeholderTextColor="#bbb"
        />
        
        {/* Phone Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          placeholderTextColor="#bbb"
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#bbb"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.orderSummary}>
        <Text style={styles.text}>Order Summary</Text>
        {/* Display the total price passed from CartScreen */}
        <Text style={styles.text}>Total: ${totalPrice}</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleOrderConfirmation}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  formContainer: {
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#fff',
  },
  orderSummary: {
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    color: '#ddd',
  },
  confirmButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignSelf: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
