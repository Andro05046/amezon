import React, { Component } from 'react';
import { Image,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem,Title, Thumbnail, Text, Left, Body, Right, View, Item, Button } from 'native-base';
import { Input, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default function Todaysdeals({navigation}) {
    return (
      <Container>
        <Header style={{backgroundColor:'#4e586c',alignItems:'center',justifyContent:'flex-start'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon style={{marginRight:50,}}  name='angle-left' type='font-awesome' size={30} color='#fff' />
        </TouchableOpacity>
        <Title><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>CheckOut</Text></Title>
          </Header>


        <Content>
          <ScrollView>
            <Card>

              <CardItem>
                <Left>
                  <Body>
                    <Text style={{ justifyContent: 'center', fontSize: 30, fontWeight: 'bold' }} ><Icon name="check-circle" type='FontAwesome' />CheckOut</Text>
                    <Thumbnail square source={{ uri: 'https://cdnmp.plentymarkets.com/12010/meta/images/icon_plugin_sm.png' }} />
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{ uri: 'https://support.tapstyle.net/hc/article_attachments/360042865393/paypal_complete_process.png' }} style={{ height: 250, width: null, flex: 1, }} />
              </CardItem>
              <CardItem header style={{ justifyContent: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'green' }}>PAYMENT COMPLETE</Text>
              </CardItem>

            </Card>
          <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
            <Text style={{marginRight:5,fontSize:20,fontWeight:'bold'}}>Your Ordered Code:</Text>
            <Text style={{fontSize:18}}>xxxxxxxxxx</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
            <Text numberOfLines={2} style={{marginRight:5,fontSize:15}}>Please Check The Delivery Status At The Order Tracker Page:</Text>
          </View>

           <View style={{justifyContent:'center',flexDirection:'row'}}>
             <Icon color='blue' name="map" type='FontAwesome' /><Text style={{fontSize:15,fontWeight:'bold'}}>Track</Text></View>

            <View>

              <Button large style={{ borderRadius: 5, width: 350, hight:50, justifyContent: 'center', marginLeft: 30, marginTop: 20 }} iconLeft dark >
                <Icon color='white' name='shopping-cart' />
                <Text onPress={() => navigation.navigate("Home")} style={{ fontSize: 20 }}>CONTINUE shop</Text>
              </Button>
            </View>
          </ScrollView>

        </Content>
      </Container>
    );
  }