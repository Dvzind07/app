import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Agora funcionando </Text>
      <TextInput style={styles.input} />
    </View>
  );
}