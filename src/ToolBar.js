import React, { Component } from 'react';
import {
    View,
    ToolbarAndroid,
} from 'react-native';

import Style from './Style';
import Button from './Button';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionText: 'Example app with toolbar component',
            toolbarSwitch: false,
            colorProps: {
                titleColor: '#3b5998',
                subtitleColor: '#6a7180',
            },
        };
    }

    render() {
        return (
            <View style={Style.toolBarContainer}>
                <ToolbarAndroid
                    style={Style.toolbar}
                    title="Marvel"
                    actions={toolbarActions}
                    logo={require('../resources/toolbar.png')}
                    onActionSelected={this.onActionSelected.bind(this)} />
            </View>
        )
    }

    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            this.props.openDrawer();
        }
    }
}

var toolbarActions = [
    { title: 'Settings', icon: require('../resources/menu.png'), show: 'always' },
];