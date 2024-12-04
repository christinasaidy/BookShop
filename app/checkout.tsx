import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';  // Use the router from expo-router

export default function CheckoutScreen() {
  const router = useRouter(); // Initialize the router

  // States for the form inputs
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

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

    // Add order processing logic here

    // Navigate back to the home screen (index) using router.push
    router.push('/');  // This should navigate to the index screen in the tabs
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
          placeholderTextColor="#bbb" // Light color for placeholders
        />
        
        {/* Address Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
          placeholderTextColor="#bbb" // Light color for placeholders
        />
        
        {/* Phone Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          placeholderTextColor="#bbb" // Light color for placeholders
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#bbb" // Light color for placeholders
          keyboardType="email-address"
        />
      </View>

      <View style={styles.orderSummary}>
        <Text style={styles.text}>Order Summary</Text>
        {/* Here you can replace with the actual cart total */}
        <Text style={styles.text}>Total: $100.00</Text> 
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
    backgroundColor: '#000', // Black background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff', // White text for the title
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
    color: '#fff', // White text for inputs
  },
  orderSummary: {
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    color: '#ddd', // Light gray text for general text
  },
  confirmButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignSelf: 'center',
  },
  confirmButtonText: {
    color: '#fff', // White text for the button
    fontSize: 16,
    fontWeight: 'bold',
  },
});
