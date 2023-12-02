import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';


export default function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const isFocused = useIsFocused();

  const getFavoriteUsers = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorite_users')
      return value !== null ? JSON.parse(value) : [];
    } catch(e) {
      // error reading value
      return [];
    }
  }

  const refreshFavorites = async () => {
    const favoriteUsers = await getFavoriteUsers();
    setFavorites(favoriteUsers);
  };

  const removeFavoriteUser = async (username) => {
    const currentFavorites = await getFavoriteUsers();
    const newFavorites = currentFavorites.filter(user => user !== username);
    await AsyncStorage.setItem('@favorite_users', JSON.stringify(newFavorites));
    refreshFavorites();
  };

  useEffect(() => {
    if (isFocused) {
      refreshFavorites();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.itemList}>
            <Text style={styles.userName} >{item}</Text>
            <TouchableOpacity onPress={() => removeFavoriteUser(item)}>
              <Text style={styles.btnDelete} >
                <FontAwesome name='trash' size={15} color='gray' /> Remover
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
