import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';
export default function SignIn() {
  return (
    <View>
      <Text>Hello, World!</Text>
      <View style={styles.container} />
      <TextInput style={styles.input} />
    </View>
  );
}