// components/QuoteOfTheDay.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const QuoteOfTheDay = () => {
  return (
    <View style={styles.quoteSection}>
      {/* Title for the Quote section 
      <Text style={styles.title}>Inspirational Quotes of the Day</Text>*/}

      {/* Row container for the 3 quote boxes */}
      <View style={styles.rowContainer}>
        {/* Quote 1 */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>"The only way to do great work is to love what you do."</Text>
          <Text style={styles.authorText}>- Steve Jobs</Text>
        </View>

        {/* Quote 2 */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>"A room without books is like a body without a soul."</Text>
          <Text style={styles.authorText}>- Marcus Tullius Cicero</Text>
        </View>

        {/* Quote 3 */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>"The more that you read, the more things you will know."</Text>
          <Text style={styles.authorText}>- Dr. Seuss</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteSection: {
    marginTop: 40, // Added margin-top for spacing
    marginBottom: 30, // Added margin-bottom for spacing
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20, // Space between title and quotes
    color: '#2a2a2a',
  },
  rowContainer: {
    flexDirection: 'row', // Arrange containers horizontally
    justifyContent: 'space-between', // Distribute space between quotes
    width: '100%', // Full width of the container
  },
  quoteContainer: {
    width: '30%', // Each quote container takes up 30% of the width
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5DC', // Beige background
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  authorText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555',
  },
});

export default QuoteOfTheDay;
