import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import george from "../assets/images/1984.jpg";
import stranger from "../assets/images/stranger.jpg";
import brave_new_world from "../assets/images/brave_new_world.jpg";
import moby_dick from "../assets/images/moby_dick.jpg";

const TrendingNow = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Now</Text>
      <View style={styles.booksContainer}>
        {books.map((book, index) => (
          <View style={styles.bookContainer} key={index}>
            <Image 
              source={typeof book.imageUrl === 'string' ? { uri: book.imageUrl } : book.imageUrl} 
              style={styles.bookImage} 
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
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  booksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 20,
  },
  bookContainer: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  bookImage: {
    width: '100%',
    height: 280,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
});

export default TrendingNow; 