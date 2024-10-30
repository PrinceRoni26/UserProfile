import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfile = ({ toggleTheme, isDarkMode }) => {
  const [email, setEmail] = React.useState('magsalos.princeroniver@gmail.com');
  const [phone, setPhone] = React.useState('09123123123');

  return (
    <SafeAreaView style={styles.container}>
      {/* Avatar Image */}
      <Avatar.Image 
        size={100} 
        source={require('./assets/Avatar.jpg')} // Adjusted path
      />
      
      {/* Display Name without edit option */}
      <Text style={styles.name}>Prince Roniver A. Magsalos</Text>

      <Card style={styles.card}>
        <Card.Content>
          {/* Email input */}
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          
          {/* Phone input */}
          <TextInput
            label="Phone"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={styles.input}
          />
        </Card.Content>
      </Card>

      <Button mode="contained" style={styles.button} onPress={() => console.log('Saved!')}>
        Save Profile
      </Button>

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
  card: {
    width: '100%',
    marginVertical: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});

export default UserProfile;
