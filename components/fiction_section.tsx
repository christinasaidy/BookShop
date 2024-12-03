// components/fiction_section.tsx
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Gallery from './gallery'; // Import the Gallery component to display items

export default function FictionSection() {
  const items = [
    {
      photo: 'https://via.placeholder.com/150',
      description: 'Fiction Book 1: The Mystery of the Lost Treasure',
      price: 12.99,
    },
    {
      photo: 'https://via.placeholder.com/150',
      description: 'Fiction Book 2: A Tale of Two Cities',
      price: 18.49,
    },
    {
      photo: 'https://via.placeholder.com/150',
      description: 'Fiction Book 3: The Great Adventure',
      price: 25.99,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Gallery title="Fiction Books" items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
