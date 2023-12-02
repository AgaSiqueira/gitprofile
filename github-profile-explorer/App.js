import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//paginas
import Home from './src/pages/Home';
import Favorite from './src/pages/Favorite';
import Search from './src/pages/Search';
import Repository from './src/pages/Repository';
import Usuario from './src/pages/User';
 
const Tab = createBottomTabNavigator();

const icons = {
  Login:{
    name: 'ios-home',
  },
  Pesquisa:{
    name: 'ios-search',
  },
  Favoritos:{
    name: 'ios-star',
  },
  Repositorio:{
    name: 'ios-book',
  },
  Usuario:{
    name: 'ios-people',
  }
}

 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      tabBarOptions={{
        activeBackgroundColor: 'rgb(33,38,45)',
        activeTintColor: 'white',
        inactiveBackgroundColor: 'rgb(13,17,23)',
        inactiveTintColor: 'rgb(125,133,144)',
        style: {  borderWidth: 0, borderColor:'rgb(33,38,45)'}
      }}
      >
        <Tab.Screen name='Login' component={Home} options={{ headerStyle: { backgroundColor: 'rgb(36,41,47)',  borderBottomWidth: 0 }, headerTintColor: 'white' }} />
        <Tab.Screen name='Pesquisa' component={Search} options={{ headerStyle: { backgroundColor: 'rgb(36,41,47)',  borderBottomWidth: 0 }, headerTintColor: 'white' }} />
        <Tab.Screen name='Favoritos' component={Favorite} options={{ headerStyle: { backgroundColor: 'rgb(36,41,47)',  borderBottomWidth: 0 }, headerTintColor: 'white' }} />
        <Tab.Screen name='Repositorio' component={Repository} options={{ headerStyle: { backgroundColor: 'rgb(36,41,47)',  borderBottomWidth: 0 }, headerTintColor: 'white' }} />
        <Tab.Screen name='Usuario' component={Usuario} options={{ headerStyle: { backgroundColor: 'rgb(36,41,47)',  borderBottomWidth: 0}, headerTintColor: 'white' }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
