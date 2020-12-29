import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Row, View,Title } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Slideimage from '../Components/Slideimage';
import { TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default function Mobiles({ navigation }) {

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
        <Title><Text onPress={() => navigation.navigate("Shopbycatagory")} style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Shopbycatagory</Text></Title>
          </Header>
          <Header style={{backgroundColor:'#FF9900',alignItems:"center"}}>
              
<View style={{flex:1,flexDirection:'row',}}>
<ScrollView horizontal={true}>
<View style={{margin:10}}>
    <Text  onPress={() => {
            navigation.navigate("Mobile");
          }}  style={{fontSize:17,color:'#fff',backgroundColor:'transparent',padding:5,borderRadius:5,alignItems:"center"}}>📱Mobiles</Text>
</View>    
<View style={{margin:10}}>
    <Text  onPress={() => {
            navigation.navigate("Tv");
          }}  style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>📺 Tv</Text>
</View>    

<View style={{margin:10}}>
    <Text onPress={() => {
            navigation.navigate("Shopbycatogory");
          }}  style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>
    👗 Ladies Cloths</Text>
</View>    

<View style={{margin:10}}>
   <Text  onPress={() => {
            navigation.navigate("Shopbycatogory");
          }}  style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>👖 Mens Cloths</Text>
</View>
<View style={{margin:10}}>
   <Text  onPress={() => {
            navigation.navigate("Shopbycatogory");
          }}  style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>👖 Baby Cloths</Text>
</View>    
</ScrollView>







</View>

</Header>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://image.oppo.com/content/dam/oppo/my/mkt/prodcut-list-page/reno3%20pro%20blue-600x600.png' }} />
            </Left>
            <Body>
              <Text>Nokia</Text>
              <Text note numberOfLines={3}>Nokia(,8GB RAM, 128GB Storage)</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'gray' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>20% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>11000</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>9000</Text>
              </View>


            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate("Productview")}>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://images.ctfassets.net/d6skzop43my5/6OyxwWln6Ke5UuX8hHLzZZ/5ae77b5f60dada8a8be63a0102ac7e45/nokia_5_3-front-cyan.png?q=50' }} />
            </Left>
            <Body>
              <Text>Oppo</Text>
              <Text note numberOfLines={3}>oppo (4GB RAM, 64GB Storage)</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star-half" style={{ fontSize: 15, color: 'orange' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>10% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>14000</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>11000</Text>
              </View>


            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate("Productview")}>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://n4.sdlcdn.com/imgs/i/1/l/Oppo-A5-2020-64GB-4-SDL344663750-1-bd198.png' }} />
            </Left>
            <Body>
              <Text>Oppo</Text>
              <Text note numberOfLines={3}>Oppo (Black,8GB RAM, 128GB Storage)</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'gray' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>25% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>20000</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>17000</Text>
              </View>

            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate("Productview")}>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://advancetelecom.com.pk/wp-content/uploads/2017/11/Nokia-2-Black-Front.png' }} />
            </Left>
            <Body>
              <Text>Vivo</Text>
              <Text note numberOfLines={3}>Vivo S1 Pro (Black,8GB RAM, 128GB Storage)</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>50% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>15000</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>7000</Text>
              </View>


            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate("Productview")}>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://image.oppo.com/content/dam/oppo/my/mkt/prodcut-list-page/reno3%20pro%20blue-600x600.png' }} />
            </Left>
            <Body>
              <Text>Oppo</Text>
              <Text note numberOfLines={3}>Vivo S1 Pro (Black,8GB RAM, 128GB Storage)</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'gray' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>50% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>13000</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>12000</Text>
              </View>


            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate("Productview")}>View</Text>
              </Button>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Left>
              <TouchableOpacity onPress={() => navigation.navigate("Productview")} >
                <Thumbnail square source={{ uri: 'https://image.oppo.com/content/dam/oppo/my/mkt/prodcut-list-page/reno3%20pro%20blue-600x600.png' }} />
              </TouchableOpacity>
            </Left>
            <Body>
              <Text>Oppo</Text>
              <Text note numberOfLines={3}>Vivo S1 Pro (Black,8GB RAM, 128GB Storage)</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'gray' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>50% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>13000</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>12000</Text>
              </View>


            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate("Productview")}>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>

      </Content>
    </Container>
  );
}