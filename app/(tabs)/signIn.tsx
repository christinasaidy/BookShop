import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useRouter } from 'expo-router'; // Import useRouter

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const router = useRouter(); // Initialize useRouter

  // Check if the user is already signed in
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await AsyncStorage.getItem('isLoggedIn');
        console.log('Logged in status:', loggedIn);
        if (loggedIn === 'true') {
          setIsLoggedIn(true);
          router.push('/'); // Navigate to home page if already signed in
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
    checkLoginStatus();
  }, []);

  const handleSignIn = async () => {
    try {
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];
  
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
  
      if (user) {
        Alert.alert('Success', `Welcome back, ${user.firstName}!`);
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('user', JSON.stringify(user)); // Save user info
        setIsLoggedIn(true);
        router.push('/'); // Navigate to home page
      } else {
        Alert.alert('Error', 'Invalid email or password.');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      Alert.alert('Error', 'There was an error signing you in.');
    }
  };
  

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      await AsyncStorage.removeItem('user');
      setIsLoggedIn(false);
      router.push('/signIn'); // Navigate back to the sign-in page
    } catch (error) {
      console.error('Error signing out:', error);
      Alert.alert('Error', 'There was an error signing you out.');
    }
  };
  
  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <>
          <Text style={styles.title}>Sign In</Text>

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

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton} onPress={() => router.push('/signUp')}>
            <Text style={styles.linkText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>You are signed in!</Text>

          <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </>
      )}
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
  linkButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  linkText: {
    color: '#1abc9c',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignIn;