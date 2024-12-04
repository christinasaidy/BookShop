import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const Hero = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('BookCategories'); // Navigate to BookCategories screen
  };

  return (
<ScrollView>
    <View style={styles.heroContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/14985735/pexels-photo-14985735/free-photo-of-a-person-reading-a-book.jpeg' }}
          style={styles.image}
        />
        <View style={styles.overlay} />
      </View>
      <Text style={styles.title}>Welcome to The Bookshop</Text>
      <Text style={styles.description}>
        Explore a wide variety of books across all genres. Whether you're looking for fiction, non-fiction, or educational books,
        we have something for everyone!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Browse Books</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    paddingBottom: 30,
    backgroundColor: '#000000', // Keep black background
  },
  imageContainer: {
    width: '100%',
    height: 350,
    marginBottom: 30,
    borderRadius: 10,
    overflow: 'hidden', // Ensure overlay doesn't go outside the image border
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text contrast
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FAF3E0', // Updated text color to #FAF3E0
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 30,
    color: '#FAF3E0', // Updated text color to #FAF3E0
  },
  button: {
    backgroundColor: '#1ABC9C', // Modern teal color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5, // Android shadow effect
  },
  buttonText: {
    color: '#FFFFFF', // White text for button
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Hero;
