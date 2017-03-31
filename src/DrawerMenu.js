import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';

import Style from './Style';
import Button from './Button';

export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {id: 1, name: 'Inicio'},
        {id: 2, name: 'Recompensas'},
        {id: 3, name: 'Cerrar sesión'},
      ])
    };
  }

  render() {
    return (
      <View style={Style.drawerMenu}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderNavigationList}
          style={Style.listView} />

        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          text="Close Drawer"
        />
      </View>
    )
  }

  renderNavigationList(item) {
    return (
      <Text style={Style.itemDrawerMenu}>{item.name}</Text>
    );
  }
}
