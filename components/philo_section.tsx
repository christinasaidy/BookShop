// components/philosophical_section.tsx
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Gallery from './gallery'; // Import the Gallery component to display items

export default function PhilosophicalSection() {
  const items = [
    {
      photo: 'https://via.placeholder.com/150',
      description: 'Philosophy Book 1: The Republic',
      price: 14.99,
    },
    {
      photo: 'https://via.placeholder.com/150',
      description: 'Philosophy Book 2: Meditations by Marcus Aurelius',
      price: 19.49,
    },
    {
      photo: 'https://via.placeholder.com/150',
      description: 'Philosophy Book 3: The Critique of Pure Reason',
      price: 22.99,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Gallery title="Philosophical Books" items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
