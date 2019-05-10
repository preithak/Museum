import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//use axios to fetch json over http
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { info: [] };

    
    //for json over http
    componentWillMount() {
        axios.get('https://api.myjson.com/bins/d1v9i')
        .then(response => this.setState({ info: response.data }));
    }

    renderItems() {
       return this.state.info.map(item => 
            <AlbumDetail key={item.title} item={item} />
        );
    }

    render() {
    return (
        <ScrollView>
            {this.renderItems()}
        </ScrollView>
    );
    }
}

export default AlbumList;
