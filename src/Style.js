import { StyleSheet, PixelRatio } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#2C2C2C',
    },

    //General
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2C2C2C',
    },

    //Toolbar
    toolBarContainer: {
        //flexDirection: 'column',
        //alignItems: 'center',
        //backgroundColor: '#000000',
    },
    toolbar: {
        backgroundColor: '#000000',
        height: 50,
    },

    //Loader
    loader: {
        height: 80,
    },

    //Character List
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2C2C2C',
    },
    thumbnail: {
        width: 106,
        height: 162,
    },
    rightContainer: {
        flex: 1,
    },
    name: {
        paddingTop: 13,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 3,
        fontSize: 20,
        color: '#FFFFFF'
    },
    description: {
        paddingTop: 3,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 13,
        fontSize: 13,
        color: '#b5b5b5'
    },
    listView: {
        padding: 10,
        backgroundColor: '#F5FCFF',
    },

    //Drawer Menu
    drawerMenuListView: {
        backgroundColor: '#000000',
    },

    scrollView: {
        backgroundColor: '#B99BC4',
    },

    drawerMenu: {
        flex: 1,
        padding: 10,
        backgroundColor: '#000000',
    },

    controlPanelText: {
        color: 'white',
    },
    
    itemDrawerMenu: {
        color: '#FFFFFF',
        fontSize: 16,
        padding: 5,
    },

    controlPanelWelcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 25,
        color: 'white',
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#B50F16',
        padding: 8,
        borderColor: '#B50F16',
        borderWidth: 1,
        alignSelf: 'center',
        width: 100,
    },

    buttonText: {
        color: '#FFFFFF',
    }
});

export default Style;