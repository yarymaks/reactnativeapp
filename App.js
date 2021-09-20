import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  const [value, setValue] = useState('');
  const inputHandler = text => setValue(text);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I love technology!</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          placeholder="Text please"
          value={value}
          onChangeText={inputHandler}
        />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 32,
  },
  desc: {
    marginBottom: 15,
    color: 'green',
    fontSize: 25,
  },
});
