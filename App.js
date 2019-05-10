import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'; 

export default class App extends Component { 
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Museum'} />
        <AlbumList />
      </View>
    );
  }
}

//class using styles
/*export default class App extends Component { 
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Header />
      </View>
      </View>
    );
  }
}*/

//for style
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  subcontainer: {
    flex: 0.1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    
  }
});*/
