import React, { Component } from 'react';
import { Container, Header, Card, CardItem, 
         Content, Badge, Button, Left,H2,Accordion, 
         Right, Body, Icon, Text, Thumbnail } from 'native-base';

import {Image, View} from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Route, Redirect, Link } from "react-router-dom";
import Backbone from '../controllers/Backbone';
import {TripActions} from '../controllers';

function RequestSeatOpc(props){

    return(<Button style={{margin:5}} rounded success><Icon name="hand"/><Text>Request Seat</Text></Button>);
}

function SendMessageToDriverOpc(props){
    return(<Button style={{margin:5}} rounded success><Icon name="message1" type="AntDesign" /><Text>Send Message To Driver</Text></Button>);
}

function SeeDriverDetailsOpc(props){
   // let backbone = Backbone.getInstance();
    let {goTo} = TripActions;
    return(<Button style={{margin:5}} rounded warning onPress={()=>{goTo('/user-profile/34242ijdifjdfiji')}}><Text>Driver Profile</Text><Icon name="contact"/></Button>);
}

function StartTripOpc(props){

    return(<Button style={{margin:5}}  rounded success><Icon name="play"/><Text>Start</Text></Button>);
}

function EndTripOpc(props){

    return(<Button style={{margin:5}}  rounded danger><Text>End</Text><Icon name="close"/></Button>);
}

function CancelTripOpc(props){

    return(<Button style={{margin:5}}  rounded danger><Text>Cancel</Text><Icon name="trash"/></Button>);
}

function CheckTripRequestersOpc(props){
    let backbone = Backbone.getInstance();
    let {toogleTripRequesters} = TripActions;
    let {seeRequestersList} = backbone.state.tripDetails;
    return(<Button style={{margin:5}} badge rounded primary onPress={toogleTripRequesters}>
                {!seeRequestersList && <Text>Requesters</Text>}
                {!seeRequestersList && <Icon name="contacts" ><Badge><Text>3</Text></Badge></Icon>}
                {seeRequestersList && <Text>Back To Trip Details</Text> }
                {seeRequestersList && <Icon name="close" ></Icon>}
            </Button>);
}


function RequesterOptions(props){
    const {goTo} = TripActions; 

    return(<Content><Grid>
              <Section stretch>                            
                  <Block xsSize="1/3">
                      <Button style={{margin:1}} warning small iconLeft onPress={()=>{ goTo('/user-profile/1321223233');}}><Icon name="contact" />
                              <Text>Profile</Text>
                      </Button>
                  </Block>
                  <Block xsSize="1/3">
                      <Button style={{margin:1}}  success small iconLeft><Icon name="checkmark-circle-outline" />
                              <Text>Accept</Text>
                      </Button>
                  </Block>
                  <Block xsSize="1/3">
                      <Button style={{margin:1}} danger small iconLeft><Icon name="trash" />
                              <Text>Reject</Text>
                      </Button>
                  </Block>
              </Section>
           </Grid></Content>);
}


function TripRequesters(props){
    
    return (<View style={{marginBottom: 200}}>
            <H2 style={{alignSelf:'center',marginTop:10}}>Trip Requesters</H2>
            <Grid>
                <Section stretch>
                        <Block xsSize="1/1" smSize="1/2">
                            <Card>
                                <CardItem>
                                    <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                    <Body style={{alignItems:'center'}}>
                                        <Text numberOfLines={1}>Cristian TOledo</Text>
                                        <Text note numberOfLines={1}>
                                                <Icon style={{fontSize:18}} name="star" />
                                                <Icon style={{fontSize:18}} name="star" />
                                                <Icon style={{fontSize:18}} name="star" />
                                                <Icon style={{fontSize:18}} name="star-half" />
                                                <Icon style={{fontSize:18}} name="star-outline" />
                                        </Text>
                                    </Body>
                                    <Text note numberOfLines={1}>crtoledo</Text>
                                </CardItem>
                                <CardItem>
                                    <RequesterOptions />
                                </CardItem>
                            </Card>
                        </Block>
                        <Block xsSize="1/1" smSize="1/2">
                            <Card>
                                <CardItem>
                                    <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                    <Body style={{alignItems:'center'}}>
                                        <Text numberOfLines={1}>Cristian TOledo</Text>
                                    </Body>
                                    <Text note numberOfLines={1}>crtoledo</Text>
                                </CardItem>
                                <CardItem>
                                    <RequesterOptions />
                                </CardItem>
                            </Card>
                        </Block>
                        <Block xsSize="1/1" smSize="1/2">
                            <Card>
                                <CardItem>
                                    <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                    <Body style={{alignItems:'center'}}>
                                        <Text numberOfLines={1}>Cristian TOledo</Text>
                                    </Body>
                                    <Text note numberOfLines={1}>crtoledo</Text>
                                </CardItem>
                                <CardItem>
                                    <RequesterOptions />
                                </CardItem>
                            </Card>
                        </Block>
                        <Block xsSize="1/1" smSize="1/2">
                            <Card>
                                <CardItem>
                                    <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                    <Body style={{alignItems:'center'}}>
                                        <Text numberOfLines={1}>Cristian TOledo</Text>
                                    </Body>
                                    <Text note numberOfLines={1}>crtoledo</Text>
                                </CardItem>
                                <CardItem>
                                    <RequesterOptions />
                                </CardItem>
                            </Card>
                        </Block>
                </Section>
            </Grid>
            </View>);
}

