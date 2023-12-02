import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'rgb(13,17,23)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    marginTop: 200,
    width: '80%',
    height: 40,
    backgroundColor:'rgb(36,41,47)',
    borderColor: 'rgb(125,133,144)',
    borderWidth: 1,
    padding: 10,
    outlineWidth: 0,
    color: 'white',
    borderRadius: 5
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 40,
    padding: 10,
    outlineWidth: 0,
    borderRadius: 7
  },
  buttonPurple:{
    backgroundColor:'rgb(119,63,199)',
    marginTop: 40
  },
  buttonGreen:{
    backgroundColor:'rgb(35,134,54)',
    marginTop: -10
  },
  bottontext:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  img:{
    width: 150, 
    height: 150,
    borderRadius: 100
  },
  userName:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 50,
  }
});


export {styles}
