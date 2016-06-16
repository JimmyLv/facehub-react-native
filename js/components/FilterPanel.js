import React, {
  Component,
  PropTypes,
} from 'react'

import {
  StyleSheet,
  TextInput,
  AlertIOS,
  Image,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    borderColor: 'rgba(124,172,187,1)',
    borderWidth: 2,
    borderRadius: 2
  }
})

class FilterPanel extends Component {
  constructor() {
    super()
    this.state = {
      filter: ''
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ filter: text })}
          onEndEditing={event => this.props.action(event.nativeEvent.text)}
        />
      </View>
    )
  }
}

FilterPanel.propTypes = {
  action: PropTypes.func.isRequired
}
FilterPanel.defaultProps = {
  action: text => {
    AlertIOS.alert(text)
  }
}

export default FilterPanel
