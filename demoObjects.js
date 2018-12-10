import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <FlatList data = {[{ma: 'c', ten: "Ty"}, {ma: 'd'}, {ma: '1'}]}
          renderItem={
            ({item}) => 
           <View>
             <Text>{item.ma}</Text>
             <Text>{item.ten}</Text>
             </View>
          }
        />
      </View>
    );
  }
}