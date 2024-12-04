// index.tsx
import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
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
import CheckoutScreen from '../../components/Checkout';
const Stack = createNativeStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Hero navigation={navigation} />
    
      <Trending />
      <Bestseller />
      <QuoteOfTheDay
        quote="A room without books is like a body without a soul."
        author="Marcus Tullius Cicero"
      />
      <Footer />
      <Text style={styles.footer}>© 2024 Bookshop - All Rights Reserved</Text>
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
      <Stack.Screen name = "PhilosophicalSection" component = {PhilosophicalSection}/>
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  footer: {
    fontSize: 12,
    color: '#888',
    marginTop: 30,
  },
});

export default App;
