import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Slideshow = ({ dataSource }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataSource.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dataSource.length) % dataSource.length);
  };

  return (
    <View style={styles.container}>
      {/* Slideshow images */}
      <View style={styles.slideContainer}>
        <Image
          source={{ uri: dataSource[currentIndex].image }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{dataSource[currentIndex].title}</Text>
          <Text style={styles.description}>{dataSource[currentIndex].description}</Text>
        </View>
      </View>

      {/* Arrow navigation */}
      <TouchableOpacity style={styles.arrowLeft} onPress={prevSlide}>
        <Text style={styles.arrowText}>{'<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={nextSlide}>
        <Text style={styles.arrowText}>{'>'}</Text>
      </TouchableOpacity>

      {/* Indicators */}
      <View style={styles.indicatorContainer}>
        {dataSource.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentIndex(index)}
            style={[styles.indicator, currentIndex === index && styles.indicatorActive]}
          />
        ))}
      </View>
    </View>
  );
};

Slideshow.defaultProps = {
  dataSource: [
    {
      title: 'The Great Gatsby',
      description: 'A novel by F. Scott Fitzgerald.',
      image: 'bookshop/assets/images/1984,png.jpg', 
    },
    {
      title: '1984',
      description: 'A dystopian novel by George Orwell.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/1984first.jpg', 
    },
    {
      title: 'Moby Dick',
      description: 'A tale by Herman Melville about obsession and revenge.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Moby-Dick_FE_title_page.jpg',
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 50, 
  },
  slideContainer: {
    width: windowWidth * 0.4, 
    height: 330, 
    alignItems: 'center',
    marginBottom: 10, 
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin: 5,
  },
  indicatorActive: {
    backgroundColor: '#fff',
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: [{ translateY: -20 }],
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -20 }],
  },
  arrowText: {
    fontSize: 30,
    color: 'white',
  },
});

export default Slideshow;
