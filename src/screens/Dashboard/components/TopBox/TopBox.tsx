import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../Header/Header';
import Search from '../Search/Search';

export default function TopBox() {

  return(

    <View style={styles.topBox}>
      <Header/>
      <Text style={styles.welcomeMessage}>
        Hello, 
      </Text>
      <Text style={styles.userName}>
      Bruce Wayne!
      </Text>
      <Search/>
    </View>
  )

}

const styles = StyleSheet.create({
  
  topBox: {
 
    backgroundColor: '#E6DDF0',
    flex: 1,
    padding: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 40,
    alignSelf: 'center',
    width: '90%',
  },

  welcomeMessage: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },

  userName: {  
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },

 })