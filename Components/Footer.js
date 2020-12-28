import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container >
        <Content />
        <Footer>
          <FooterTab style={{backgroundColor:'#4e586c'}}>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <FAIcon name="home" style={{ fontSize: 30, color: '#e6e6e6' }} />
              <Text>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Payment')}   vertical>
            <FAIcon  name="shopping-cart" style={{ fontSize: 30, color: '#e6e6e6' }} />
              <Text>Cart</Text>
            </Button>
            <Button badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
