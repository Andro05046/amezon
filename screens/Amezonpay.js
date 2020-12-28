import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Title, Text, Left, Body, Right, View, Item,Button } from 'native-base';
import { Input, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default function Payments({navigation}) {
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
        <Title><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Payments View</Text></Title>
          </Header>

        <Content>
          <ScrollView>
            <Card>

              <CardItem>
                <Left>
                  <Body>
                    <Text style={{ justifyContent: 'center', fontSize: 30, fontWeight: 'bold' }} ><Icon name="credit-card" type='FontAwesome' />Payments</Text>
                    <Thumbnail square source={{ uri: 'https://cdnmp.plentymarkets.com/12010/meta/images/icon_plugin_sm.png' }} />
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{ uri: 'https://pngimg.com/uploads/credit_card/credit_card_PNG207.png' }} style={{ height: 220, width: null, flex: 1 }} />
              </CardItem>

            </Card>
            <View style={{ margin: 10 }}>
              <Input
                placeholder='Name On Card'
                leftIcon={{ type: 'font-awesome', name: 'user' }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Input
                placeholder='Card Number'
                leftIcon={{ type: 'FontAwesome', name: 'credit-card' }}
                color='black'
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 150 }}>
                <Input
                  placeholder='exp month'
                  leftIcon={{ type: 'FontAwesome', name: 'credit-card' }}
                  color='black'
                /></View>

              <View style={{ width: 150 }}>
                <Input
                  placeholder='exp Date'
                  leftIcon={{ type: 'FontAwesome', name: 'credit-card' }}
                  color='black'
                /></View>

              <View style={{ width: 150 }}>
                <Input maxLength={3}
                  placeholder='Cvv'
                  leftIcon={{ type: 'FontAwesome', name: 'credit-card' }}
                  color='black'
                /></View>


            </View>
            <View>

            <Button style={{borderRadius:10,width:350,hight:200,justifyContent:'center',marginLeft:30,marginTop:20}} iconLeft dark >
            <Icon color='white' name='' />
            <Text onPress={() =>navigation.navigate("Checkout")} style={{fontSize:20 }}>PAY NOW</Text>
          </Button>
            </View>
          </ScrollView>

        </Content>
      </Container>
    );
  }