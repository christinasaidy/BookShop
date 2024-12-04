import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import Gallery from './gallery';
import classicalItems from '../database/classical_items.json';
import { useCart } from '@/hooks/CartContext'; // Import the useCart hook

// Define the images object with local images using require
const images: { [key: string]: any } = {
  '1984.jpg': require('../assets/images/1984.jpg'),
  'brave_new_world.jpg': require('../assets/images/brave_new_world.jpg'),
  'moby_dick.jpg': require('../assets/images/moby_dick.jpg'),
  // Add more images as needed
};

export default function ClassicalSection() {
  const { cart, addToCart } = useCart(); // Get cart and addToCart function from context

  // Map the items and replace the local image paths with the corresponding require statements
  const items = classicalItems.map((item) => {
    if (typeof item.photo === 'string' && images[item.photo]) {
      item.photo = images[item.photo]; // Replace with require
    }
    return item;
  });

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Gallery title="Featured Books" items={items} addToCart={addToCart} />
        <Text style={styles.cartText}>Items in Cart: {cart.length}</Text> {/* Show the number of items in the cart */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
});
