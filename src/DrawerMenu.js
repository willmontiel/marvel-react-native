import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './Style';
import Button from './Button';

export default class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.drawerMenu}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>
        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          text="Close Drawer"
        />
      </View>
    )
  }
}
