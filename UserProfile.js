import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfile = ({ toggleTheme, isDarkMode }) => {
  // Static profile details
  const name = 'Prince Roniver A. Magsalos';
  const email = 'magsalos.princeroniver@gmail.com';
  const phone = '09123123123';

  return (
    <SafeAreaView style={styles.container}>
      {/* Avatar Image */}
      <Avatar.Image 
        size={100} 
        source={require('./assets/Avatar.jpg')} // Adjusted path
      />
      
      {/* Display Name, Email, and Phone without edit options */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Email: {email}</Text>
      <Text style={styles.info}>Phone: {phone}</Text>

      <Button mode="outlined" style={styles.button} onPress={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
});

export default UserProfile;
