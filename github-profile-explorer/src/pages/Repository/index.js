import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View, Text,Linking, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';
import api from '../services/api'

export default function Repository() {
  const [name, setName] = useState(null);
  const [repos, setRepositorios] = useState([]);
  const isFocused = useIsFocused();

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
        setRepositorios([]); // Limpa a lista de repositórios se o nome do usuário não existir mais
      }
    } catch(e) {
      // erro
    }
  }

  const consultaRepositorios = async (name) => {
    const response = await api.get('/' + name + '/repos');
    setRepositorios(response.data);
  }

  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>
        {repos.map((repo) => {
          const date = new Date(repo.created_at);
          const formattedDate = date.toLocaleDateString('pt-BR');

          return (
            <View style={styles.item} key={repo.id}>
              <View style={styles.itemTop}>
                <Text style={styles.title} >{repo.name}</Text>
                <Text style={styles.date} >{formattedDate}</Text>
              </View>
              <Text style={styles.description} >Descrição: {repo.description}</Text>
              <Text style={{color: 'rgb(36,129,247)'}}
                onPress={() => Linking.openURL(repo.html_url)}>
                {repo.html_url}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
