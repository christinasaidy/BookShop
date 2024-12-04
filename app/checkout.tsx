import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CheckoutScreen() {
  const navigation = useNavigation();

  // States for the form inputs
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOrderConfirmation = () => {
    // Validation for the form inputs
    if (!name || !address || !phoneNumber) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    // You can add your order processing logic here

    // Navigate back to the main screen after checkout
    navigation.navigate('Main');
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
        />
        
        {/* Address Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
        />
        
        {/* Phone Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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
  },
  orderSummary: {
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    color: '#333',
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
