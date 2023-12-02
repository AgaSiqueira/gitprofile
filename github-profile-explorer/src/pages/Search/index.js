import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from '@react-navigation/native';
import {styles} from './styles';
import api from '../services/api'


export default function Search({ onNewFavoriteAdded }) {
  //variaveis
  const [name, setName] = useState()
  const [user, setUser] = useState([])
  const isFocused = useIsFocused();

  const resetPage = () => {
    setName(undefined);
    setUser({});
  };
  useEffect(() => {
    if (!isFocused) {
      resetPage();
    }
  }, [isFocused]);
  

  const getFavoriteUsers = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorite_users')
      return value !== null ? JSON.parse(value) : [];
    } catch(e) {
      // erro
      return [];
    }
  }
  const addFavoriteUser = async (username) => {
    const currentFavorites = await getFavoriteUsers();
    currentFavorites.push(username);
    try {
      await AsyncStorage.setItem('@favorite_users', JSON.stringify(currentFavorites));
      onNewFavoriteAdded();
    } catch (e) {
      // saving error
      }
    }
  
  //api
  const consultaUser = async (name) => {
    const response = await api.get('/' + name);
    setUser(response.data)
  }
 return (
   <View style={styles.container}>
     <TextInput
            style={styles.input}
            value={name}
            onChangeText={(texto) => setName(texto)}
            underlineColorAndroid="transparent"
          />
      <View style={styles.areaButtom}>
          <TouchableOpacity style={[styles.button, styles.btnSearch]} 
            onPress={() => {consultaUser(name)}}>
            <Text style={styles.bottontext}> Procurar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.areaButtom, styles.btnFav]}  
          onPress={() => addFavoriteUser(name)}>
            <FontAwesome name='star' size={25} color='gray' />
            <Text style={styles.bottontext} >Favoritar</Text>
          </TouchableOpacity>
    </View>

    <View style={styles.areaInfo1}>
      <Image
        source={{ uri: user.avatar_url }}
        style={styles.img}
      />
      <View style={styles.areaInfo2}>
        <Text style={styles.bottontext} >{user.login}</Text>
        <Text style={styles.text} >{user.url}</Text>
      </View>
        
    </View>
   </View>
  );
}

