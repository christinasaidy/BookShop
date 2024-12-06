import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const QuoteOfTheDay = () => {
  const { width } = useWindowDimensions();

  // Responsive layout adjustments
  const isLargeScreen = width > 800; // Define a breakpoint for large screens
  const quoteWidth = isLargeScreen ? '28%' : '100%'; // Full width for small screens
  const containerPadding = isLargeScreen ? 30 : 20;

  return (
    <View style={[styles.quoteSection, { paddingHorizontal: containerPadding }]}>
      {/* Header for the section */}
      <Text style={styles.header}>Inspirational Quotes of the Day</Text>

      <View
        style={[ 
          styles.rowContainer, 
          { 
            flexDirection: isLargeScreen ? 'row' : 'column', // Stack vertically on small screens
            alignItems: 'center', // Center-align on all screens
            justifyContent: 'center', // Adjust layout based on screen size
          }
        ]}
      >
        {/* Quote 1 */}
        <View style={[styles.quoteContainer, { width: quoteWidth }]}>
          <Text style={styles.quoteText}>"The only way to do great work is to love what you do."</Text>
          <Text style={styles.authorText}>- Steve Jobs</Text>
        </View>

        {/* Quote 2 */}
        <View style={[styles.quoteContainer, { width: quoteWidth }]}>
          <Text style={styles.quoteText}>"A room without books is like a body without a soul."</Text>
          <Text style={styles.authorText}>- Marcus Tullius Cicero</Text>
        </View>

        {/* Quote 3 */}
        <View style={[styles.quoteContainer, { width: quoteWidth }]}>
          <Text style={styles.quoteText}>"The more that you read, the more things you will know."</Text>
          <Text style={styles.authorText}>- Dr. Seuss</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteSection: {
    marginTop: 60,
    alignItems: 'center',
    backgroundColor: '#000000', // Background for the section
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    paddingVertical: 30,
    width: '100%',
    maxWidth: 1100, // Max width for larger screens
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FAF3E0',
    marginBottom: 30,
    textAlign: 'center', // Center align the header
  },
  rowContainer: {
    flexWrap: 'wrap', // Allow wrapping
    width: '100%',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  },
  quoteContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FAF3E0', // Quote background
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    alignItems: 'center', // Center-align quote content
    justifyContent: 'center', // Center-align vertically
    marginBottom: 20,
    elevation: 3, // Android shadow
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'Georgia', // Elegant font
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
