import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button, Text, Alert, TextInput } from 'react-native';



export default function App() {

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');
  return (
    
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType = 'numeric'
        onChangeText={text => setText(text)} 
        value={text}
      />
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType = 'numeric'
        onChangeText={text2 => setText2(text2)} 
        value={text2}
      />
      <Button onPress={CalculatePos} title="+"></Button>
      <Button onPress={CalculateNeg} title="-"></Button>
    </View>
  );
  function CalculatePos() {
    const result = setResult(parseInt(text, 10) + parseInt(text2, 10))
  }
  function CalculateNeg() {
    const result = setResult(parseInt(text, 10) - parseInt(text2, 10))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});