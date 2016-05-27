import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'
  },
  navBar: {
    height: 64,
    backgroundColor: '#f50057',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  navBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

const NavBar = () => (
  <View style={styles.navBar}>
    <Text style={styles.navBarTitle}>ThoughtWorks</Text>
  </View>
)

export default NavBar