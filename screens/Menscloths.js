import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Row,
  View,
  Title,
} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Slideimage from '../Components/Slideimage';
import {TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
export default function Menscloths({navigation}) {
  return (
    <Container>
      <Header
        style={{
          backgroundColor: '#4e586c',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            style={{marginRight: 50}}
            name="angle-left"
            type="font-awesome"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        <Title>
          <Text
            onPress={() => navigation.navigate('Shopbycatagory')}
            style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
            Shopbycatagory
          </Text>
        </Title>
      </Header>
      <Header style={{backgroundColor: '#FF9900', alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View style={{margin: 10}}>
              <Text
                onPress={() => {
                  navigation.navigate('Mobiles');
                }}
                style={{
                  fontSize: 17,
                  color: '#fff',
                  backgroundColor: '#757d8d',
                  padding: 5,
                  borderRadius: 5,
                  alignItems: 'center',
                }}>
                📱Mobiles
              </Text>
            </View>
            <View style={{margin: 10}}>
              <Text
                onPress={() => {
                  navigation.navigate('Tv');
                }}
                style={{
                  fontSize: 17,
                  color: '#fff',
                  backgroundColor: '#757d8d',
                  padding: 5,
                  borderRadius: 5,
                }}>
                📺 Tv
              </Text>
            </View>

            <View style={{margin: 10}}>
              <Text
                onPress={() => {
                  navigation.navigate('Ladiescloths');
                }}
                style={{
                  fontSize: 17,
                  color: '#fff',
                  backgroundColor: '#757d8d',
                  padding: 5,
                  borderRadius: 5,
                }}>
                👗 Ladies Cloths
              </Text>
            </View>

            <View style={{margin: 10}}>
              <Text
                onPress={() => {
                  navigation.navigate('Menscloths');
                }}
                style={{
                  fontSize: 17,
                  color: '#fff',
                  backgroundColor: 'transparent',
                  padding: 5,
                  borderRadius: 5,
                }}>
                👖 Mens Cloths
              </Text>
            </View>
            <View style={{margin: 10}}>
              <Text
                onPress={() => {
                  navigation.navigate('Babycloths');
                }}
                style={{
                  fontSize: 17,
                  color: '#fff',
                  backgroundColor: '#757d8d',
                  padding: 5,
                  borderRadius: 5,
                }}>
                👖 Baby Cloths
              </Text>
            </View>
          </ScrollView>
        </View>
      </Header>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                onPress={() => navigation.navigate('Productview')}
                square
                source={{
                  uri:
                    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScf-tpWtKiOyY_OHkrGFoVUQYtjVVHM-R3wHFc9tfaYVKtmFgLFgI6jire0QY6Txd0b5NQM50&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>T shirt</Text>
              <Text note numberOfLines={3}>
                Buy Men’s Stylish Full sleeve Hoody Neck Cotton Red
              </Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'gray'}} />
                <Text style={{marginLeft: 5, fontSize: 13}}>20% offer</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}>
                800
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text>price :</Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 3,
                    marginLeft: 3,
                  }}>
                  699.00
                </Text>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate('Productview')}>
                  View
                </Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                onPress={() => navigation.navigate('Productview')}
                square
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9Fk_w7XTUydWzFcmocNwYpYEIGPDL5kNFC2zfBaq-l4I9zM2pLTGrH3lXuzYZIvENnFJclMoA&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>Shirts</Text>
              <Text note numberOfLines={3}>
                Rebel Blue Party Wear Shirt
              </Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon
                  name="star-half"
                  style={{fontSize: 15, color: 'orange'}}
                />
                <Text style={{marginLeft: 5, fontSize: 13}}>10% offer</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}>
                500
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text>price :</Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 3,
                    marginLeft: 3,
                  }}>
                  359
                </Text>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate('Productview')}>
                  View
                </Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                onPress={() => navigation.navigate('Productview')}
                square
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTonfQthLMFNKmMAt8FjBa2JwT_za0ejgt8X6W9dNi-mNHfr4c&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>T.Shirt</Text>
              <Text note numberOfLines={3}>
                Redbrick Black Plain Full Sleeve Hooded Casual ...
              </Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'gray'}} />
                <Text style={{marginLeft: 5, fontSize: 13}}>25% offer</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}>
                500
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text>price :</Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 3,
                    marginLeft: 3,
                  }}>
                  300
                </Text>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate('Productview')}>
                  View
                </Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                onPress={() => navigation.navigate('Productview')}
                square
                source={{
                  uri:
                    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSFQnz02ANEPUQxG94IZcHfpqwABZTCZpB5PFl_2E9rxQrqRZX_AdAkVUrO_48&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>Shirts</Text>
              <Text note numberOfLines={3}>
                Hot 2018 Summer New Fashion Brand Clothing Men ...
              </Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <Text style={{marginLeft: 5, fontSize: 13}}>50% offer</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}>
                10000
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text>price :</Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 3,
                    marginLeft: 3,
                  }}>
                  8500
                </Text>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate('Productview')}>
                  View
                </Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                onPress={() => navigation.navigate('Productview')}
                square
                source={{
                  uri:
                    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4fV50ktipudSuTFfDLl_CDbNTsKwDOQtbk-xpVnP9IklP7zpAKTzaURfmP4tvEw8X5rH0Z1E&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>Shirts</Text>
              <Text note numberOfLines={3}>
                Highlander Men Solid Casual Green Shirt
              </Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'gray'}} />
                <Text style={{marginLeft: 5, fontSize: 13}}>10% offer</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}>
                300
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text>price :</Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 3,
                    marginLeft: 3,
                  }}>
                  200
                </Text>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate('Productview')}>
                  View
                </Text>
              </Button>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Left>
              <TouchableOpacity
                onPress={() => navigation.navigate('Productview')}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6OX5VpUCV_J4e8bhlaV24pJdvsYIV5CaOPGj5Z9-mQsz9Q-4txO9zd8LFwvfJF1UhaB9QFkg&usqp=CAE',
                  }}
                />
              </TouchableOpacity>
            </Left>
            <Body>
              <Text>T Shirts</Text>
              <Text note numberOfLines={3}>
                HRX by Hrithik Roshan Men Yellow Printed Round
              </Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'orange'}} />
                <FAIcon name="star" style={{fontSize: 15, color: 'gray'}} />
                <Text style={{marginLeft: 5, fontSize: 13}}>60% offer</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}>
                499
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text>price :</Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 3,
                    marginLeft: 3,
                  }}>
                  140
                </Text>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => navigation.navigate('Productview')}>
                  View
                </Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
