import React, { Component } from 'react';
import { Container, Content, Item, Input,
        ListItem, List,Left, Body, Card, CardItem,
          Button, Segment, Icon, Text, DatePicker, Right } from 'native-base';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import * as Animatable from 'react-native-animatable';
import {Image} from 'react-native';
import { Route, Link } from "react-router-dom";
import Backbone from '../controllers/Backbone';
import {TripActions} from '../controllers';

function MyTrips(props){
    const {loadTripDetails} = TripActions;
    return ( <Content>
                    <Grid>
                        <Section stretch>
                                <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                                <Card>
                                <Animatable.View animation="flipInX"  >
                                    <CardItem>
                                            <Left>
                                                    <Body>
                                                        <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                        <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                    </Body>
                                                    <Text note >Opened </Text>
                                                    <Icon name="radio-button-on" style={{color:'green'}}></Icon>
                                                    <Text note > </Text>
                                                    <Icon name="more" onPress={()=>{loadTripDetails('1232fff3fdd')}} />
                                            </Left>
                                        </CardItem>
                                    </Animatable.View>
                                    </Card>
                                </Block>
                                <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                                <Card>
                                <Animatable.View animation="flipInX"  >
                                    <CardItem>
                                            <Left>
                                                    <Body>
                                                        <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                        <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                    </Body>
                                                    <Text note >Opened </Text>
                                                    <Icon name="radio-button-on" style={{color:'green'}}></Icon>
                                                    <Text note > </Text>
                                                    <Icon name="more" onPress={()=>{loadTripDetails('1232fff3fdd')}} />
                                            </Left>
                                        </CardItem>
                                    </Animatable.View>
                                    </Card>
                                </Block>
                                <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                                <Card>
                                <Animatable.View animation="flipInX"  >
                                    <CardItem>
                                            <Left>
                                                    <Body>
                                                        <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                        <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                    </Body>
                                                    <Text note >Opened </Text>
                                                    <Icon name="radio-button-on" style={{color:'green'}}></Icon>
                                                    <Text note > </Text>
                                                    <Icon name="more" onPress={()=>{loadTripDetails('1232fff3fdd')}} />
                                            </Left>
                                        </CardItem>
                                    </Animatable.View>
                                    </Card>
                                </Block>
                                <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                                <Card>
                                <Animatable.View animation="flipInX"  >
                                    <CardItem>
                                            <Left>
                                                    <Body>
                                                        <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                        <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                    </Body>
                                                    <Text note >Opened </Text>
                                                    <Icon name="radio-button-on" style={{color:'green'}}></Icon>
                                                    <Text note > </Text>
                                                    <Icon name="more" onPress={()=>{loadTripDetails('1232fff3fdd')}} />
                                            </Left>
                                        </CardItem>
                                    </Animatable.View>
                                    </Card>
                                </Block>
                                <Block smSize="1/1" lgSize="1/2" xlSize="1/3">
                                <Card>
                                <Animatable.View animation="flipInX"  >
                                    <CardItem>
                                            <Left>
                                                    <Body>
                                                        <Text numberOfLines={1}>Quillota <Icon name="car" /><Icon name="arrow-round-forward" /> Santiago</Text>
                                                        <Text note numberOfLines={1}>5-Sept-2019 9:30 AM</Text>
                                                    </Body>
                                                    <Text note >Canceled </Text>
                                                    <Icon name="radio-button-on" style={{color:'red'}}></Icon>
                                                    <Text note > </Text>
                                                    <Icon name="more" onPress={()=>{loadTripDetails('1232fff3fdd')}} />
                                            </Left>
                                        </CardItem>
                                    </Animatable.View>
                                    </Card>
                                </Block>
                            
                            
                        </Section>
                    </Grid>
            </Content>);
}

