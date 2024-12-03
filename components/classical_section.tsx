import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Gallery from './gallery';

export default function ClassicalSection() {
  const items = [
    {
      photo: 'https://via.placeholder.com/150',
      description: 'Book 1: A Journey to the Unknown',
      price: 10.99,
    },
    {
      photo: 'https://via.placeholder.com/150',
      description: 'Book 2: The Art of Learning',
      price: 15.49,
    },
    {
      photo: 'https://via.placeholder.com/150',
      description: 'Book 3: Adventures in React Native',
      price: 20.99,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Gallery title="Featured Books" items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
