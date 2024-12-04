import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import george from "../assets/images/1984.jpg";
import stranger from "../assets/images/stranger.jpg";
import brave_new_world from "../assets/images/brave_new_world.jpg";
import moby_dick from "../assets/images/moby_dick.jpg";

const TrendingNow = () => {
  const { width } = useWindowDimensions(); // Get current screen width

  const books = [
    {
      title: "The Stranger",
      author: "Albert Camus",
      imageUrl: stranger,
    },
    {
      title: "1984",
      author: "George Orwell",
      imageUrl: george,
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      imageUrl: brave_new_world,
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      imageUrl: moby_dick,
    },
  ];

  // Calculate dynamic styles based on screen size
  const containerPadding = width > 600 ? 40 : 20;
  const bookItemWidth = width > 600 ? '22%' : '45%';
  const imageHeight = width > 600 ? 360 : 280; // test test test 

  return (
    <View style={[styles.container, { padding: containerPadding, width: width > 600 ? '90%' : '100%' }]}>
      <Text style={styles.title}>Trending Now</Text>
      <View style={styles.booksContainer}>
        {books.map((book, index) => (
          <View style={[styles.bookContainer, { width: bookItemWidth }]} key={index}>
            <Image
              source={typeof book.imageUrl === 'string' ? { uri: book.imageUrl } : book.imageUrl}
              style={[styles.bookImage, { height: imageHeight }]}
            />
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookAuthor}>{book.author}</Text> 
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    backgroundColor: '#000', 
    alignSelf: 'center', 
    borderRadius: 10, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
    textAlign: 'center',
  },
  booksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  bookContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bookImage: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', 
  },
  bookAuthor: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ccc', 
  },
});

export default TrendingNow;
