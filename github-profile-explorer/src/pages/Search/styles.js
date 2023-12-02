import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'rgb(13,17,23)',
    alignItems: 'center',
  },
  input:{
    marginTop:20,
    marginBottom:15,
    width: '90%',
    height: 35,
    backgroundColor:'rgb(36,41,47)',
    borderColor: 'rgb(125,133,144)',
    borderWidth: 1,
    padding: 10,
    outlineWidth: 0,
    color: 'white',
    borderRadius: 5
  },
  areaButtom:{
    flexDirection: 'row',
  },
  button:{
    backgroundColor:'rgb(35,134,54)',
    padding: 10,
    outlineWidth: 0,
    borderRadius: 7,
    width: 120,
    height: 50,
  },
  btnSearch:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(35,134,54)',
    marginRight: 10
  },
  btnFav:{
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'rgb(36,41,47)',
     marginLeft: 10
  },
  bottontext:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  areaInfo1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:20,
    marginTop:20
  },
  areaInfo2:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 100, 
    height: 100,
    borderRadius: 100
  },
  text:{
    color:'white',
    fontSize: 10,
  },
});


export {styles}
