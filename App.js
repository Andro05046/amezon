import React, { Component } from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Amezonpay from './screens/Amezonpay';
import Checkout from './screens/Checkout';
import Productview from './screens/Productview';
import Billing from './screens/Billing';
import Newaddress from './screens/Newaddress';
import Productlist from './screens/Productlist';
import Cart from './screens/Cart';
import Shopbycatagory from './screens/Shopbycatagory';
import Mobiles from './screens/Mobiles';
import Tv from './screens/Tv';
import Ladiescloths from './screens/Ladiescloths';
import Menscloths from './screens/Menscloths';
import Babycloths from './screens/Babycloths';
const CustomDrawerContentComponent = props => {
  return (
    <Container>
      <Header style={{backgroundColor: '#3a455c', height: 90}}></Header>
    </Container>
  );
};

const Drawer = createDrawerNavigator();
class App extends Component {

  render() {
    return (
      <NavigationContainer>
      <Drawer.Navigator  initialRouteName="Home"   drawerStyle={{
    backgroundColor: '#fff'
  }}   drawerContentOptions={{
    activeTintColor: 'black',
    activeBackgroundColor:'#fff',
    itemStyle: { marginVertical:5 },
  }}>
        <Drawer.Screen  name="Home" component={Home} />
        <Drawer.Screen  name="Amezonpay" component={Amezonpay} />
        <Drawer.Screen name="Checkout" component={Checkout} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Productview" component={Productview} />
        <Drawer.Screen name="Billing" component={Billing} />
        <Drawer.Screen name="Newaddress" component={Newaddress} />
        <Drawer.Screen name="Productlist" component={Productlist} />
        <Drawer.Screen name="Shopbycatagory" component={Shopbycatagory} />
        <Drawer.Screen name="Mobiles" component={Mobiles} />
        <Drawer.Screen name="Tv" component={Tv} />
        <Drawer.Screen name="Ladiescloths" component={Ladiescloths} />
        <Drawer.Screen name="Menscloths" component={Menscloths} />
        <Drawer.Screen name="Babycloths" component={Babycloths} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
}


export default App;
