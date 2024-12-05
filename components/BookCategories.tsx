import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BookCategories = ({ navigation }) => {
  const handleCategoryPress = (category: string) => {
    // Navigate to the corresponding section screen
    navigation.navigate(`${category}Section`);
  };

  return (
    <LinearGradient
      colors={['#000', '#000']} // Added gradient for fresher look
      style={styles.container}
    >
      <Text style={styles.title}>Explore Categories</Text>
      <View style={styles.buttonContainer}>

      <TouchableOpacity
          style={styles.button}
          onPress={() => handleCategoryPress('All')}
        >
          <Text style={styles.buttonText}>All Books</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCategoryPress('Classical')}
        >
          <Text style={styles.buttonText}>Classical Section</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCategoryPress('Fiction')}
        >
          <Text style={styles.buttonText}>Fiction Section</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCategoryPress('Philosophical')}
        >
          <Text style={styles.buttonText}>Philosophical Section</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FAF3E0',
    marginBottom: 30,
    textShadowColor: '#aaa',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FAF3E0',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});

export default BookCategories;