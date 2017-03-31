import React, { Component } from 'react';
import {
    View,
    ToolbarAndroid,
} from 'react-native';

import Style from './Style';
import Button from './Button';

export default class ToolBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Button
                    onPress={() => {
                        this.props.openDrawer();
                    }}
                    text="Close Drawer"/>

                <ToolbarAndroid
                    style={Style.toolbar}
                    logo={require('../resources/toolbar.png')}
                    title="Marvel"
                    onActionSelected={this.onActionSelected} />
            </View>
        )
    }
}