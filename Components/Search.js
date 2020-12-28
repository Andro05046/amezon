import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Item, Icon, Input} from 'native-base';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
 <View
  style={{
    flex: 1,
    height: '100%',
    marginLeft: 5,
    justifyContent: 'center',
  }}>
  <Item
    style={{
      backgroundColor: 'white',
      paddingHorizontal: 10,
      borderRadius: 4,
    }}>
    <Icon name="search" style={{fontSize: 20, paddingTop: 5}} />
    <Input placeholder="Search" />
  </Item>
</View>
    );
  }
}

export default Search;
