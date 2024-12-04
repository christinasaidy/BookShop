import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useCart } from '@/hooks/CartContext';
import { useNavigation } from 'expo-router';

export default function CartScreen() {
  const { cart } = useCart();
  const navigation = useNavigation();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    navigation.navigate('checkout'); // Navigate to CheckoutScreen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Your Cart</Text>

        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty</Text>
        ) : (
          <View style={styles.cartItemsContainer}>
            {cart.map((item, index) => (
              <View key={index} style={styles.cartItem}>
                <Image source={item.photo} style={styles.image} />
                <View style={styles.itemDetails}>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  cartItemsContainer: {
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  checkoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
  },
  checkoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
