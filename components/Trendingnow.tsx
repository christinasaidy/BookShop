import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { useCart } from '@/hooks/CartContext'; // Import useCart hook
import stranger from '../assets/images/stranger.jpg';
import sysyphos from '../assets/images/myth_of_sisyphos.png';
import nausea from '../assets/images/nausea.jpg';
import mobydick from '../assets/images/moby_dick.jpg';

const books = [
  {
    id: 1,
    image: stranger,
    description: "The Stranger",
    price: 15,
    description1:
      "Albert Camus's masterpiece exploring existential themes through the story of Meursault, a detached and indifferent protagonist.",
  },
  {
    id: 2,
    image: sysyphos,
    description: "The Myth of Sisyphus",
    price: 12,
    description1:
      "A philosophical essay by Albert Camus that delves into the absurd condition of human life and the search for meaning.",
  },
  {
    id: 3,
    image: nausea,
    description: "Nausea",
    price: 14,
    description1:
      "Jean-Paul Sartre's existentialist novel about Antoine Roquentin's profound realization of freedom and existence.",
  },
  {
    id: 4,
    image: mobydick,
    description: "Moby Dick",
    price: 18,
    description1:
      "Herman Melville's classic adventure about Captain Ahab's obsessive quest to hunt the great white whale.",
  },
];

const TrendingNow = () => {
  const { width } = useWindowDimensions();
  const { addToCart } = useCart();
  const [selectedBook, setSelectedBook] = useState(null);

  const isLargeScreen = width > 600;

  const openModal = (book) => setSelectedBook(book);
  const closeModal = () => setSelectedBook(null);

  // Convert book details to match CartItem structure
  const handleAddToCart = (book) => {
    const cartItem = {
      photo: book.image, // Map 'image' to 'photo'
      description: book.description, // Map 'description' directly
      price: book.price, // Map 'price' directly
    };
    addToCart(cartItem); // Add the formatted cart item to the cart
    closeModal(); // Close the modal after adding to cart
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { fontSize: isLargeScreen ? 28 : 24 }]}>
        Trending Now
      </Text>
      <View style={styles.booksContainer}>
        {books.map((book) => (
          <View key={book.id} style={styles.bookCard}>
            <Image source={book.image} style={styles.bookImage} />
            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={() => openModal(book)}
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {selectedBook && (
        <Modal visible={!!selectedBook} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <ScrollView style={styles.modalContent}>
              <Image source={selectedBook.image} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedBook.title}</Text>
              <Text style={styles.modalPrice}>
                ${selectedBook.price.toFixed(2)}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedBook.description1}
              </Text>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => handleAddToCart(selectedBook)} // Use handleAddToCart
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeModal}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#FAF3E0',
    textAlign: 'center',

  },
  booksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  bookCard: {
    width: 150,
    alignItems: 'center',
    marginBottom: 16,
  },
  bookImage: {
    width: 120,
    height: 180,
    resizeMode: 'cover',
  },
  viewDetailsButton: {
    marginTop: 15,
    backgroundColor: '#1ABC9C',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    maxHeight: '60%', // Reduced height
    backgroundColor: '#fff', // White background for modal
    padding: 16,
    borderRadius: 12, // Smooth edges
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  modalImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333', // Darker text for better contrast on white background
  },
  modalPrice: {
    fontSize: 18,
    color: '#1ABC9C',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    color: '#555', // Slightly lighter text
    marginBottom: 16,
  },
  addToCartButton: {
    backgroundColor: '#1ABC9C',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#f5f5f5', // Lighter close button
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#333',
    textAlign: 'center',
  },
});

export default TrendingNow;