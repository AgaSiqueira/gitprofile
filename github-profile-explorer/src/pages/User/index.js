import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View, Text, StyleSheet, Button, TextInput, Image,Linking, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';
import api from '../services/api'

export default function User(){
  const [name, setName] = useState(null);
  const [info, setInfo] = useState([]);
  const isFocused = useIsFocused();
  const date = new Date(info.created_at);
  const formattedDate = date.toLocaleDateString('pt-BR');

  useEffect(() => {
    if (isFocused) {
      getUserName();
    }
  }, [isFocused]);

  const getUserName = async () => {
    try {
      const value = await AsyncStorage.getItem('@github_user');
      if(value !== null) {
        setName(value);
        consultaRepositorios(value);
      } else {
        setInfo([]); // Limpa a lista de repositórios se o nome do usuário não existir mais
      }
    } catch(e) {
      // erro
    }
  }

  const consultaRepositorios = async (name) => {
    const response = await api.get('/' + name);
    setInfo(response.data);
  }

  return(
  <View style={styles.container}>
    {info.length === 0 ? null :
      <>
        <View style={styles.imgContainer} >
          <Image
            source={{ uri: info.avatar_url }}
            style={styles.img}
          />
        </View>
        <Text style={styles.name} >{info.name}</Text>
        <Text style={styles.info} >{info.login}</Text>
        <Text style={styles.info} >Criado em: {formattedDate}</Text>
        <Text style={styles.description}>{info.bio}</Text>
        
        <View>
          <Text style={styles.titleLink}>Links</Text>
          <View style={styles.areaLink}>
            <Text style={{color: 'rgb(36,129,247)'}}
                      onPress={() => Linking.openURL(info.html_url)}>
                      {info.url}
            </Text>
    
          </View>
        </View>
      </>
    }
  </View>    
)

}
