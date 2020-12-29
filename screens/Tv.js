import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Row, View, Title, } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Slideimage from '../Components/Slideimage';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
export default function Tv({ navigation }) {

  return (
    <Container>
      <Header style={{ backgroundColor: '#4e586c', alignItems: 'center', justifyContent: 'flex-start' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon style={{ marginRight: 50, }} name='angle-left' type='font-awesome' size={30} color='#fff' />
        </TouchableOpacity>
        <Title><Text onPress={() => navigation.navigate("Shopbycatagory")} style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Shopbycatagory</Text></Title>
      </Header>
      <Header style={{ backgroundColor: '#FF9900', alignItems: "center" }}>

        <View style={{ flex: 1, flexDirection: 'row', }}>
          <ScrollView horizontal={true}>
            <View style={{ margin: 10 }}>
              <Text onPress={() => {
                navigation.navigate("Mobiles");
              }} style={{ fontSize: 17, color: '#fff', backgroundColor: '#757d8d', padding: 5, borderRadius: 5, alignItems: "center" }}>📱Mobiles</Text>
            </View>
            <View style={{ margin: 10 }}>
              <Text onPress={() => {
                navigation.navigate("Tv");
              }} style={{ fontSize: 17, color: '#fff', backgroundColor: 'transparent', padding: 5, borderRadius: 5 }}>📺 Tv</Text>
            </View>

            <View style={{ margin: 10 }}>
              <Text onPress={() => {
                navigation.navigate("Home");
              }} style={{ fontSize: 17, color: '#fff', backgroundColor: '#757d8d', padding: 5, borderRadius: 5 }}>
                👗 Ladies Cloths</Text>
            </View>

            <View style={{ margin: 10 }}>
              <Text onPress={() => {
                navigation.navigate("Home");
              }} style={{ fontSize: 17, color: '#fff', backgroundColor: '#757d8d', padding: 5, borderRadius: 5 }}>👖 Mens Cloths</Text>
            </View>
            <View style={{ margin: 10 }}>
              <Text onPress={() => {
                navigation.navigate("Home");
              }} style={{ fontSize: 17, color: '#fff', backgroundColor: '#757d8d', padding: 5, borderRadius: 5 }}>👖 Baby Cloths</Text>
            </View>
          </ScrollView>







        </View>

      </Header>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1563370711-best-overall-tcl-32s327-1542026616.jpg?crop=1xw:1xh;center,top&resize=480:*' }} />
            </Left>
            <Body>
              <Text>Onida</Text>
              <Text note numberOfLines={3}>Onida(,8GB RAM, 128GB Storage)</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'orange' }} />
                <FAIcon name="star" style={{ fontSize: 15, color: 'gray' }} />
                <Text style={{ marginLeft: 5, fontSize: 13 }}>20% offer</Text>
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
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://www.lg.com/hk_en/images/tvs/32ls3500/gallery/large02.jpg' }} />
            </Left>
            <Body>
              <Text>Tcl</Text>
              <Text note numberOfLines={3}>Tcl (4GB RAM, 64GB Storage)</Text>
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
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 3, marginLeft: 3 }}>13000</Text>
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
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://images.indianexpress.com/2016/09/noble-skiodo-800.jpg' }} />
            </Left>
            <Body>
              <Text>Tcl</Text>
              <Text note numberOfLines={3}>Tcl (Black,8GB RAM, 128GB Storage)</Text>
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
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://images.idgesg.net/images/article/2019/07/ru8000_006_dynamic1_black_ns-small-100801235-large.jpg' }} />
            </Left>
            <Body>
              <Text>Mi Tv</Text>
              <Text note numberOfLines={3}>Mi Tv S1 Pro (Black,8GB RAM, 128GB Storage)</Text>
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
              <Thumbnail onPress={() => navigation.navigate("Productview")} square source={{ uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571337447-2019-tcl-43-22-class-5-series-1571337440.jpg?crop=1xw:1xh;center,top&resize=480:*' }} />
            </Left>
            <Body>
              <Text>Tcl</Text>
              <Text note numberOfLines={3}>Mi Tv S1 Pro (Black,8GB RAM, 128GB Storage)</Text>
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
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lwJ2eYbGTFBCX9zJNiCJzAZ3ZA-h7OTv7w&usqp=CAU' }} />
              </TouchableOpacity>
            </Left>
            <Body>
              <Text>One Pluse</Text>
              <Text note numberOfLines={3}>One Pluse Tv S1 Pro (Black,8GB RAM, 128GB Storage)</Text>
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