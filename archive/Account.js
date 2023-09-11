import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Page de compte</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Retour</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;
