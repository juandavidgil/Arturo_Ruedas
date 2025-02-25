//import React  from 'react';
import { ImageBackground ,View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Button } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStaticNavigation, useNavigation, navigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState } from 'react';



//-----------------------------FUNCIONES Y PANTALLAS---------------------------------------------------------------//



//-----------------------------PANTALLA PRESENTACION-----------------------------------------------//

const image = {uri: 'https://cdn.leonardo.ai/users/ec93ea68-428d-4597-b04a-4c97d668081f/generations/a39d4587-7a1c-4782-81d8-f71744017f3a/Leonardo_Phoenix_Four_distinct_bicycle_wheels_a_sleek_narrow_3.jpg?w=512'}
function PresentacionPantalla(){
  const navigation = useNavigation();
  return(
  <SafeAreaProvider>
    <SafeAreaView style={styles.containerPresentacion} edges={['left', 'right']}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        
      <Text style={styles.tituloPresentacion}>ARTURO RUEDAS</Text>
      
      <View style={styles.containerBotonesPresenatacion}>
      <TouchableOpacity style={styles.Boton} onPress={()=> navigation.navigate('InicioSesion')}>
        <Text>
          Iniciar Sesion
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Boton} onPress={()=> navigation.navigate('Registro')}>
        <Text>
          Registrarse
        </Text>
      </TouchableOpacity>

      </View>
      </ImageBackground>
    </SafeAreaView>
  </SafeAreaProvider>
    
  )
}

//------------------------PANTALLA REGISTRO--------------------------------------------------------//
function RegistroPantalla(){
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] =useState('');
  const [contraseña, setContraseña] = useState('');
  // para que al presionar el boton de registrar se envien los datos en la consola
  const presionarBotonRegistro = () => {
  console.log('Nombre:', nombre);
  console.log('Telefono:', telefono);
  console.log('Correo:', correo);
  console.log('Contraseña:', contraseña);
  };
  return(
    <View style={styles.container}>
    <Text style={styles.titulo} >REGISTRARSE</Text>
    
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
    
    {/* usamos TouchableOpacity como boton para poder darle estilo */}
    <TouchableOpacity style={styles.BotonSesionRegistro} title="Registrarse" onPress={presionarBotonRegistro}>
      <Text>Registrarse</Text>
    </TouchableOpacity> 

    
    
  </View>
  )
} 


//-----------------------------------PANTALLA INCIO SESION--------------------------------------------//
function InicioSesionPantalla(){
  const navigation = useNavigation();
  const [correo, setCorreo] =useState('');
  const [contraseña, setContraseña] = useState('');
  // para que al presionar el boton de registrar se envien los datos en la consola
  const presionarBotonSesion = () => {
  console.log('Correo:', correo);
  console.log('Contraseña:', contraseña);
  }
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>INICIAR SESION</Text>
      <TextInput
      style={styles.input}
      placeholder='Correo Electronico'
      keyboardType='email-address'
      value={correo}
      onChangeText={setCorreo}
      />
      <TextInput
      style={styles.input}
      placeholder='Contraseña'
      secureTextEntry={true}
      value={contraseña}
      onChangeText={setContraseña}
      />
      <TouchableOpacity style={styles.BotonSesionRegistro} onPress={(presionarBotonSesion)}>
        <Text>
          Iniciar Sesion
        </Text>
      </TouchableOpacity>
    </View>
  )
}




//-----------------------------------FUNCION PARA MOSTRAR PANTALLAS-------------------------------------//
const Stack = createNativeStackNavigator();
function RootStack(){
  return(
    <Stack.Navigator initialRouteName="Presentacion">
    
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




//--------------------ESTO VEMOS EN PANTALLA---------------------------------------------------------------//
export default function App() {

return(
  <NavigationContainer>
    <RootStack/>
  </NavigationContainer>
)


}

//-------------------  ESTILOS-------------------------------------------------------------------------------//    
const styles = StyleSheet.create({

  //pantalla presentacion
  containerPresentacion: {
    flex: 1,
    flex:1,
    justifyContent: 'center',
   
    backgroundColor: '#D0D0D0'
  },
  image: {
    flex: 1,
    opacity: 1,
    justifyContent: 'center',
  },
  tituloPresentacion:{
    fontSize: 30,
    color: 'white',
    marginBottom: 80,
    marginTop:20,
    marginLeft: 80,
    fontWeight:900,
  },
  containerBotonesPresenatacion:{
    padding: 50,
    marginTop: 400,
    marginLeft:40,
    
  },

  //pantalla registro e inicio de sesion
  container: {
    flex:1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#D0D0D0'
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
titulo: {
  
  fontSize: 30,
  color: 'white',
  marginBottom: 80,
  marginTop:20,
  marginLeft: 60,
  fontWeight:900,
 
},
Boton: {
  alignItems: 'center',
  margin:10,
  width: 210,
  padding:10,
  borderRadius:30,
  backgroundColor: '#FFFFFF' ,
},
BotonSesionRegistro:{
  alignItems: 'center',
  margin:10,
  marginLeft:70,
  width: 210,
  padding:10,
  borderRadius:30,
  backgroundColor: '#FFFFFF' ,
}


}); 