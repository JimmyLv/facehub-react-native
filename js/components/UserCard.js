import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';


export default class UserCard extends Component {
  render() {
    return (
      <View style={[styles.card, styles.shadow]}>
        <Image
          style={styles.avatar}
          source={{uri: 'http://nobackend.website/_ng/images/avatar.jpg'}}>
        </Image>
        <View style={styles.textWrapper}>
          <Text style={styles.name}>Jimmy</Text>
          <Text style={styles.job}>Dev</Text>
          <Text style={styles.email}>jinglv@thoughtworks.com</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 103,
    flexDirection: 'row',
    marginHorizontal: 7,
    marginVertical: 3,
    borderRadius: 3
  },
  shadow: {
    justifyContent: 'center',
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  avatar: {
    width: 100,
    height: 100
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10
  },
  name: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold'
  },
  job: {
    fontSize: 15,
    color: '#333333'
  },
  email: {
    fontSize: 15,
    color: '#333333'
  }
});