import React, { Component } from 'react';
import { Container, Header, Card, CardItem, 
         Footer, FooterTab, Button, Left,H2,
         Right, Body, Icon, Text, Thumbnail } from 'native-base';

import {Image, Modal} from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Route, Redirect, Link } from "react-router-dom";
import Backbone from '../controllers/Backbone';
import {UserActions} from '../controllers';



export default class UserProfile extends Component {
  private backbone;
  constructor(props){
      super(props);
      this.backbone = Backbone.getInstance();  
  }


  componentDidMount() {
    
  }

  render() {
    let {userProfileModalVisible} = this.backbone;
    const {goBack} = UserActions;
    
    return (<Container>
                    <Header >
                    <Body>
                        <H2 style={{color:'white'}}>Cristian Toledo</H2>
                    </Body>
                    <Right>
                        <Button rounded onPress={goBack}>
                            <Icon name="close" color={'white'} />
                        </Button>
                    </Right>
                    </Header>
                    <Container>
                        <Card style={{flex: 0}}>
                            <CardItem bordered>
                                    <Body style={{alignItems:'center'}}>
                                        <Thumbnail source={require('../assets/empty-user.png')} style={{height: 120, width: 120, flex: 1}} />
                                        <Text numberOfLines={1}>Cristian Toledo Hevia</Text>
                                        <Text note>crtoledo</Text>
                                    </Body>
                            </CardItem>
                            <CardItem>
                                <Body style={{alignItems:'center'}}>
                                      <Text> Average Feedback</Text>
                                      <Text numberOfLines={1}>
                                                <Icon name="star" />
                                                <Icon name="star" />
                                                <Icon name="star" />
                                                <Icon name="star-half" />
                                                <Icon name="star-outline" />
                                      </Text>

                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                  <Grid>
                                    <Section stretch>
                                        <Block smSize="1/1" lgSize="1/2">
                                        <Card>
                                            <CardItem>
                                                    <Left>
                                                         <Thumbnail source={require('../assets/empty-user.png')} />
                                                         <Body>
                                                             <Text numberOfLines={1}>Fernando Cabellos</Text>
                                                             <Text note numberOfLines={1}>
                                                                <Icon name="star" style={{fontSize:18}} />
                                                                <Icon name="star" style={{fontSize:18}}/>
                                                                <Icon name="star" style={{fontSize:18}} />
                                                                <Icon name="star-half" style={{fontSize:18}} />
                                                                <Icon name="star-outline" style={{fontSize:18}} />
                                                             </Text>
                                                         </Body>
                                                    </Left>
                                                </CardItem>
                                                <CardItem>
                                                    <Body>
                                                        <Text note>As Passenger</Text>
                                                        <Text>Bueno, creo que el servicio fue blablabla, lorem ipsum whatever than sdsidja aisojd asidj oija sdoiasjd </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </Block>
                                        <Block smSize="1/1" lgSize="1/2">
                                        <Card>
                                            <CardItem>
                                                    <Left>
                                                         <Thumbnail source={require('../assets/empty-user.png')} />
                                                         <Body>
                                                             <Text numberOfLines={1}>Fernando Cabellos</Text>
                                                             <Text note numberOfLines={1}>
                                                                <Icon name="star" style={{fontSize:18}} />
                                                                <Icon name="star" style={{fontSize:18}}/>
                                                                <Icon name="star" style={{fontSize:18}} />
                                                                <Icon name="star-half" style={{fontSize:18}} />
                                                                <Icon name="star-outline" style={{fontSize:18}} />
                                                             </Text>
                                                         </Body>
                                                    </Left>
                                                </CardItem>
                                                <CardItem>
                                                    <Body>
                                                        <Text note>As Driver</Text>
                                                        <Text>Bueno, creo que el servicio fue blablabla, lorem ipsum whatever than sdsidja aisojd asidj oija sdoiasjd </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </Block>
                                        <Block smSize="1/1" lgSize="1/2">
                                        <Card>
                                            <CardItem>
                                                    <Left>
                                                         <Thumbnail source={require('../assets/empty-user.png')} />
                                                         <Body>
                                                             <Text numberOfLines={1}>Fernando Cabellos</Text>
                                                             <Text note numberOfLines={1}>
                                                             <Icon name="star" style={{fontSize:18}} />
                                                                <Icon name="star" style={{fontSize:18}}/>
                                                                <Icon name="star" style={{fontSize:18}} />
                                                                <Icon name="star-half" style={{fontSize:18}} />
                                                                <Icon name="star-outline" style={{fontSize:18}} />
                                                             </Text>
                                                         </Body>
                                                    </Left>
                                                </CardItem>
                                                <CardItem>
                                                    <Body>
                                                        <Text note>As Driver</Text>
                                                        <Text>Bueno, creo que el servicio fue blablabla, lorem ipsum whatever than sdsidja aisojd asidj oija sdoiasjd </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </Block>
                                        <Block smSize="1/1" lgSize="1/2">
                                        <Card>
                                            <CardItem>
                                                    <Left>
                                                         <Thumbnail source={require('../assets/empty-user.png')} />
                                                         <Body>
                                                             <Text numberOfLines={1}>Fernando Cabellos</Text>
                                                             <Text note numberOfLines={1}>
                                                                <Icon name="star" style={{fontSize:18}} />
                                                                <Icon name="star" style={{fontSize:18}}/>
                                                                <Icon name="star" style={{fontSize:18}} />
                                                                <Icon name="star-half" style={{fontSize:18}} />
                                                                <Icon name="star-outline" style={{fontSize:18}} />
                                                             </Text>
                                                         </Body>
                                                    </Left>
                                                </CardItem>
                                                <CardItem>
                                                    <Body>
                                                        <Text note>As Driver</Text>
                                                        <Text>Bueno, creo que el servicio fue blablabla, lorem ipsum whatever than sdsidja aisojd asidj oija sdoiasjd </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </Block>
                                        </Section>
                                  </Grid>
                                </Body>
                            </CardItem>
                        </Card>
                    </Container>
                </Container>
    );
  }
}