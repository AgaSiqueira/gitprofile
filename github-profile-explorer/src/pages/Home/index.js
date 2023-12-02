import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';
import api from '../services/api'

export default function Home(){
  //variaveis
  const [name, setName] = useState()
  const [user, setUser] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //funções
  const storeUserName = async (value) => {
    try {
      await AsyncStorage.setItem('@github_user', value)
    } catch (e) {
      // erro
    }
  }//salvando nome de usuario
  const getUserName = async () => {
    try {
      const value = await AsyncStorage.getItem('@github_user')
      if(value !== null) {
        setName(value);
        consultaUser(value);
        setIsLoggedIn(true);
      }
    } catch(e) {
      // erro
    }
  }
  //api
  const consultaUser = async (name) => {
    const response = await api.get('/' + name);
    setUser(response.data)
  }

  useEffect(() => {
    getUserName();
  }, []);

  return(
    
    <View style={styles.container}>
      {!isLoggedIn &&
        <>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(texto) => setName(texto)}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity style={[styles.button, styles.buttonPurple]} 
          onPress={() => {consultaUser(name); storeUserName(name); setIsLoggedIn(true);}}>
            <Text style={styles.bottontext}>Logar</Text>
          </TouchableOpacity>
        </>
      }

      <Image
        source={{ uri: user.avatar_url }}
        style={styles.img}
      />
      <Text style={styles.userName} >{user.name}</Text>
     
      {isLoggedIn &&
        <>

          <TouchableOpacity
            style={[styles.button, styles.buttonGreen]}  
            title="Logout" onPress={async () => {
            await AsyncStorage.removeItem('@github_user');
            await AsyncStorage.removeItem('@favorite_users');
            setName(undefined);
            setUser({});
            setIsLoggedIn(false);
          }} >
            <Text style={styles.bottontext}>Logout</Text>
          </TouchableOpacity>
        </>
      }
      
    </View>    
  )
}