function NewTrip(props){
    let backbone = Backbone.getInstance();
    let {newTripDateTime} = backbone;
    const {goTo} = TripActions;
    newTripDateTime = newTripDateTime || "01-05-2016 3:25 pm";
    return (
        
    <Container style={{marginBottom:0}}>
        <Item>
            <Right>
                <Button transparent onPress={()=>{goTo('/add-location');}}><Text>Add Location  <Icon name="pin" /></Text></Button>
            </Right>
        </Item>
        <Grid>
            <Section stretch>                            
                <Block xsSize="1/1" lgSize="1/1">
                <Animatable.View animation="flipInX"  >
                    <Item rounded style={{marginTop:'4px'}}>
                        <Icon name="search" />
                        <Input placeholder="From ..." />
                        <Icon name="return-right" />            
                    </Item>
                    </Animatable.View>
                </Block>
                <Block xsSize="1/1" lgSize="1/1">
                <Animatable.View animation="flipInX"  >
                    <Item rounded style={{marginTop:'4px'}}>
                            <Icon name="return-right" />
                            <Input placeholder="... To" />
                            <Icon name="search" />
                    </Item>
                    </Animatable.View>
                </Block>
                <Block xsSize="1/2" lgSize="1/2">
                <Animatable.View animation="flipInX"  >
                    <Item rounded style={{marginTop:'4px'}}>
                        <Icon type="MaterialCommunityIcons" name="bus-alert" />
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
                    </Item>
                    </Animatable.View>
                 </Block>
                 <Block xsSize="1/2" lgSize="1/2">
                 <Animatable.View animation="flipInX"  >
                    <Item rounded style={{marginTop:'4px'}}>
                        <Icon name="time" />
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
                    </Item>
                    </Animatable.View>
                </Block>
                <Block xsSize="1/2" lgSize="1/2">
                <Animatable.View animation="flipInX"  >
                    <Item rounded style={{marginTop:'4px'}}>
                            <Icon name="hand" />
                            <Input style={{width: 50}} placeholder="Available Seats" />
                    </Item>
                    </Animatable.View>
                </Block>
                <Block xsSize="1/2" lgSize="1/2">
                <Animatable.View animation="flipInX"  >
                    <Item rounded style={{marginTop:'4px'}}>
                            <Icon name="logo-usd" />
                            <Input style={{width: 50}} placeholder="Donation" />
                    </Item>
                    </Animatable.View>
                </Block>
                <Block xsSize="1/1" lgSize="1/1">
                <Animatable.View animation="flipInX"  >
                    <Item rounded style={{marginTop:'4px'}}>
                            <Icon name="pin" />
                            <Input placeholder="GPS Of Departure" />
                    </Item>
                    </Animatable.View>
                </Block>
                <Block xsSize="1/1" lgSize="1/1">
                    <Item rounded style={{marginTop:'4px'}}>
                        <Image source={require('../assets/map-area.example.png')} style={{height: 300, width: '100%', flex: 1}} />
                    </Item>
                </Block>        
            </Section>
        </Grid>
        <Grid style={{position:'sticky', bottom:0}}>
                    <Section stretch>
                         <Block smSize="1/1" lgSize="1/1">
                         <Animatable.View animation="flipInX"  >
                            <Button rounded block success><Icon name="save"/><Text>Save</Text></Button>
                            </Animatable.View>
                         </Block>
                    </Section>
        </Grid>
    </Container>);
}

export default class Main extends Component {
   
    private backbone;
    constructor(props) {
      super(props);      
      this.backbone = Backbone.getInstance();
      this.state = {segmentActive:'my-trips'};
    }

    switchSegment(sec, to){
        const {goTo} = TripActions;
        this.setState({segmentActive:sec});
        goTo(to,{skipAnimation:true});
    }

  render() {
    const {segmentActive} = this.state;
    const {handleRef} = TripActions;
    
    return (
        <Container>
            <Segment>
                <Button first active={segmentActive==="my-trips"} onPress={()=>{this.switchSegment("my-trips","/dsh/driver-dash")}}>
                    <Link  style={{ textDecoration: 'none' }}><Text>My Trips</Text></Link>
                </Button>
                <Button last active={segmentActive==="new-trip"} onPress={()=>{this.switchSegment("new-trip","/dsh/driver-dash/new-trip")}}>
                    <Icon name="add" color={'white'} />
                </Button>
            </Segment>
            <Content style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px'}}>
                    <Route exact={true} path={"/dsh/driver-dash"} component={MyTrips}  />
                    <Route path={"/dsh/driver-dash/new-trip"} component={NewTrip}   />
            </Content>
        </Container>
    );
  }
}

