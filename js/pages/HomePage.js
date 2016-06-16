import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet,
  ListView,
  StatusBar
} from 'react-native'

import { userListAction } from '../actions/userListAction'
import { userFilterAction } from '../actions/userFilterAction'
import UserCard from '../components/UserCard'
import FilterPanel from '../components/FilterPanel'

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
    const { userList, filter, filterUser, navigator } = this.props
    const filteredList = filter === '' ? userList : userList.filter(item => item.office === filter)
    const ds = this.dataSource.cloneWithRows(filteredList)
    return (
      <View style={styles.container}>
        <FilterPanel action={filterUser} />
        <ListView
          enableEmptySections
          dataSource={ds}
          renderRow={user => <UserCard user={user} navigator={navigator} />}
        />
      </View>
    )
  }
}

App.propTypes = {
  userList: PropTypes.array.isRequired,
  fetchUser: PropTypes.func.isRequired,
  filterUser: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired
}

function mapProps(state) {
  return {
    userList: state.userList,
    filter: state.filter
  }
}

function mapDispatch(dispatch) {
  return {
    fetchUser: () => dispatch(userListAction()),
    filterUser: filter => dispatch(userFilterAction(filter))
  }
}

export default connect(mapProps, mapDispatch)(App)