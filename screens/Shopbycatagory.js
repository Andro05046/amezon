
import React, { useState } from "react";
import { View, Text, TouchableOpacity,StyleSheet,Picker } from 'react-native';
import {Container, Header,Row,Title,Content} from 'native-base';
import {Icon} from 'react-native-elements';
import Mobiles from './Mobiles';
export default function Shopbycatagory({navigation}) {


const M1 = "Mobiles"



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
        <Title><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Shopbycatagory</Text></Title>
          </Header>
          <Header style={{backgroundColor:'#FF9900',alignItems:"center"}}>
<View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
<View>
    <Text style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5,alignItems:"center"}}>📱Mobiles</Text>
</View>    
<View>
    <Text style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>📺 Tv</Text>
</View>    

<View>
    <Text style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>
    👗 Ladies</Text>
</View>    

<View>
   <Text style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>👖 Mens</Text>
</View>
<View>
   <Text style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>👖 Baby</Text>
</View>    








</View>
</Header>
<Mobiles />



   
</Container>
    );
  }


  


