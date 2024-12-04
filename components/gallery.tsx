import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';

type Item = {
  id: number;
  photo: any;
  description: string;
  price: number;
};

type GalleryProps = {
  title: string;
  items: Item[];
  addToCart: (item: Item) => void; // Function to add item to cart
};

const Gallery = ({ title, items, addToCart }: GalleryProps) => {
  const { width } = useWindowDimensions(); // Get screen width
  const isLargeScreen = width > 800; // Breakpoint for large screens

  const handleAddToCart = (item: Item) => {
    addToCart(item); // Call the parent function to add item to the cart
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.itemsContainer,
          { justifyContent: isLargeScreen ? 'space-between' : 'center' },
        ]}
      >
        {items.map((item) => (
          <View
            style={[
              styles.item,
              {
                width: isLargeScreen ? '25%' : '45%', // Adjust item width dynamically
                marginHorizontal: isLargeScreen ? 10 : 0,
              },
            ]}
            key={item.id}
          >
            <Image
              source={item.photo}
              style={[styles.image, { height: isLargeScreen ? 300 : 200 }]} // Dynamically set height of the image
            />
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToCart(item)} // Add item to cart on button press
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Black background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text for the title
    marginBottom: 20,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20, // Space between items
  },
  item: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#1a1a1a', // Slightly lighter black for contrast
    borderRadius: 10,
    padding: 10,
    shadowColor: '#fff', // Light shadow for a glowing effect
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ddd', // Light gray for description text
  },
  price: {
    fontSize: 14,
    textAlign: 'center',
    color: '#aaa', // Slightly dimmer gray for price text
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', // White text for buttons
    fontSize: 16,
  },
});

export default Gallery;
