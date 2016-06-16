import React, { PropTypes } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

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
  },
  nameAndOffice: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  officeWrapper: {
    backgroundColor: '#F50057',
    marginLeft: 20,
    alignItems: 'center',
    borderRadius: 5
  },
  office: {
    color: 'white',
    margin: 5
  }
})

const UserCard = ({ user, navigator }) => (
  <TouchableOpacity
    style={[styles.card, styles.shadow]}
    onPress={() => navigator.push({ page: 'profile' })}
  >
    <Image
      style={styles.avatar}
      source={{ uri: user.avatar }}
    />
    <View style={styles.textWrapper}>
      <View style={styles.nameAndOffice}>
        <Text style={styles.name}>{user.name}</Text>
        <View style={styles.officeWrapper}>
          <Text style={styles.office}>{user.office}</Text>
        </View>
      </View>
      <Text style={styles.job}>{user.title} on {user.project}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  </TouchableOpacity>
)

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
}

export default UserCard