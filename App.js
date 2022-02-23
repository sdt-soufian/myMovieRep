// App.js

import React from 'react'
import { StyleSheet, View } from 'react-native'
import Search from './Components/Search'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Search />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#f9f9fa'
    // borderWidth: 1,
    // borderColor: 'red',
  }
})