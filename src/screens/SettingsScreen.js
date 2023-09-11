import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Vous pouvez implémenter ici la logique de déconnexion, par exemple, effacer le token, etc.
    // Pour cet exemple, j'affiche simplement une alerte.
    Alert.alert('Déconnexion', 'Êtes-vous sûr de vouloir vous déconnecter ?', [
      {
        text: 'Annuler',
        style: 'cancel',
      },
      {
        text: 'Déconnexion',
        onPress: () => {
          // Mettez ici le code pour effectuer la déconnexion
          // Par exemple, supprimer le token de l'utilisateur, etc.
          navigation.navigate('Login'); // Rediriger vers l'écran de connexion
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SettingsScreen;
