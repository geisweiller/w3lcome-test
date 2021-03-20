import React from 'react';
import { View, StyleSheet } from 'react-native';


export default function Header() {

  return(
    <View style={styles.bottomBox}>

    </View>
  )
}


const styles = StyleSheet.create({

  bottomBox: {
    
    position: 'absolute',
    top: '45%',
    left: '5%', 
    backgroundColor: '#FFF',
    height: '70%',
    width: '90%',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 40,
    maxHeight: '80%',
   
  },

 })

