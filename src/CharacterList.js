import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    ActivityIndicator,
} from 'react-native';

import Style from './Style';
//import InfiniteScrollView from 'react-native-infinite-scroll-view';

export default class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            offset: 0,
            query: "",
            loaded: false,
            loaderAnimating: true,
            canLoadMoreContent: true,
            loaderSize: "large",
            loaderColor: "#B50F16",
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderCharacter}
                style={Style.listView}/>

            /*
            <InfiniteScroll
                horizontal={false}//true - if you want in horizontal 
                onLoadMoreAsync={this.fetchData()}
                distanceFromEnd={10} // when to load new content (distance in density-independent pixels) 
                >
                
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderCharacter}
                    style={Style.listView}/>
            </InfiniteScroll>
            */

            /*
            <ListView
                renderScrollComponent={props => <InfiniteScrollView />}
                dataSource={this.state.dataSource}
                renderRow={this.renderCharacter}
                canLoadMore={this.state.canLoadMoreContent}
                onLoadMoreAsync={this.fetchData}
            />
            */
        )

    }

    renderLoadingView() {
        return (
            <View style={[Style.listContainer, Style.center]}>
                <ActivityIndicator
                    animating={this.state.loaderAnimating}
                    style={[Style.center, Style.loader]}
                    size={this.state.loaderSize}
                    color={this.state.loaderColor}
                />
            </View>
        );
    }

    renderCharacter(character) {
        return (
            <View style={Style.listContainer}>
                <Image
                    source={{ uri: character.thumbnail.path + "." + character.thumbnail.extension }}
                    style={Style.thumbnail} />

                <View style={Style.rightContainer}>
                    <Text style={Style.name}>{character.name}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={6} style={Style.description}>{character.description}</Text>
                </View>
            </View>
        );
    }

    fetchData() {
        fetch(this.getUrl(this.state.offset, this.state.query))
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
                    loaded: true,
                });
            })
            .done();
    }

    getUrl(offset, query) {
        var tokenData = {
            key: 'c9cd45cc18a495a5f6f1a619cc16bc13',
            hash: '6505d2217a44995181d90e93f3aadb99',
            timestamp: '1464344031.142341',
        }

        var urlBaseData = {
            base: 'http://gateway.marvel.com/',
            apiV1: 'v1/',
            allCharacters: 'public/characters',
        }

        var paramsData = {
            apiKeyParam: '?apikey=' + tokenData.key,
            hashParam: 'hash=' + tokenData.hash,
            offsetParam: 'offset=' + offset,
            timestampParam: 'ts=' + tokenData.timestamp,
        };

        if (query != "" && query != null && query != undefined) {
            paramsData.queryParam = 'nameStartsWith=' + encodeURIComponent(query);
        }

        var urlBase = Object.keys(urlBaseData)
            .map(key => urlBaseData[key])
            .join('');

        var params = Object.keys(paramsData)
            .map(key => paramsData[key])
            .join('&');

        return urlBase + params;
    }
}