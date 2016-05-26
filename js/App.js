import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet,
  ListView,
  StatusBar
} from 'react-native'

import { userListAction } from './actions/userListAction'
import NavBar from './components/NavBar'
import UserCard from './components/UserCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'
  }
})

class App extends Component {
  constructor() {
    super()
    StatusBar.setBarStyle('light-content')
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentWillMount() {
    this.props.fetchUser()
  }

  render() {
    const ds = this.dataSource.cloneWithRows(this.props.userList)
    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          enableEmptySections
          dataSource={ds}
          renderRow={(user) => <UserCard user={user} />}
        />
      </View>
    )
  }
}

App.propTypes = {
  userList: PropTypes.array.isRequired,
  fetchUser: PropTypes.func.isRequired
}

function mapProps(state) {
  return {
    userList: state
  }
}

function mapDispatch(dispatch) {
  return {
    fetchUser: () => dispatch(userListAction())
  }
}

export default connect(mapProps, mapDispatch)(App)