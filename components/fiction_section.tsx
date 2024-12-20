import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import Gallery from './gallery';
import FictionItems from '../database/fiction_items.json';
import { useCart } from '@/hooks/CartContext'; // Import the useCart hook

// Define the images object with local images using require
const images: { [key: string]: any } = {
  'catcher_of_a_rye.jpg': require('../assets/images/catcher_of_a_rye.jpg'),
  'hunget_games.jpg': require('../assets/images/hunget_games.jpg'),
  'the_bell_jar.jpg': require('../assets/images/the_bell_jar.jpg'),
  'the_fault_of_our_stars.jpg': require('../assets/images/the_fault_of_our_stars.jpg'),
};

export default function FictionSection() {
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
