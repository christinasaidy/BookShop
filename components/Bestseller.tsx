import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import stranger from "../assets/images/stranger.jpg";

const Bestseller = () => {
  const { width } = useWindowDimensions(); // Get screen width

  // Calculate dynamic styles based on screen size
  const isLargeScreen = width > 600;
  const containerPadding = isLargeScreen ? 40 : 15;  // Reduce padding on smaller screens
  const imageSize = isLargeScreen ? { width: 300, height: 400 } : { width: 180, height: 240 };  // Smaller image on small screens

  return (
    <View style={[styles.bestsellerContainer, { padding: containerPadding }]}>
      {/* Left side with the description */}
      <View style={[styles.textContainer, { marginRight: isLargeScreen ? 40 : 15 }]}>
        <Text style={[styles.title, { fontSize: isLargeScreen ? 28 : 22 }]}>Best Seller of the Month</Text>
        <Text style={[styles.bookTitle, { fontSize: isLargeScreen ? 26 : 20 }]}>The Stranger</Text>
        <Text style={[styles.author, { fontSize: isLargeScreen ? 20 : 16 }]}>by Albert Camus</Text>
        
        {/* Book Genre Badge */}
        <View style={styles.genreBadge}>
          <Text style={styles.genreText}>Philosophy</Text>
        </View>

        {/* Book Description */}
        <Text style={[styles.description, { fontSize: isLargeScreen ? 18 : 14 }]}>
          "The Stranger" is a philosophical novel by Albert Camus. It tells the story of Meursault, an emotionally detached
          man who commits an inexplicable act of violence. The book explores themes of existentialism, the meaning of life,
          and the absurdity of the human condition.
        </Text>

        {/* Add to Cart / Buy Now button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>

        {/* Rating Section with Stars */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>⭐ 4.5 (125 Reviews)</Text>
        </View>
      </View>

      {/* Right side with the book image */}
      <Image
        source={stranger}
        style={[styles.bookImage, imageSize]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bestsellerContainer: {
    marginTop: 40,
    flexDirection: 'row', // Arrange the text and image side by side
    alignItems: 'center', // Vertically center items
    backgroundColor: '#000000', // Black background
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Adding a shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginHorizontal: 'auto', // Center the container horizontally
    alignSelf: 'center', // Align container for larger screens
    width: '90%', // Ensure the container doesn't exceed screen bounds
    maxWidth: 1000, // Limit maximum width for larger screens
    overflow: 'hidden', // Prevent image from overflowing container
  },
  textContainer: {
    flex: 1, // Take up the remaining space
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    width: 'fit-content',
  },
  genreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#FAF3E0', // Light color for readability
    lineHeight: 24, // Make text easier to read
  },
  bookImage: {
    borderRadius: 8, // Rounded corners for the image
    borderWidth: 2,
    borderColor: '#ccc', // Border around the image
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buyButton: {
    backgroundColor: '#1ABC9C', // Modern teal color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#FFD700', // Gold color for the stars
  },
});

export default Bestseller;
