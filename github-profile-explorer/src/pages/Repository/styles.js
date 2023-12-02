import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'rgb(13,17,23)',
    padding:20,
    paddingTop:30,
  },
  item:{
    backgroundColor:'rgb(36,41,47)',
    borderColor: 'rgb(125,133,144)',
    borderWidth: 1,
    padding: 10
  },
  itemTop:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  title:{
    color: 'white',
    fontWeight: 'bold',
  },
  date:{
    color: 'white'
  },
  description:{
    color: 'rgb(125,133,144)',
    marginTop:10,
    marginBottom:10,
  },
  
});


export {styles}
