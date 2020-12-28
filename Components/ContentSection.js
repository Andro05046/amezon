import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Content, Icon, Input,Button} from 'native-base';

class ContentSection extends Component {

  render() {
    return (
       
        <View
          style={{
            height: 60,
            backgroundColor: 'white',
            flexDirection: 'row',
            paddingHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor:'black',
          }}>
          <Text >Hello, Karthi</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>Your Account </Text>
            <Icon name="arrow-forward" style={{fontSize: 18}} />
          </View>
        </View>
    );
  }
}

export default ContentSection;
