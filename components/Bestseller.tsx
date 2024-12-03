import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import stranger from "../assets/images/stranger.jpg";
const Bestseller = () => {
  return (
    <View style={styles.bestsellerContainer}>
      {/* Left side with the description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Best Seller of the Month</Text>
        <Text style={styles.bookTitle}>The Stranger</Text>
        <Text style={styles.author}>by Albert Camus</Text>
        <Text style={styles.description}>
          "The Stranger" is a philosophical novel by Albert Camus. It tells the story of Meursault, an emotionally detached
          man who commits an inexplicable act of violence. The book explores themes of existentialism, the meaning of life,
          and the absurdity of the human condition.
        </Text>
      </View>

      {/* Right side with the book image */}
      <Image
        source={ stranger }
        style={styles.bookImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bestsellerContainer: {
    marginTop: 40,
    flexDirection: 'row', // Arrange the text and image side by side
    alignItems: 'center', // Vertically center items
    padding: 20,
    marginVertical: 20,
    backgroundColor: '#F5F5DC', // Light background for the section
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Adding a shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    margin: 30,
    
  
  },
  textContainer: {
    flex: 1, // Take up the remaining space
    marginRight: 20, // Space between text and image
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
    width: 200, // Width of the book cover
    height: 270, // Height of the book cover
    borderRadius: 8, // Rounded corners for the image
  },
});

export default Bestseller;
