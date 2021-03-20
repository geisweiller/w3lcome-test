import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';


export default function Header() {

  return(
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.button} 
      >
        <View style={styles.topLine}/>
        <View style={styles.bottomLine}/>
      </TouchableOpacity>
      <Image 
        source={require('../../../../../assets/png/avatar.png')}
        style={styles.avatar}  
      />
    </View>
  )
}

const styles = StyleSheet.create({

  headerContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    maxHeight: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },

  button: {
    width: 40,
    height: 40,
    backgroundColor: '#F1EBF7',
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  topLine: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: 10,
    height: 5
  },

  bottomLine: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: 20,
    height: 5
  }

 })

