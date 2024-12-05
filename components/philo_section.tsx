import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import Gallery from './gallery';
import FictionItems from '../database/philo_items.json';
import { useCart } from '@/hooks/CartContext'; // Import the useCart hook

// Define the images object with local images using require
const images: { [key: string]: any } = {
  'myth_of_sisyphos.png': require('../assets/images/myth_of_sisyphos.png'),
  'nausea.jpg': require('../assets/images/nausea.jpg'),
  'stranger.jpg': require('../assets/images/stranger.jpg'),
  'being_and_time.jpg': require('../assets/images/being_and_time.jpg'),
};

export default function PhilosophicalSection() {
  const { cart, addToCart } = useCart(); // Get cart and addToCart function from context

  // Map the items and replace the local image paths with the corresponding require statements
  const items = FictionItems.map((item) => {
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
