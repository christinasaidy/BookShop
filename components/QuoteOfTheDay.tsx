import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';

const QuoteOfTheDay = () => {
  const { width } = useWindowDimensions(); // Get screen width

  // Adjust layout for larger screens
  const isLargeScreen = width > 800; // Adjust breakpoint as needed
  const quoteWidth = isLargeScreen ? '28%' : '30%'; // Slightly reduce quote container size on large screens
  const containerPadding = isLargeScreen ? 30 : 20; // Reduce padding for larger screens

  return (
    <View style={[styles.quoteSection, { paddingHorizontal: containerPadding }]}>
      {/* Title for the Quote section */}
      <Text style={styles.title}>Inspirational Quotes of the Day</Text>

      {/* Row container for the 3 quote boxes */}
      <View style={styles.rowContainer}>
        {/* Quote 1 */}
        <TouchableOpacity style={[styles.quoteContainer, { width: quoteWidth }]}>
          <Text style={styles.quoteText}>"The only way to do great work is to love what you do."</Text>
          <Text style={styles.authorText}>- Steve Jobs</Text>
        </TouchableOpacity>

        {/* Quote 2 */}
        <TouchableOpacity style={[styles.quoteContainer, { width: quoteWidth }]}>
          <Text style={styles.quoteText}>"A room without books is like a body without a soul."</Text>
          <Text style={styles.authorText}>- Marcus Tullius Cicero</Text>
        </TouchableOpacity>

        {/* Quote 3 */}
        <TouchableOpacity style={[styles.quoteContainer, { width: quoteWidth }]}>
          <Text style={styles.quoteText}>"The more that you read, the more things you will know."</Text>
          <Text style={styles.authorText}>- Dr. Seuss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteSection: {
    marginTop: 60,
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#000000', // Soft warm background for the section #FAF3E0
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    paddingVertical: 30,
    width: '100%',
    maxWidth: 1100, // Limit max width to avoid too much stretching on large screens
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FAF3E0',
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap', // Allow wrapping of quote boxes if needed
  },
  quoteContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FAF3E0', // Warm yellow for the background
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3, // Android shadow effect
    transform: [{ scale: 1 }],
    transition: 'transform 0.3s ease',
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'Georgia', // More elegant font for the quote
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555',
    marginTop: 5,
  },
});

export default QuoteOfTheDay;
