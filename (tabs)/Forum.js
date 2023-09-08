import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForumScreen = ({ token }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Fonction pour insérer un nouveau message dans la liste
  const insertMessage = () => {
    if (message.trim() === '') return;

    const newMessage = { id: messages.length + 1, text: message };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="always"
    >
      <View style={styles.messagesContainer}>
        {messages.map((item, index) => (
          <View key={item.id} style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Écrivez un message"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Button title="Envoyer" onPress={insertMessage} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  messagesContainer: {
    flex: 1,
    padding: 8,
  },
  messageContainer: {
    padding: 8,
    backgroundColor: '#F0F0F0',
    margin: 4,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 8,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
});

export default ForumScreen;
