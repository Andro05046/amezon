import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, View,Button, Badge} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
export default class ListAvatarExample extends Component {
    render() {
        return (
            <View>
                <List>
                    <ScrollView horizontal={true} bouncesZoom={true}contentContainerStyle={{backgroundColor:'#ffa500'}}  >
                        <ListItem style={{flexDirection:'column'}}>
                            <Thumbnail avatar source={{ uri: 'https://images.electronicexpress.com/misc.c/cat-smarthome.png' }} />
                           <Text style={{fontSize:15,color:'white'}}>Alexa</Text>
                        </ListItem>
                        <ListItem style={{flexDirection:'column'}}>
                            <Thumbnail source={{ uri: 'https://static.wixstatic.com/media/2cd43b_f8b4deec1c20404796739e9519240cb9~mv2.png/v1/fill/w_320,h_240,fp_0.50_0.50/2cd43b_f8b4deec1c20404796739e9519240cb9~mv2.png' }} />
                            <Text style={{fontSize:15,color:'white'}}>Canon</Text>
                        </ListItem>

                        <ListItem style={{flexDirection:'column'}}>
                            <Thumbnail source={{ uri: 'https://freepngimg.com/thumb/refrigerator/4-2-refrigerator-picture.png' }} />
                            <Text style={{fontSize:15,color:'white'}}>Fridges</Text>
                        </ListItem>

                        <ListItem style={{flexDirection:'column'}}>
                            <Thumbnail source={{ uri: 'https://purepng.com/public/uploads/large/purepng.com-fanfanrotating-bladescurrent-of-airbloweraerate-1701527844997l3ot0.png' }} />
                            <Text style={{fontSize:15,color:'white'}}>Table Fan</Text> 
                        </ListItem>


                        <ListItem style={{flexDirection:'column'}}>
                            <Thumbnail source={{ uri: 'https://www.pngfind.com/pngs/m/29-293735_led-television-png-hd-led-tv-images-png.png' }} />
                            <Text style={{fontSize:15,color:'white'}}>Led Tv</Text>
                        </ListItem>

                        <ListItem style={{flexDirection:'column'}}>
                            <Thumbnail source={{ uri: 'https://toppng.com/uploads/preview/elekta-mixer-grinder-mixer-grinder-png-transparent-11563345291dagnm2rpgb.png' }} ></Thumbnail>
                            <Text style={{fontSize:15,color:'white'}}>Mixis</Text>
                        </ListItem>
                    </ScrollView>
                </List>
            </View>

        );
    }
}