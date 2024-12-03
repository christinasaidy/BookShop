import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
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
      </View>

      {/* Social Media Icons */}
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

          <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com')}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2012.png' }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#000000',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  contactContainer: {
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  email: {
    color: '#0066CC',
    textDecorationLine: 'underline',
  },
  socialContainer: {
    alignItems: 'center',
  },
  socialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default Footer;
