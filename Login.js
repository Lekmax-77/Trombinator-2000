import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const apiUrl = 'https://masurao.fr/api/employees/login'; // Endpoint de l'API

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    const requestBody = {
      email: 'oliver.lewis@masurao.jp',
      password: 'password',
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Group-Authorization': 'TbncsMiix52ZJ00c6ZAB7x5gAKmva6BB',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status === 200) {
          // Authentification réussie
          return response.json();
        } else if (response.status === 401) {
          setErrorMessage('Invalid Email and Password combination.');
        } else {
          // Autre erreur
          setErrorMessage('An error occurred.');
        }
      })
      .then((data) => {
        if (data && data.access_token) {
          // Vous pouvez stocker ou utiliser l'access_token ici
          // Par exemple, le passer à votre écran Home ou effectuer d'autres opérations
          setErrorMessage('go.');
          navigation.navigate('Menu', { email, token: data.access_token });
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('An error occurred.');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome back!</Text>
      </View>
      <View style={styles.formContainer}>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Mot de passe"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Sign In" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  text: {
    color: '#545F71',
    width: '80%',
    marginBottom: 10,
    fontSize: 14,
  },
  titleContainer: {
    flex: 2, // Ajustez la proportion en fonction de vos besoins
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: '#545F71',
    fontSize: 30,
  },
  formContainer: {
    flex: 5, // Ajustez la proportion en fonction de vos besoins
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
  buttonContainer: {
    flex: 2, // Ajustez la proportion en fonction de vos besoins
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#545F71',
    borderRadius: 7,
    padding: 15,
    width: 347,
    height: 48,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;