import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';

import Style from './Style';
import ToolBar from './ToolBar';
import CharacterList from './CharacterList';
import Drawer from 'react-native-drawer'

//import MyMainView from './MyMainView';
import DrawerMenu from './DrawerMenu';
import tweens from './Tweens';


class Marvel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        }
    }

    render() {
        var controlPanel = <DrawerMenu closeDrawer={() => {
            this.closeControlPanel();
        }} />

        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={controlPanel}>

                <View style={Style.toolBarContainer}>
                    <ToolBar openDrawer={() => {
                        this.openControlPanel();
                    }}/>
                </View>
                <View style={Style.container}>
                    <CharacterList />
                </View>

            </Drawer>
        )
    }

    closeControlPanel = () => {
        this._drawer.close()
    };

    openControlPanel = () => {
        this._drawer.open()
    };
}

AppRegistry.registerComponent('Marvel', () => Marvel);