import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Button} from 'react-native';
import  React, {useState}  from 'react';
//import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
//constante para imagen de fondo


export default function App() {
  return (
    <View style={styles.container}>
      <Text>buena buena mi ppa</Text>
      
      
      <StatusBar style="auto" />
    </View>
  );
}


/* const registroNombre = () => {
  const [text, setText] = useState('');
  return(

    <TextInput
    placeholder='Nombre'
    onChangeText={newText => setText(newText)}
    defaultValue={text}
    />
  
  )} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2BEBF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


