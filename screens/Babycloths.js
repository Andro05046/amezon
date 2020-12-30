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
export default function Babycloths({navigation}) {
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
                  backgroundColor: 'transparent',
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
                    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgxGxoWu8DsBe-TujIpgLC9vTnX-xDfEY_FWBE1o0IgBn1PfFtbVorBx78PFXP3ogvYNKC-VU&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>Baby Pant and Shirt</Text>
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
                    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuVSScuu3daMB9RRDE1O3im0fKWADHaPKKoiBzIZJadCVZYmtI-kJ1PVvWGlM&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>Baby Froks</Text>
              <Text note numberOfLines={3}>
                Party Dresses for 1.5-2 years - Girls & Kids
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
                    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMGU1GxoYl5sDPpjdjwK-lDK3frbJo0Iq6vvkARQ1T2-DLbMKVnCN-FiwhTGSzEtVxUF1gsdIa&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>Baby Froks</Text>
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
                    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSKgLjNoIBrBIP_Kewst2Eo1AGVxVKRN5jX-CqvHgGEEBLzpIXiqvRGWYTPwQ&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text> Baby dresses</Text>
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
                  150
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
                    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT98lYqf5BPUnkkyrWnqUQkjNMNkBRC7EkhIus0ap2OH_wqpei9igUz_5IsSge6tLN02SALyWQ&usqp=CAE',
                }}
              />
            </Left>
            <Body>
              <Text>Casual Dress Panti</Text>
              <Text note numberOfLines={3}>
                {' '}
                Casual Green Shirt
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
                      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8xCc4Mx3tJfHdsXCHfdh-M7HYaZgho6mcjfU_LjXCfIZU2eNQOMYfcgrSgMrhCHE_wCC1hB_E&usqp=CAE',
                  }}
                />
              </TouchableOpacity>
            </Left>
            <Body>
              <Text>T Shirts</Text>
              <Text note numberOfLines={3}>
                HKidsville Minecraft Green Half Sleeves T-shirt
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
