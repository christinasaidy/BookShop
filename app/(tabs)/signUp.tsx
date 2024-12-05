import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useRouter } from 'expo-router';

const Auth = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // State to track whether we are in Sign Up or Sign In mode
  const router = useRouter();

  // Handle user signup
  const handleSignUp = async () => {
    const userData = { firstName, lastName, email, password };

    try {
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      // Check if the email already exists
      const emailExists = users.some(user => user.email === email);
      if (emailExists) {
        Alert.alert('Error', 'Email already in use');
        return;
      }

      users.push(userData);
      await AsyncStorage.setItem('users', JSON.stringify(users));

      Alert.alert('Success', 'User signed up successfully!');
      setIsSignUp(false); // Switch to Sign In after successful Sign Up
    } catch (error) {
      console.error('Error saving user data:', error);
      Alert.alert('Error', 'There was an error saving your data.');
    }
  };

  // Handle user sign in
  const handleSignIn = async () => {
    try {
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        Alert.alert('Success', 'User signed in successfully!');
        router.push('/'); // Redirect to the home page after successful sign in
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      Alert.alert('Error', 'There was an error during sign-in.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>

      {isSignUp && (
        <>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholderTextColor="#aaa"
          />
        </>
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button} onPress={isSignUp ? handleSignUp : handleSignIn}>
        <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.toggleLink} onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={styles.toggleText}>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#0000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: 'white',
  },
  button: {
    backgroundColor: '#1abc9c',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  toggleText: {
    color: '#1abc9c',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Auth;
