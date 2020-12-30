import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native'; 
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right,List,ListItem, Title } from 'native-base';
export default function Productview ({navigation}) {
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
        <Title><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Products View</Text></Title>
          </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX////zZjnzXizyWSD97er5tqfzZDf0bkPzYzT95uDzXy7zXin4rZnyXCbzYjD6wrT1hmX2kHP/9/T3n4f829L5uqn0eVP6xrn96uT3mX/84Nj7z8P0cUj1gmD2i2z+9fL6wLH4sZ34pY/4qZP3m4H0cEb71Mr0dk/83dX1f1z2k3cmha0DAAAFl0lEQVR4nO2d63bqKhRGN6RFDBIvrdV6Sb2cbXf7/g94TKwJEI7GJG7A882fS0cGU2K4hAW/fgEAAAAAAAAAAAAAAAAAAAAAAACXWOzTt+/ph+ti3I35KIo5T4Tcui7JnVhITnKYHLkuy114koycETvXpbkHaUJKooXr4nRPP1IESfLuujzdM6WqISOuy9M9/6g3KSHyyXWBOuddN4xgGB4wDB8Yhs/jG+5ivT18vCHUUmqGZFCbzWsgvwZhmmFcGyrFajt3XfwazCLSGEZlGsBoJOXNFQnh0YtrgWvs6XWNi9Ce37dqKq87XKtG4fOd+tW2BjOY9FfxvQvBYy0SXxuONs9RjSR1rWLnI2HXC1+PaOlaxsqgm3s0g/12LWNj0l0VHivx4FrHgtklbQUfu9axYAyc2sHYxLVPlRXTi3gzmqKH0+Xq35DFgvduhVChSIqZa6EKH+XfkCeNhkGTYa8cP4tN1wVszVPR3PNV47mLcdHg0OcuC9cJhSFLWkzOrHkAhnTa4ipzGYChaPWcPw+gPTbkb60us439N2z39n5IYegMGNYEhg6BYU1g6BAY1gSGDoFhTWDoEBjWBIYOgWFNYOgQGNYEhg6BYU1g6BAY1gSGDoFhTWDoEBjWBIYO6chw478h67W6zN7/lQpE9ttc5rz+z2fDpM3S0FkIK4aIHDa+SJ+yEAxJ1HTPj2VcrL/025CI1fOhfyuvs1FULjD13DDLQhO3IoWaE+a7YXtg6AAYwhCG7oHhgxlyBXZ70HtDLkfjEnIa8TG5LmPfPfrfQf8N2UrPCdqJLJjoqVqDPEj04FaGYVgZAo+OHU5h5r1mQWnmUZYbaflsyD7Nj2bUkmeyEcd6NYMHGYJhNaVkdpShpkwWrEzplBvawdABMIRhDgydUrYWlXJnM/XSNMx2yaxoL0UIhkSajfsnt5Q4m9yupJsWSbJ+G7JEyzTvr/OOqdyoFfaU5kE9Y3uelrncXhsSpmbjk/POyTRRku/PM4da3r46nei3ob6jQoNgAIbt8dyQC1lyfhehBemloP+GIl2+lgxOivFaDT6fdtGgWnBKeBiGsbFR+SKrG3PDmXkWTL6Na/Ag3j2x2GzHB8dGQJp7gWSvsytbRW+CaPHtvbaKtrXXtsAI2CUwhGEODJ1y2bA6FMwMK0cn/AniWVqtrp2tPbQGy8MjfDYksbFRbj/rtnFjO8uQ+zTH0o3/zEumpy5oPFKDw5MLTdXghgXSL81ePkUlxTDialAEM7boAs8NY21F1E/NJLag/s1gZjHkrj8peFr28oKLFyX4sVzlQfmiffMzkP+hOUc4yXaiNx+wp+DeuMgqiGcpY+ZHz9RySkK2MVslOAuiPWwzPgy41/b4/VIY/gBDp/yPDC2rTazjQxrs+LA6C5rt9C3/2ILmltaDOAhDM7drmE3z8k+9dZ/lwTe9ZstXwH4bkoTspgXb0anYPFGD6U+Q7NWgDCbfgsW0IOY3BwMwfPg3pIzGScl51Fc/6L0hE1ry2uIrX1IptDHVfG0LhrJSobLaJF9Y8kCrTewrhirrS6e2YBgrhh6/1wZDJRiYoezWcHOvgjbmQ3Rr2Dxd+m70WJeG8vVuBW3M6Kctq5mNMLRlI7wW40Ph4eFy0/NtGpkZJentGSX8644lbUrZ5BtZQXtrAtApqP8Yz2UVtjnK5W6Miwqg65eCb/KTxCWU4HvvQjCPe3hkl/qYOA53C5REPGUYcTlIaNNdGe7MrqvjAVvuAHNHVq1Oyi2JPGwqTsy7OQIx8vIxc2IhO6jFxluj/BX6vfi6wkV4tHEtcZnJOGpTjUz89u/gQ5PDZ8Qb/h258HDQZOMwFjLOss9vgPNYRG9TLxt6G5PD9vvr7YYDLFdf6W7m95HjAAAAAAAAAAAAAAAAAAAA4DL/AvL5gDNwC0urAAAAAElFTkSuQmCC' }} />
                                <Body>
                                    <Text>Sumsung Galaxy</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://cdn.vox-cdn.com/thumbor/j-iE5pIhpbMGuqVEgpp1MkfvEnM=/0x0:1154x770/1200x800/filters:focal(485x293:669x477)/cdn.vox-cdn.com/uploads/chorus_image/image/57348783/iphonexui.1509112944.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <Body>
                            <Text style={{ marginTop: 10, fontSize: 25, fontWeight: 'bold' }}>Sumsung</Text>
                            <Text style={{ color: 'black', marginLeft: 30 }} note numberOfLines={2}>Vivo S1 Pro (Black,8GB RAM, 128GB Storage) indiaka smartphone</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <FAIcon name="star" style={{ fontSize: 19, color: 'orange' }} />
                                <FAIcon name="star" style={{ fontSize: 19, color: 'orange' }} />
                                <FAIcon name="star" style={{ fontSize: 19, color: 'orange' }} />
                                <FAIcon name="star" style={{ fontSize: 19, color: 'orange' }} />
                                <FAIcon name="star" style={{ fontSize: 19, color: 'gray' }} />
                                <Text style={{ marginLeft: 5, fontSize: 19 }}>50% offer</Text>
                            </View>
                            <Text style={{ fontSize: 17, textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontWeight: 'bold', color: 'red' }}>13000</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 3, marginLeft: 3, }}>Price :</Text>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 3, marginLeft: 3, marginBottom: 10, }}>12000</Text>
                            </View>


                        </Body>

                    </Card>
                    <View style={{ flexDirection: 'row', margin: 50 }}>
                        <Button style={{ marginRight: 30 }} rounded primary>
                            <Text onPress={() =>navigation.navigate("Billing") }>Buy Now 🛒 </Text>
                        </Button>
                        <Button onPress={() =>navigation.navigate("Cart") } style={{ marginLeft: 30 }} rounded info>
                            <Text>Add To Cart</Text>
                        </Button>

                    </View>
                    <View>
                        <Card>
                            <CardItem header bordered>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Product Description</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text style={{ fontSize: 15 }} note numberOfLines={5}>
                                        Revolutionary Triple Camera

                                        With 25 MP Low Light Camera, 8 MP Ultra-wide Camera and 5 MP Live Focus Camera, this phone ensures that the pictures you click are incredibly detailed and beautiful.

                </Text>
                                </Body>
                            </CardItem>
                            <CardItem header bordered>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Specifications</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text style={{ fontSize: 15 }} note numberOfLines={5}>
                                        In The Box
                                        

                                        Handset, Charger, Earphone, User Manual

                                        Model Number
                                        

                                        SM-A505FZBDINS

                                        Model Name
                                        

                                        Galaxy A50

                                        Color
                                        

                                        Blue

                                        Browse Type
                                        

                                        Smartphones

                                        SIM Type
                                        

                                        Dual Sim

                                        Hybrid Sim Slot
                                        

                                        No

                                        Touchscreen
                                        

                                        Yes

                                        OTG Compatible
                                        

                                        Yes

                                        Quick Charging
                                        

                                        Yes
                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline',justifyContent:'space-between' }}>
                    <Card>
                            <CardItem header bordered>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Comments</Text>
                            </CardItem>
                            </Card>
                                <FAIcon name="comment" style={{ fontSize: 19, color: 'blue' }} />
                                <FAIcon name="whatsapp" style={{ fontSize: 19, color: '#25D366' }} />
                                <FAIcon name="facebook" style={{ fontSize: 19, color: '#4267B2' }} />
                                <FAIcon name="twitter" style={{ fontSize: 19, color: '#1DA1F2' }} />
                                <FAIcon name="linkedin" style={{ fontSize: 19, color: 'black' }} />
                                </View>
                    
                    <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://i1.pickpik.com/photos/516/857/262/smile-profile-face-male-preview.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://d1dlh1v05qf6d3.cloudfront.net/information/uploads/2018/08/Screen-Shot-2018-08-24-at-10.35.36-am-1260x840.png' }} />
              </Left>
              <Body>
                <Text>Ali Brown</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-30-500x572.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2HULaD4XoCckGCTMfJsfSAOXl_6d7s2WPg&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://medianet-public-cdn.s3-ap-southeast-2.amazonaws.com/wp-content/uploads/2018/02/luke-benedictus-300x300.jpg' }} />
              </Left>
              <Body>
                <Text>Abdullahi</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
                    </View>

                    <View>
                      
                    </View>
                </Content>
            </Container>
        );
        }