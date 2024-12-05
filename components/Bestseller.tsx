import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import stranger from "../assets/images/stranger.jpg";
import { useCart } from '@/hooks/CartContext'; // Import useCart hook

const Bestseller = () => {
  const { width } = useWindowDimensions(); // Get screen width
  const { addToCart } = useCart(); // Access the addToCart function

  // Book details
  const book = {
    title: "The Stranger by Albert Camus",
    price: 15.99, // Price of the book
    photo: stranger, // Reference to the image
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(book); // Add the book to the cart
    alert(`${book.title} added to cart!`); // Show confirmation
  };

  // Dynamic styles
  const isLargeScreen = width > 600;
  const containerPadding = isLargeScreen ? 40 : 15;
  const imageSize = isLargeScreen ? { width: 300, height: 400 } : { width: 150, height: 200 };

  return (
    <View style={[styles.bestsellerContainer, { padding: containerPadding }]}>
      <View style={[styles.textAndImageContainer, { flexDirection: isLargeScreen ? 'row' : 'column' }]}>
        {/* Text Section */}
        <View style={[styles.textContainer, { marginRight: isLargeScreen ? 40 : 0, marginBottom: isLargeScreen ? 0 : 20 }]}>
          <Text style={[styles.title, { fontSize: isLargeScreen ? 28 : 22 }]}>Best Seller of the Month</Text>
          <Text style={[styles.bookTitle, { fontSize: isLargeScreen ? 26 : 20 }]}>The Stranger</Text>
          <Text style={[styles.author, { fontSize: isLargeScreen ? 20 : 14 }]}>by Albert Camus</Text>

          <View style={styles.genreBadge}>
            <Text style={styles.genreText}>Philosophy</Text>
          </View>

          <Text style={[styles.description, { fontSize: isLargeScreen ? 18 : 14 }]}>
            "The Stranger" is a philosophical novel by Albert Camus. It tells the story of Meursault, an emotionally detached
            man who commits an inexplicable act of violence. The book explores themes of existentialism, the meaning of life,
            and the absurdity of the human condition.
          </Text>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐ 4.5 (125 Reviews)</Text>
          </View>
        </View>

        {/* Image Section */}
        <Image source={stranger} style={[styles.bookImage, imageSize]} />
      </View>

      {/* Add To Cart Button */}
      <TouchableOpacity style={styles.buyButton} onPress={handleAddToCart}>
        <Text style={styles.buyButtonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bestsellerContainer: {
    marginTop: 20,
    backgroundColor: '#000000', // Black background
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Adding a shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginHorizontal: 'auto', // Center the container horizontally
    width: '90%', // Ensure the container doesn't exceed screen bounds
    maxWidth: 1000, // Limit maximum width for larger screens
    overflow: 'hidden', // Prevent image from overflowing container
  },
  textAndImageContainer: {
    flexDirection: 'row', // Default to row, will switch to column on small screens
    alignItems: 'center', // Vertically center items on large screens
    flexWrap: 'wrap', // Allow wrapping of content on small screens
  },
  textContainer: {
    flex: 1, // Take up the remaining space
    justifyContent: 'center', // Vertically center content
    marginBottom: 20, // Add bottom margin for better spacing
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Space between title and book title
    color: '#FAF3E0', // Light color for readability
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5, // Space between book title and author
    color: '#FAF3E0', // Light color for readability
  },
  author: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 15, // Space between author and description
    color: '#FAF3E0', // Light color for readability
  },
  genreBadge: {
    backgroundColor: '#9B59B6', // Soft purple for the genre badge
    borderRadius: 5,
    paddingHorizontal: 8,  // Reduced padding inside the badge
    paddingVertical: 3,    // Reduced vertical padding
    marginBottom: 10,
    alignSelf: 'flex-start', // Align it with the text
  },
  genreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14, // Adjusted font size for better compactness
  },
  description: {
    fontSize: 16,
    color: '#FAF3E0', // Light color for readability
    lineHeight: 22, // Make text easier to read
  },
  bookImage: {
    borderRadius: 8, // Rounded corners for the image
    borderWidth: 2,
    borderColor: '#ccc', // Border around the image
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginBottom: 20, // Add some space below the image
  },
  buyButton: {
    backgroundColor: '#1ABC9C', // Modern teal color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20, // Space after the image
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#FFD700', // Gold color for the stars
  },
});

export default Bestseller;
