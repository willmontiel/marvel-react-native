import { StyleSheet, PixelRatio } from 'react-native';
const deviceScreen = require('Dimensions').get('window')

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
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    toolbar: {
        width: 132,
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





    //Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeexample
    //Drawer Menu
    scrollView: {
        backgroundColor: '#B99BC4',
    },

    drawerMenu: {
        flex: 1,
        backgroundColor: '#b5b5b5',
    },

    controlPanelText: {
        color: 'white',
    },
    
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 25,
    },
    controlPanelWelcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 25,
        color: 'white',
        fontWeight: 'bold',
    },

    
    categoryLabel: {
        fontSize: 15,
        textAlign: 'left',
        left: 10,
        padding: 10,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 0,
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: '#d6d7da',
        padding: 10,
        alignItems: 'center'
    },
    lastRow: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 0,
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#d6d7da',
        padding: 10,
        alignItems: 'center'
    },
    rowLabel: {
        left: 10,
        fontSize: 15,
        flex: 1,
    },
    rowInput: {
        right: 10,
    },
    sliderMetric: {
        right: 10,
        width: 30,
    },
    slider: {
        width: 150,
        height: 30,
        margin: 10,
    },
    picker: {
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 0,
        padding: 0,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: '#d6d7da',
    },
    label: {
        fontSize: 20,
        textAlign: 'left',
        margin: 0,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderColor: '#eeeeee',
        borderWidth: 1,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#aaaaaa',
        marginRight: 20,
        marginLeft: 20,
        alignSelf: 'center',
    },





});

export default Style;