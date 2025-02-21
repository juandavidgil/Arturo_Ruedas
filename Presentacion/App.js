import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';

const  DirigirRegistro= ({navigation})=>{
    return (
      <TouchableOpacity 
      onPress={()=>
        navigation.navigate('registro')
      }
      />
    )
  

  }

  export default function App(){
    return (
        <Button  style={styles.DirigirRegistro} title="dirigirRegistro" onPress={DirigirRegistro}/>
    )
  }
