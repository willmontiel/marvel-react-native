import React, { Component } from 'react';
import {
    View,
    ToolbarAndroid,
} from 'react-native';

import Style from './Style';

export default class ToolBar extends Component {
    render() {
        return (
            <ToolbarAndroid
                style={Style.toolbar}
                logo={require('../resources/toolbar.png')}
                title="Marvel"
                onActionSelected={this.onActionSelected} />
        )
    }

    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            //showSettings();
        }
    }
}