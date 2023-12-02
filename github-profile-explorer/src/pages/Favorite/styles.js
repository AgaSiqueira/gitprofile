import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'rgb(13,17,23)',
    padding:20,
    paddingTop:30,
  },
  itemList:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderColor: 'rgb(125,133,144)',
    borderWidth: 1,
    padding: 5
  },
  userName:{
    color:'white',
  },
  btnDelete:{
    color:'rgb(36,129,247)'
  }
  
});


export {styles}
