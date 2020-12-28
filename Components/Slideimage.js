// src/components/Product.js
import { View,Thumbnail , Right} from 'native-base';
import React from 'react';
import { Text, StyleSheet,Image } from 'react-native';
import { Card, Button, } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class Slideimage extends React.Component {
    render() {
      return (
        <View>  
   <ScrollView horizontal={true}>
        <Card
            >
              <Right>
              <Thumbnail style={{width:150,hight:150,marginLeft:50,}} size={200} source={{uri: 'https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg'}} />
              </Right>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                Kid shoes
            </Text>
            <Text style={styles.price} h4>
                $ 200
            </Text>
            <Text h6 style={styles.description}>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details')} />
        </Card>
        <Card
            >
              <Right>
              <Thumbnail style={{width:150,hight:150,marginLeft:50,}} size={200} source={{uri: 'https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg'}} />
              </Right>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                Kid shoes
            </Text>
            <Text style={styles.price} h4>
                $ 200
            </Text>
            <Text h6 style={styles.description}>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details')} />
        </Card>
        <Card
            >
              <Right>
              <Thumbnail style={{width:150,hight:150,marginLeft:50,}} size={200} source={{uri: 'https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg'}} />
              </Right>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                Kid shoes
            </Text>
            <Text style={styles.price} h4>
                $ 200
            </Text>
            <Text h6 style={styles.description}>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details')} />
        </Card>
        <Card
            >
              <Right>
              <Thumbnail style={{width:150,hight:150,marginLeft:50,}} size={200} source={{uri: 'https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg'}} />
              </Right>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                Kid shoes
            </Text>
            <Text style={styles.price} h4>
                $ 200
            </Text>
            <Text h6 style={styles.description}>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details')} />
        </Card>
        </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
});

export default Slideimage;
