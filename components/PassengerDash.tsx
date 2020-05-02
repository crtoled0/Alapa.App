import React, { Component } from 'react';
import { Container, Content, Item, Input, 
        ListItem, List,Left, Body, Card, CardItem, 
          Button, Segment, Icon, Text, Thumbnail, DatePicker, Right } from 'native-base';
import {View} from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import * as Animatable from 'react-native-animatable';

import { Route, Link } from "react-router-dom";
import Backbone from '../controllers/Backbone';
import {TripActions} from '../controllers';

function TripTo(props) {
    let backbone = Backbone.getInstance();
    let {pd_addTripFilter} = backbone.state;
   
   const {loadTripDetails} = TripActions;
   return (<Content style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px'}}>
    <Item rounded style={{marginTop:'4px'}}>
        <Icon name="return-right" />
        <Input placeholder="I'm going to ..." />
        <Icon name="search" />
    </Item>
        <Text note style={{display: pd_addTripFilter?'none':'block'}}>From my current location, departing today 
            <Button small transparent onPress={()=>{ backbone.setState({pd_addTripFilter: true})}}>
                    <Icon name="create" style={{color:'red'}} />
            </Button> 
        </Text>
        <View  style={{display:!pd_addTripFilter?'none':'block'}}>
         <Animatable.View animation={pd_addTripFilter?'flipInX':'flipOutY'} >
            <Item rounded style={{marginTop:'4px'}}>
                <Icon name="search" />
                <Input placeholder="... From" />
                <Icon name="return-left" />
            </Item>
            <Item rounded style={{marginTop:'4px'}}>
                <Icon name="calendar" />
                <DatePicker
                        defaultDate={new Date()}
                        minimumDate={new Date()}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={(ev)=>{console.log("Set Date", ev);}}
                        disabled={false}
                />
                <Right>
                    <Button transparent style={{color:'green'}}>
                        <Icon name="sync" />
                    </Button>
                </Right>
            </Item>
            </Animatable.View>
        </View>
        <Content>
                <Grid>
                    <Section>
                        <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                              <Card>
                              <Animatable.View animation="flipInX"  >
                                <CardItem >
                                    <Left>
                                            <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                            <Body>
                                                <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                <Text note numberOfLines={1}>Aporte: $3.000 - Seats: 3</Text>
                                            </Body>
                                            <Icon name="more" onPress={()=>{loadTripDetails('1232fff3fdd')}} />
                                        </Left>
                                    </CardItem>
                                </Animatable.View>
                                </Card>
                        </Block>
                        <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                              <Card>
                              <Animatable.View animation="flipInX"  >
                                <CardItem >
                                    <Left>
                                            <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                            <Body>
                                                <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                <Text note numberOfLines={1}>Aporte: $3.000 - Seats: 3</Text>
                                            </Body>
                                            <Icon name="more" onPress={()=>{loadTripDetails('1232fff3fdd')}} />
                                        </Left>
                                    </CardItem>
                                    </Animatable.View>
                                </Card>
                        </Block>
                        <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                              <Card>
                              <Animatable.View animation="flipInX"  >
                                <CardItem >
                                    <Left>
                                            <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                            <Body>
                                                <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                <Text note numberOfLines={1}>Aporte: $3.000 - Seats: 3</Text>
                                            </Body>
                                            <Icon name="more" onPress={()=>{loadTripDetails('1232fff3fdd')}} />
                                        </Left>
                                    </CardItem>
                                    </Animatable.View>
                                </Card>
                        </Block>
                        <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                              <Card>
                              <Animatable.View animation="flipInX"  >
                                <CardItem >
                                    <Left>
                                            <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                            <Body>
                                                <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                <Text note numberOfLines={1}>Aporte: $3.000 - Seats: 3</Text>
                                            </Body>
                                            <Icon name="more" onPress={()=>{loadTripDetails('1232fff3fdd')}} />
                                        </Left>
                                    </CardItem>
                                    </Animatable.View>
                                </Card>
                        </Block>
                                                    
                      </Section>
                </Grid> 
        </Content>
    </Content>);
};

function MyRequests(props){
    const {loadTripDetails} = TripActions;
    return (<Content>
                    <Grid>
                        <Section>
                            <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                              <Card>
                                <Animatable.View animation="flipInX">
                                <CardItem >
                                    <Left>
                                            <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                            <Body>
                                                <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                <Text note numberOfLines={1}>Aporte: $3.000 - Seats: 3</Text>
                                            </Body>
                                            <Text note >Pending </Text>
                                            <Icon name="radio-button-on" style={{color:'yellow'}}></Icon>
                                        </Left>
                                    </CardItem>
                                    </Animatable.View>
                                </Card>
                            </Block>
                            <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                              <Card>
                              <Animatable.View animation="flipInX">
                                <CardItem >
                                    <Left>
                                            <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                            <Body>
                                                <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                <Text note numberOfLines={1}>Aporte: $3.000 - Seats: 3</Text>
                                            </Body>
                                            <Text note >Pending </Text>
                                            <Icon name="radio-button-on" style={{color:'yellow'}}></Icon>
                                        </Left>
                                    </CardItem>
                                </Animatable.View>
                                </Card>
                            </Block>
                            <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                              <Card>
                              <Animatable.View animation="flipInX">
                                <CardItem >
                                    <Left>
                                            <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                            <Body>
                                                <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                <Text note numberOfLines={1}>Aporte: $3.000 - Seats: 3</Text>
                                            </Body>
                                            <Text note >Rejected </Text>
                                            <Icon name="radio-button-on" style={{color:'red'}}></Icon>
                                        </Left>
                                    </CardItem>
                                    </Animatable.View>
                                </Card>
                            </Block>
                            <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                              <Card>
                              <Animatable.View animation="flipInX">
                                <CardItem >
                                    <Left>
                                            <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                            <Body>
                                                <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                <Text note numberOfLines={1}>Aporte: $3.000 - Seats: 3</Text>
                                            </Body>
                                            <Text note >Accepted </Text>
                                            <Icon name="radio-button-on" style={{color:'green'}} onPress={()=>{loadTripDetails('1232fff3fdd')}}></Icon>
                                        </Left>
                                    </CardItem>
                                    </Animatable.View>
                                </Card>
                            </Block>
                        </Section>
                    </Grid>                
                
            </Content>);
};

export default class PassengerDash extends Component {
   
    private backbone;
    constructor(props) {
      super(props);      
      this.backbone = Backbone.getInstance();
      this.state = {
        segmentActive: "trip-to"
      };
      this.backbone.setState({pd_addTripFilter:false});
    }
    switchSegment(seg){
        this.setState({segmentActive: seg});
    }

  render() {
    let {segmentActive} = this.state;
    return (
        <Container>
        <Segment>
          <Button first active={segmentActive==="trip-to"} onPress={()=>{this.switchSegment("trip-to")}}>
            <Link to="/dsh/passenger-dash" style={{ textDecoration: 'none' }}><Text>Trip To</Text></Link>
          </Button>
          <Button last active={segmentActive==="my-requests"} onPress={()=>{this.switchSegment("my-requests")}}>
          <Link to="/dsh/passenger-dash/my-requests" style={{ textDecoration: 'none' }}><Text>My Requests</Text></Link>
          </Button>
        </Segment>
        <Route exact={true} path={"/dsh/passenger-dash"} component={TripTo} />
        <Route path={"/dsh/passenger-dash/my-requests"} component={MyRequests}  />
        </Container>
    );
  }
}

