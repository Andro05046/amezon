import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Badge } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Search from '../Components/Search';
import ContentSection from '../Components/ContentSection';
import Productlist from './Productlist';
import Avadar from '../Components/Avadar';
import Footer from '../Components/Footer';
import Slideimage from '../Components/Slideimage';
import { ScrollView } from 'react-native-gesture-handler';


class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#4e586c' }}>
          <Left style={{ flexDirection: 'row' }}>
            <Icon name="md-menu" onPress={() => this.props.navigation.openDrawer()} style={{ color: 'white', marginRight: 15 }} />
            <FAIcon name="amazon" style={{ fontSize: 32, color: 'white' }} />
          </Left>
          <Right>

            <Icon onPress={() => navigation.navigate("Cart")} name="md-cart" style={{ color: 'white' }} > <Badge warning style={{ marginRight: 50 }}><Text>2</Text></Badge></Icon>
          </Right>
        </Header>
        <View
          style={{
            position: 'relative',
            left: 0,
            right: 0,
            height: 70,
            backgroundColor: '#4e586c',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}><TouchableOpacity>
            <View
              style={{
                width: 100,
                backgroundColor: '#e7e7eb',
                height: 50,
                borderRadius: 4,
                padding: 10,
                marginLeft: 10
              }}>
              <Text style={{ fontSize: 12 }}>Shop by</Text>
              <Text style={{ fontWeight: 'bold' }}>Category</Text>
            </View>
          </TouchableOpacity>
          <Search />
        </View>



        <ContentSection />
        <View style={{ marginTop: 4 }}></View>
        <Avadar />
        <View style={{ marginTop: 4 }}></View>
        <Productlist />


        <View>

        </View>



      </Container>

    );
  }
}

export default Home;
