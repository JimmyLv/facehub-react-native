import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
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
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2
  },
  navBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

const NavBar = () => (
  <View style={[styles.navBar, styles.shadow]}>
    <Text style={styles.navBarTitle}>ThoughtWorks</Text>
  </View>
)

export default NavBar