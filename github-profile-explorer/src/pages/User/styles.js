import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'rgb(13,17,23)',
    justifyContent: 'center',
    padding: 30
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 120, 
    height: 120,
    borderRadius: 100,
    marginBottom: 10
  },
  name:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  info:{
    color: 'rgb(125,133,144)',
    fontSize: 15
  },
  description:{
    color: 'white',
    marginTop:10,
    marginBottom:10,
  },
  titleLink:{
    color: 'white',
    fontWeight: 'bold',
  },
  areaLink:{
    borderColor: 'rgb(125,133,144)',
    borderWidth: 1,
    padding:5
  }
  
});


export {styles}
