import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import stranger from "../assets/images/stranger.jpg";

const Bestseller = () => {
  const { width } = useWindowDimensions(); // Get screen width

  // Calculate dynamic styles based on screen size
  const isLargeScreen = width > 600;
  const containerPadding = isLargeScreen ? 40 : 20;
  const imageSize = isLargeScreen ? { width: 300, height: 400 } : { width: 200, height: 270 };

  return (
    <View style={[styles.bestsellerContainer, { padding: containerPadding }]}>
      {/* Left side with the description */}
      <View style={[styles.textContainer, { marginRight: isLargeScreen ? 40 : 20 }]}>
        <Text style={[styles.title, { fontSize: isLargeScreen ? 28 : 24 }]}>Best Seller of the Month</Text>
        <Text style={[styles.bookTitle, { fontSize: isLargeScreen ? 26 : 22 }]}>The Stranger</Text>
        <Text style={[styles.author, { fontSize: isLargeScreen ? 20 : 18 }]}>by Albert Camus</Text>
        <Text style={[styles.description, { fontSize: isLargeScreen ? 18 : 16 }]}>
          "The Stranger" is a philosophical novel by Albert Camus. It tells the story of Meursault, an emotionally detached
          man who commits an inexplicable act of violence. The book explores themes of existentialism, the meaning of life,
          and the absurdity of the human condition.
        </Text>
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
    backgroundColor: '#F5F5DC', // Light background for the section
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Adding a shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginHorizontal: 'auto', // Center the container horizontally
    alignSelf: 'center', // Align container for larger screens
    width: '90%', // Ensure the container doesn't exceed screen bounds
    maxWidth: 1000, // Limit maximum width for larger screens
  },
  textContainer: {
    flex: 1, // Take up the remaining space
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Space between title and book title
    color: '#2a2a2a',
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5, // Space between book title and author
    color: '#333',
  },
  author: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 15, // Space between author and description
    color: '#555',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24, // Make text easier to read
  },
  bookImage: {
    borderRadius: 8, // Rounded corners for the image
  },
});

export default Bestseller;
