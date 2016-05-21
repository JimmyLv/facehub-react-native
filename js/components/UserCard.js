import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native'

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold'
  },
  job: {
    fontSize: 14,
    color: '#666666'
  },
  email: {
    fontSize: 12,
    color: '#999999'
  },
  card: {
    backgroundColor: 'white',
    height: 103,
    marginHorizontal: 7,
    marginVertical: 3,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  avatar: {
    width: 73,
    height: 73
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
})

const UserCard = () => (
  <View style={[styles.card, styles.shadow]}>
    <Image
      style={styles.avatar}
      source={{ uri: 'http://nobackend.website/_ng/images/avatar.jpg' }}
    />
    <View style={styles.textWrapper}>
      <Text style={styles.name}>Jimmy</Text>
      <Text style={styles.job}>Dev on Suncorp</Text>
      <Text style={styles.email}>jinglv@thoughtworks.com</Text>
    </View>
  </View>
)

export default UserCard