import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from './style';

export default function SignIn() {
  const [saldo, setSaldo] = useState(500);
  const [valorGasto, setValorGasto] = useState('');
const [mostrarInput, setMostrarInput] = useState(false);
const [gastos, setGastos] = useState(300);
const [valorSaldo, setValorSaldo] = useState('');
const [valorRetirada, setValorRetirada] = useState('');
  return (
   <View style={styles.container}>
  <Text style={styles.title}>PocketTrack</Text>

  <View style={styles.balanceCard}>
    <Text style={styles.balanceLabel}>Saldo disponível</Text>
    <Text style={styles.balance}>R$ {saldo},00</Text>
  </View>

  <View style={styles.row}>

  <View style={styles.infoCard}>
    <Text>Entradas</Text>
    <Text>R$ 800,00</Text>
  </View>

  <View style={styles.infoCard}>
    <Text>Gastos</Text>
    <Text>R$ {gastos},00</Text>
  </View>

</View>
{mostrarInput && (
  <View>
    <Text>Digite o valor do gasto:</Text>

    <TextInput
      value={valorGasto}
      onChangeText={setValorGasto}
      placeholder="Ex: 50"
      keyboardType="numeric"
    />

    <Pressable onPress={() => {
      const valor = Number(valorGasto);

      setSaldo(saldo - valor);
      setGastos(gastos + valor);

      setValorGasto('');
      setMostrarInput(false);
    }}>
      <Text>Confirmar gasto</Text>
    </Pressable>
  </View>
)}

<TextInput
  value={valorSaldo}
  onChangeText={setValorSaldo}
  placeholder="Adicionar saldo"
  keyboardType="numeric"
/>

<Pressable onPress={() => {
  const valor = Number(valorSaldo);

  setSaldo(saldo + valor);
  setValorSaldo('');
}}>
  <Text>+ Adicionar saldo</Text>
</Pressable>
<TextInput
  value={valorRetirada}
  onChangeText={setValorRetirada}
  placeholder="Tirar saldo"
  keyboardType="numeric"
/>

<Pressable onPress={() => {
  const valor = Number(valorRetirada);

  setSaldo(saldo - valor);
  setValorRetirada('');
}}>
  <Text>- Tirar saldo</Text>
</Pressable>
  </View>
)}
