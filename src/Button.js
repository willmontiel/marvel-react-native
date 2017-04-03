import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import styles from './Style';
export default class Button extends Component {
  render() {
    return(
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          this.props.onPress();
        }}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )    
  }
}
