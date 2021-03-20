import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomBox from './components/BottomBox/BottomBox';
import TopBox from './components/TopBox/TopBox';
import { LinearGradient } from 'expo-linear-gradient';
export default function Dashboard() {

  return(
    <LinearGradient

    colors={['#F9F5F2', '#E3D9D0']}
    style={styles.background}
  >

      <View style={styles.dashboard}>
      
        <TopBox/>
        <BottomBox/>
      </View>
    </LinearGradient>
  )

}

const styles = StyleSheet.create({
  
  dashboard: {

    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }

 })