import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ListView
} from 'react-native'

import NavBar from './components/NavBar'
import UserCard from './components/UserCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'
  }
})

export default class App extends Component {
  constructor() {
    super()
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  render() {
    const ds = this.dataSource.cloneWithRows([0, 1, 2, 3, 4, 5, 6])
    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          dataSource={ds}
          renderRow={() => <UserCard />}
        />
      </View>
    )
  }
}