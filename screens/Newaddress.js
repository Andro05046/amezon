import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem,CheckBox, Thumbnail,Title, Text, Left, Body, Right, View, Item,Button } from 'native-base';
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
        <Title><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>NewAddress</Text></Title>
          </Header>

        <Content>
            
                <CardItem Title>
                 <Text style={{fontWeight:'normal',fontSize:20}}>New Address</Text>
                </CardItem>
     
          <ScrollView>
          <View style={{ margin: 10 }}>
              <Input
                placeholder='Address Name'
              
              />
            </View>
            
            <View style={{ margin: 10 }}>
              <Input
                placeholder='Street Line 01' 
              />
            </View>
            <View style={{ margin: 10 }}>
              <Input
                placeholder='Street Line 02'
               
                color='black'
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 390,margin: 10 }}>
                <Input
                  placeholder='State'   rightIcon={
                    <Icon
                      name='chevron-right'
                      size={24}
                      color='black'
                      
                    />
                  }

                /></View>

            </View>
            <View>
            <View style={{ margin: 10 }}>
                <Input 
                  placeholder='Phone Number'
                /></View>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <CheckBox  color="gray" checked={true} />
            <Text style={{marginLeft:-90}}>Set Address Default</Text>
            </View>
            <View>
            <Button onPress={() =>navigation.navigate("Billing")} style={{borderRadius:10,width:350,hight:200,justifyContent:'center',marginLeft:30,marginTop:60}} iconLeft dark >
            <Icon color='white' />
            <Text style={{fontSize:20 }}>NEXT</Text>
          </Button>
            </View>
          </ScrollView>

        </Content>
      </Container>
    );
  }