// App.js

import React from 'react'
import { StyleSheet, View, SafeAreaView, LogBox } from 'react-native'
import Search from './Components/Search'
import Navigation from './Navigation/Navigation'
//import SafeAreaView from 'react-native-safe-area-view';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);



export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/*<Navigation />*/}
          {/*<Search />*/}
          <Navigation />
        </View>
      </SafeAreaView>
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