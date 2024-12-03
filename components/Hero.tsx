// Hero.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Hero = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('BookCategories'); // Navigate to BookCategories screen
  };

  return (
    <View style={styles.heroContainer}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/14985735/pexels-photo-14985735/free-photo-of-a-person-reading-a-book.jpeg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to The Bookshop</Text>
      <Text style={styles.description}>
        Explore a wide variety of books across all genres. Whether you're looking for fiction, non-fiction, or educational books,
        we have something for everyone!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Browse Books</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: 600,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 30,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2a2a2a',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    color: '#555',
  },
  button: {
    backgroundColor: '#F5F5DC',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Hero;