export default class TripDetails extends Component {
  private backbone;
  private availOptions;
  constructor(props){
      super(props);
      this.backbone = Backbone.getInstance();
      this.availOptions = {
          "send-driver-message": <SendMessageToDriverOpc />,
          "check-trip-req": <CheckTripRequestersOpc />,
          "end-trip": <EndTripOpc />,
          "cancel-trip":<CancelTripOpc />,
          "start-trip": <StartTripOpc />,
          "check-driver": <SeeDriverDetailsOpc />,
          "request-seat": <RequestSeatOpc />,
      };
  }

  //

  setFooterSection(sec){
  //    this.backbone.setState({activeFooter:sec, currLocation:sec});
  }

  componentDidMount() {
    
  }

  render() {
    let {options, seeRequestersList} = this.backbone.state.tripDetails;
    let {goBack} = TripActions;
    
    return (
      <Container>
        {/**<Header style={{position:'fixed',width:'-webkit-fill-available'}} hasSegment> **/}
        <Header >
          <Left>
               <Button transparent onPress={goBack}>
                   <Icon name="arrow-back" color={'white'} />
               </Button>
          </Left>          
          <Body>
               <H2 style={{color:'white'}}>Trip Details</H2>
          </Body>
        </Header>
        <Container>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/empty-user.png')} />
                        <Body>
                            <Text numberOfLines={1}>Driver: Cristian Toledo Hevia</Text>
                            <Text numberOfLines={1} note>Patente: XX-CC-CC</Text>                     
                        </Body>
                    </Left>
                </CardItem>
            </Card>
            {seeRequestersList && <TripRequesters />}
            {!seeRequestersList && <Content>
                <Grid>
                    <Section stretch>                            
                        <Block xsSize="1/1" lgSize="1/1">
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Text note>Trayecto</Text>
                                    </Left>
                                        <Text>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                </CardItem>
                            </Card>
                        </Block>
                        <Block xsSize="1/2" lgSize="1/4">
                            <Card>
                                <CardItem>
                                        <Left>
                                            <Text note>Seats</Text>
                                            <Text numberOfLines={1}> 3</Text> 
                                        </Left>                                        
                                </CardItem>
                            </Card>
                        </Block>
                        <Block xsSize="1/2" lgSize="1/4">
                            <Card>
                                <CardItem>
                                        <Left>
                                            <Text note>Donation</Text>
                                            <Text numberOfLines={1}>   $3.000</Text>
                                        </Left>
                                </CardItem>
                            </Card>
                        </Block>
                        <Block xsSize="1/1" lgSize="2/4">
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Text note>Departure</Text>                        
                                    </Left>
                                    <Text numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                </CardItem>
                            </Card>                            
                        </Block>                            
                    </Section>
            </Grid> 
            <Card style={{marginBottom: 200}}>
                <CardItem>
                    <Body style={{alignItems:'center'}}>              
                        <H2 numberOfLines={1}>Punto de salida</H2>          
                        <Image source={require('../assets/map-area.example.png')} style={{height: 300, width: '100%', flex: 1}} />
                    </Body>                    
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>Cualquier descripcion adicional del viaje, tipo de vehiculo, etc, cualquier cosa deberia ir por acá</Text>
                    </Body>
                </CardItem>
            </Card>
            </Content>
            }
            <Grid style={{position:'fixed', bottom:0}}>
                    <Section stretch>
                            {options && options.map(opc => {
                                return (<Block smSize="1/1" lgSize="1/3">{this.availOptions[opc]}</Block>);
                            })}
                    </Section>
            </Grid>
        </Container>
      </Container>
    );
  }
}