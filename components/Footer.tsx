import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      {/* Contact Us and Follow Us Section */}
      <View style={styles.contactFollowContainer}>
        {/* Contact Us Section */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Contact Us</Text>

          <Text style={styles.contactText}>Phone Numbers:</Text>
          <Text style={styles.contactText}>
            +961 3004064 | +961 78900084
          </Text>

          <Text style={styles.contactText}>Email:</Text>
          <Text
            style={[styles.contactText, styles.email]}
            onPress={() => Linking.openURL('mailto:christina.saidy04@gmail.com')}
          >
            christina.saidy04@gmail.com
          </Text>
          <Text
            style={[styles.contactText, styles.email]}
            onPress={() => Linking.openURL('mailto:hani.abdel.ghani12@gmail.com')}
          >
            hani.abdel.ghani12@gmail.com
          </Text>
        </View>

        {/* Follow Us Section */}
        <View style={styles.socialContainer}>
          <Text style={styles.socialTitle}>Follow Us</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' }}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bookshop Footer Info */}
      <View style={styles.bookshopInfoContainer}>
        <Text style={styles.bookshopInfoText}>
          📚 Visit our store for the latest book releases and bestsellers!
        </Text>
        <Text style={styles.bookshopInfoText}>
          🛒 Enjoy discounts on selected items. Free shipping on orders over $50!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#000000',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 80, 
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  contactFollowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, 
  },
  contactContainer: {
    flex: 1, 
    marginRight: 20, 
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FAF3E0', // Light beige color
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#FAF3E0', // Light beige color
    marginBottom: 5,
  },
  email: {
    color: '#0066CC',
    textDecorationLine: 'underline',
  },
  socialContainer: {
    flex: 1, 
    alignItems: 'center',
  },
  socialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FAF3E0', // Light beige color
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 15,
  },
  bookshopInfoContainer: {
    marginTop: 30, 
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  bookshopInfoText: {
    fontSize: 16,
    color: '#FAF3E0', // Light beige color
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default Footer;
