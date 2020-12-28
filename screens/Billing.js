import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Title, Text, Left, Body, Right, View, Item,Button } from 'native-base';
import { Input, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default function Billing({navigation}) {
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
        <Title><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Billing</Text></Title>
          </Header>

        <Content>
            
                <CardItem Title>
                 <Text style={{fontWeight:'normal',fontSize:20}}>Billing</Text>
                </CardItem>
     
          <ScrollView>
          <View style={{ margin: 10 }}>
              <Input
                placeholder='first name'
              
              />
            </View>
            
            <View style={{ margin: 10 }}>
              <Input
                placeholder='AddressLine 1' 
              />
            </View>
            <View style={{ margin: 10 }}>
              <Input
                placeholder='AddressLine 2'
               
                color='black'
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 200,margin: 10 }}>
                <Input
                  placeholder='City'

                /></View>

              <View style={{ width: 165,margin: 10 }}>
                <Input
                  placeholder='Zip Code'

                /></View>

            </View>
            <View>
            <View style={{ width: 150,margin: 10 }}>
                <Input 
                  placeholder='State'
                /></View>

            </View>

            <View>
              <Text style={{color:'#00BFFF',marginLeft:10}}>New Address</Text>
            
            </View>
            <View>

            <Button style={{borderRadius:10,width:350,hight:200,justifyContent:'center',marginLeft:30,marginTop:20}} iconLeft dark >
            <Icon color='white' name='' />
            <Text onPress={() =>navigation.navigate("Amezonpay")} style={{fontSize:20 }}>NEXT</Text>
          </Button>
            </View>
          </ScrollView>

        </Content>
      </Container>
    );
  }