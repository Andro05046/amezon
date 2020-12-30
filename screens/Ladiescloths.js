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
export default function Ladiescloths({navigation}) {
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
                  backgroundColor: 'transparent',
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
                  backgroundColor: '#757d8d',
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
                    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdTVB0S5gj1QWy4Q74fQA02286vFezJ3nsPaGOcalMzY-UWceq-ylyoyarxRssbOagGgk7gQ&usqp=CAY',
                }}
              />
            </Left>
            <Body>
              <Text>nitra</Text>
              <Text note numberOfLines={3}>
                Nira Fashion Women Gown Blue Dress
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
                    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXTkkpCodAvbiSKkCbWmEi3IuBC8O7p7P-eQ-IaMjs-AKMU4yffrIMlVYluaPOPBX3Ewsm&usqp=CAY',
                }}
              />
            </Left>
            <Body>
              <Text>kalal</Text>
              <Text note numberOfLines={3}>
                It Doesn't Matter Whether You Are Off To A Party Wedding Office
                Or A Simple Outing With Friends The One Attire That Will Come To
                Your Rescue Is A Great Looking Kurti Or Kurt
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
                    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRc16hKy1-Re9dsfacRLo4rfpdTcCH-A1SHVOx6ULbcSHQNRMnh4qRU5c8_nJso1nrT9UCUC3g&usqp=CAY',
                }}
              />
            </Left>
            <Body>
              <Text>FLORAL</Text>
              <Text note numberOfLines={3}>
                Category: Dress100% PolyesterStyle: FLORAL BELL SLEEVE DRESS
                WITH BELT Made in USAPlus Sizes Available
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
                    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOKQC2YIvkH1mlV699fRRidFJ-AHva8RoHwNnjszpAl5RHjEppCuapxiUNRVeZ0cPmz_kUl0g&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>Carolina</Text>
              <Text note numberOfLines={3}>
                Carolina Herrera - floral-appliqué satin gown - women -
                Silk/Polyester - 6 - Blue
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
                    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkN5WVAJIWj2TuCnyDOo6wKlcaBQ1tOTpgEfGrYAO1HI_srOg0jUtfx5LRaveB3n0-3Pl_vg&usqp=CAY',
                }}
              />
            </Left>
            <Body>
              <Text>kurta</Text>
              <Text note numberOfLines={3}>
                Ftc Fashions Women Striped Straight Kurta ₹199.00₹199.00.
                Flipkart
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
                      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTq6SJ3HTG-ArCCvSmEhWmxkRmd7fJ7uuparUwwii_u1Xyf5dt9yjXKZYQ&usqp=CAY',
                  }}
                />
              </TouchableOpacity>
            </Left>
            <Body>
              <Text>Leggins</Text>
              <Text note numberOfLines={3}>
                New Women Fashion Printed Yoga Leggings Sports Exercise Running
                Pants Fitness Workout Clothes
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
