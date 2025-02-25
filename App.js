//import * as React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Button } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStaticNavigation, useNavigation, navigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState } from 'react';



//-----------------------------FUNCIONES Y PANTALLAS---------------------------------------------------------------//



//-----------------------------PANTALLA PRESENTACION-----------------------------------------------//
function PresentacionPantalla(){
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('InicioSesion')}>
        <Text>
          Iniciar Sesion
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Registro')}>
        <Text>
          Registrarse
        </Text>
      </TouchableOpacity>
    </View>
  )
}

//------------------------PANTALLA REGISTRO--------------------------------------------------------//
function RegistroPantalla(){
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] =useState('');
  const [contraseña, setContraseña] = useState('');
  const presionarBoton = () => {
  // para que al presionar el boton de registrar se envien los datos en la consola
  console.log('Nombre:', nombre);
  console.log('Telefono:', telefono);
  console.log('Correo:', correo);
  console.log('Contraseña:', contraseña);
  };
  return(
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
    {/* toca cambiar boton a touchableOpacity para poder agragar estilos */}
    <Button  style={styles.BotonRegistrarse} title="Registrarse" onPress={presionarBoton} />

    <Button onPress={()=> navigation.navigate('InicioSesion')}> Iniciar Sesion</Button> 
    
  </View>
  )
} 


//-----------------------------------PANTALLA INCIO SESION--------------------------------------------//
function InicioSesionPantalla(){
  return(
    <View>
      <TextInput
      style={styles.input}
      />
    </View>
  )
}


const Stack = createNativeStackNavigator();

function RootStack(){
  return(
    <Stack.Navigator initialRouteName="Registro">
    <Stack.Screen name="Presentacion"
    component={PresentacionPantalla}
    options={{title: "Presentacion"}}/>
    
   <Stack.Screen name="Registro"
     component={RegistroPantalla}
     options={{title: "Registro"}}/>  
    
    <Stack.Screen name="InicioSesion"
     component={InicioSesionPantalla}
     options={{title: 'inicio sesion'}}/> 
    </Stack.Navigator>
  );
}




//--------------------ESTO VEMOS EN PANTALLA-----------------------------------------------------------------------------//
export default function App() {

return(
  <NavigationContainer>
    <RootStack/>
  </NavigationContainer>
)


}

//-------------------  ESTILOS--------------------------------------------------------------------------------------------//    
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