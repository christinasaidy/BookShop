import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

type Item = {
  id: number;
  photo: any;
  description: string;
  price: number;
};

type GalleryProps = {
  title: string;
  items: Item[];
  addToCart: (item: Item) => void;  // Function to add item to cart
};

const Gallery = ({ title, items, addToCart }: GalleryProps) => {
  const handleAddToCart = (item: Item) => {
    addToCart(item);  // Call the parent function to add item to the cart
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemsContainer}>
        {items.map((item) => (
          <View style={styles.item} key={item.id}>
            <Image source={item.photo} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToCart(item)}  // Add item to cart on button press
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
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 20,
  },
  item: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  price: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Gallery;
