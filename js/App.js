/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ListView
} from 'react-native'

import NavBar from './components/NavBar'
import UserCard from './components/UserCard'

export default class App extends Component {
  constructor() {
    super();
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
    StatusBar.setBarStyle('light-content');
  }

  render() {
    const ds = this.dataSource.cloneWithRows([0, 1, 2, 3, 4, 5, 6]);
    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          dataSource={ds}
          renderRow={()=><UserCard/>}>
        </ListView>
        <ScrollView>
          {[0, 1, 2, 3, 4, 5, 6].map((key) => <UserCard key={key}/>)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'
  }
});