
import React, { useState } from "react";
import { Text, TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,Title, Left, Body, Right, Button, Row, View } from 'native-base';
import {Icon} from 'react-native-elements';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Slideimage from "../Components/Slideimage";
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
        <Title><Text onPress={() => navigation.navigate("Shopbycatagory")} style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Shopbycatagory</Text></Title>
          </Header>
          <Header style={{backgroundColor:'#FF9900',alignItems:"center"}}>
              
<View style={{flex:1,flexDirection:'row',}}>
<ScrollView horizontal={true}>
<View style={{margin:10}}>
    <Text  onPress={() => {
            navigation.navigate("Mobiles");
          }} style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5,alignItems:"center"}}>📱Mobiles</Text>
</View>    
<View style={{margin:10}}>
    <Text onPress={() => {
            navigation.navigate("Tv");
          }} style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>📺 Tv</Text>
</View>    

<View style={{margin:10}}>
    <Text style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>
    👗 Ladies Cloths</Text>
</View>    

<View style={{margin:10}}>
   <Text style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>👖 Mens Cloths</Text>
</View>
<View style={{margin:10}}>
   <Text style={{fontSize:17,color:'#fff',backgroundColor:'#757d8d',padding:5,borderRadius:5}}>👖 Baby Cloths</Text>
</View>    
</ScrollView>







</View>

</Header>
<View>
  <ScrollView>
<List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://static.bhphoto.com/images/images2500x2500/1550583345_1460572.jpg' }} />
            </Left>
            <Body>
              <Text>Alexa</Text>
              <Text note numberOfLines={4}>All-new Fire TV Stick Lite with Alexa Voice Remote Lite | Stream HD Quality Video | No power and volume buttons | 2020 release </Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'gray' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>20% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>3000.00</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>1500.00</Text>
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
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://m.media-amazon.com/images/I/41cyUQJbgzL._SS47_.jpg' }} />
            </Left>
            <Body>
              <Text>Shoews</Text>
              <Text note numberOfLines={3}>Amazon Brand - Symbol Men's Polyester Sneakers </Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star-half" style={{ fontSize: 15, color: 'orange' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>10% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>1,049.00</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}> 499.00 </Text>
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
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE' }} />
            </Left>
            <Body>
              <Text>Alexa Speaker</Text>
              <Text note numberOfLines={3}>Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'gray' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>25% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>4,499</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>3,499</Text>
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
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T_VpOwLe2QIMfZ-nsCe34MvQz4GJplDcMA&usqp=CAU' }} />
            </Left>
            <Body>
              <Text>Solimo</Text>
              <Text note numberOfLines={3}>Amazon Brand - Solimo Protective Mobile Cover (Soft & Flexible Back Case) for Samsung Galaxy M21 / M30s</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>66% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>330.00</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>168.00</Text>
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
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWiiMapF39xc97F-lIhvH78LV-ho6XpiTNWzslZdQk1sFjB6C0jNN4sNQ5OXVeXklVecnr33L6&usqp=CAc' }} />
            </Left>
            <Body>
              <Text>Solimo</Text>
              <Text note numberOfLines={3}>Amazon Brand - Solimo Laptop Backpack for 15.6-inch Laptops (27 litres, Black) </Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'gray' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>47% offer</Text>
              </View>
              <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>999</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>price :</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>520</Text>
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
        </ScrollView>
</View>


   
</Container>
    );
  }


  


