import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function Search() {

  return(
    <SearchBar
      platform='default'
      searchIcon={{size: 30}}
      inputContainerStyle={styles.searchInput}
      containerStyle={styles.inputContainer}
      placeholder='Search'
    /> 
  )
 
}

const styles = StyleSheet.create({

  inputContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },

  searchInput: {

    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    textAlignVertical: 'top',
    
  },

})
