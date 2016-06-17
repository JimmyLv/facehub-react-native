import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backButton: {
    margin: 5,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'lightskyblue'
  }
})

const ProfilePage = () => {
  const { navigator } = this.props
  return (
    <View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigator.pop()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

ProfilePage.propTypes = {
  navigator: React.PropTypes.object
}

export default ProfilePage