/* 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Button} from 'react-native';
import  React, {useState}  from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

 */

import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';


export default function App() {

  

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] =
   useState('');
  const [contraseña, setContraseña] = useState('');
  

  const presionarBoton = () => {
    // para que al presionar el boton de registrar se envien los datos en la consola
    console.log('Nombre:', nombre);
    console.log('Telefono:', telefono);
    console.log('Correo:', correo);
    console.log('Contraseña:', contraseña);
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.tituloRegistrarse} >REGISTRARSE</Text>
      
      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefono"
        value={telefono}
        onChangeText={setTelefono}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={contraseña}
        onChangeText={setContraseña}
      />
      <Button  style={styles.BotonRegistrarse} title="Registrarse" onPress={presionarBoton} />
    </View>
  );
}



//ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#B5B8B1'
  },
  input: {
    height: 80,
    borderColor: '#ccc',
    backgroundColor : 'white',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 15,
    paddingBottom: 50,
    borderRadius: 20,
},
tituloRegistrarse: {
  fontSize: 30,
  color: 'white',
  marginBottom: 100,
  marginLeft: 70,
 
},


});