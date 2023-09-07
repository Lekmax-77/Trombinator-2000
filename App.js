import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import axios from 'axios';

const yourAuthToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsImVtYWlsIjoib2xpdmVyLmxld2lzQG1hc3VyYW8uanAiLCJuYW1lIjoiT2xpdmVyIiwic3VybmFtZSI6Ikxld2lzIiwiZXhwIjoxNjk1NzMwMzM3fQ.YgydR45wwbjSFDV5uJiG6Dydq15LrB7d7M9CscEtZeo';
const apiUrl = 'https://masurao.fr/api';
const headers = {
  //'Content-Type': 'application/json', // Set the content type as needed
  //'Authorization': `Bearer ${yourAuthToken}`, // Replace with your actual token
  'Key': 'X-Group-Authorization',
  'Value': 'TbncsMiix52ZJ00c6ZAB7x5gAKmva6BB'
}

const requestBody = {
  email: 'olivier.lewis@masurao.jp',
  password: 'password',
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {

    //requestBody.email = email;
    //requestBody.password = password;

      fetch(`${apiUrl}/employees/login`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
      })
      .then(response => {
          setErrorMessage(response.text + ' Jesus taimeu.' + ' ' + requestBody.password);
          // navigation.navigate('Home', { email });
        })
        .catch(error => {
          console.log(error);
          setErrorMessage('Email ou mot de passe incorrect.' + error);
          setTimeout(() => {
            setErrorMessage('');
          }, 10000);
        });
  };

  return (
    //  545F71
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        placeholder="Mot de passe"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <Button style={styles.button} title="Sign In" onPress={handleLogin} />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#545F71',
    width: '80%',
    // fontFamily: 'inter',
    marginBottom: 10,
    // fontSize: 13,
    // fontWeight: 'Regular',
  },
  container: {
    flex: 1,
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
  body: {
    backgroundColor: 'white',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
