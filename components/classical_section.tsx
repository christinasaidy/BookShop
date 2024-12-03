import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Gallery from './gallery';
import classicalItems from '../database/classical_items.json';

// Define the images object with local images using require
const images: { [key: string]: any } = {
  '1984.jpg': require('../assets/images/1984.jpg'),
  'brave_new_world.jpg': require('../assets/images/brave_new_world.jpg'),
  'moby_dick.jpg':require('../assets/images/moby_dick.jpg')
  // Add more images as needed
};
export default function ClassicalSection() {
  // Map the items and replace the local image paths with the corresponding require statements
  const items = classicalItems.map(item => {
    // Check if the photo is a local image (it will be a string that matches a key in the images object)
    if (typeof item.photo === 'string' && images[item.photo]) {
      // Replace with require
      item.photo = images[item.photo];
    }
    return item;
  });

  return (
  <ScrollView>
    <SafeAreaView style={styles.container}>
      <Gallery title="Featured Books" items={items} />
    </SafeAreaView>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
