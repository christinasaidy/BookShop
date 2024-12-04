import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hero from '../../components/Hero';
import QuoteOfTheDay from '../../components/QuoteOfTheDay';
import Bestseller from '../../components/Bestseller';
import Footer from '../../components/Footer';
import Trending from '../../components/Trendingnow';
import BookCategories from '../../components/BookCategories'; // Import BookCategories screen
import ClassicalSection from '../../components/classical_section'; // Classical section screen
import FictionSection from '../../components/fiction_section';
import PhilosophicalSection from '../../components/philo_section';
import CheckoutScreen from '../checkout';

const Stack = createNativeStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Hero navigation={navigation} />
        <Trending />
        <Bestseller />
        <QuoteOfTheDay
          quote="A room without books is like a body without a soul."
          author="Marcus Tullius Cicero"
        />
        <Footer />
        <Text style={styles.footer}>© 2024 Bookshop - All Rights Reserved</Text>
      </View>
    </ScrollView>
  );
};

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BookCategories" component={BookCategories} />
      <Stack.Screen name="ClassicalSection" component={ClassicalSection} />
      <Stack.Screen name="FictionSection" component={FictionSection} />
      <Stack.Screen name="PhilosophicalSection" component={PhilosophicalSection} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    // Ensuring the ScrollView content wraps correctly
    paddingBottom: 20, // Add some padding at the bottom
  },
  container: {
    // Container to hold all screen elements
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20, // Ensuring there's space at the bottom of the content
  },
  footer: {
    fontSize: 12,
    color: '#888',
    marginTop: 30,
  },
});

export default App;
