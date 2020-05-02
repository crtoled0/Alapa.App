import React, { Component } from 'react';
import { Container, Header, Badge, Content, 
         Footer, FooterTab, Button, Left, Segment,
         Right, Body, Icon, Text, Thumbnail } from 'native-base';

import {Switch, View } from 'react-native';
import { Route, Redirect, withRouter } from "react-router-dom";
import {Backbone, MainActions} from '../controllers';

import * as Animatable from 'react-native-animatable';

import PassengerDash from './PassengerDash';
import DriverDash from './DriverDash';
import ObserverDash from './ObserverDash';

class Main extends Component {
  private backbone;
  constructor(props){
      super(props);
      this.backbone = Backbone.getInstance();  
  }

  setFooterSection(sec){
     console.log("Trying to redirect to ", sec);
      this.backbone.setState({activeFooter:sec, currLocation:"/dsh/"+sec});
  }

  checkInitMain() {
    let backbone = Backbone.getInstance(); 
    let {currLocation} = backbone.state;
    console.log(currLocation);
    //currLocation = currLocation || "/dsh/passenger-dash";
    if(!currLocation)
        return backbone.setState({ activeFooter: "passenger-dash", currLocation:"/dsh/passenger-dash"});
   // this.setFooterSection(currLocation.replace("/dsh","").replace("/",""));
    currLocation = currLocation || "/dsh/passenger-dash";
    let sec = currLocation.replace("/dsh","").replace("/","");
    //console.log("sec", sec);
    backbone.setState({ activeFooter: sec});
     //this.setFooterSection(sec);
  }

  componentDidMount() {
    //window.addEventListener('load', ()=>{this.checkInitMain()});
    let {currLocation} = this.backbone.state;
    currLocation = currLocation || "/dsh/passenger-dash";
    let sec = currLocation.replace("/dsh","").replace("/","");

    //console.log("sec", sec);
    this.backbone.setState({ activeFooter: sec});

  }

  componentWillUnmount() { 
     // window.removeEventListener('load', this.checkInitMain);
  }

  componentDidUpdate(){
     // let {currLocation} = this.backbone.state;
    
  }

  

  render() {
    let {activeFooter, currLocation, findMeActive, loggedUser} = this.backbone.state;
    const {goTo, handleRef} = MainActions;
    return (
      <Container>
        {/**<Header style={{position:'fixed',width:'-webkit-fill-available'}} hasSegment> **/}
        <Animatable.View animation="slideInDown">
            <Header >
              <Left>
                  <View style={{alignItems:'center'}}>
                      <Text note style={{color:'white'}} numberOfLines={1}> Find Me </Text>
                      <Switch warning value={findMeActive}  onValueChange={()=>{this.backbone.setState({findMeActive:!findMeActive})}} />
                  </View>
              </Left>          
              <Right>               
                  <Button transparent badge onPress={()=>{goTo('/messages')}}>
                        <Icon name="mail" />
                        <Badge><Text>2</Text></Badge>
                  </Button>            
                  <Button  rounded bordered warning onPress={()=>{goTo('/my-profile');}}>
                        <Thumbnail source={loggedUser.avatarImg?{uri:loggedUser.avatarImg}:require('../assets/empty-user.png')} style={{width:30, height:30, borderRadius:50}}/>
                  </Button>
              </Right>
            </Header>
        </Animatable.View>
        {/** <Redirect exact={true} from="/dsh" to="/dsh/passenger-dash" /> **/}
        <Route path={"/dsh/passenger-dash"} render={()=>{ return (<Animatable.View animation="bounceInUp" ref={handleRef} ><PassengerDash /></Animatable.View>)}} />
        <Route path={"/dsh/driver-dash"} render={()=>{ return (<Animatable.View animation="bounceInUp" ref={handleRef} ><DriverDash /></Animatable.View>)}} />
        <Route path={"/dsh/observer-dash"} render={()=>{ return (<Animatable.View animation="bounceInUp" ref={handleRef} ><ObserverDash /></Animatable.View>)}} />
        <Animatable.View animation="slideInUp">
          <Footer style={{position:'fixed', bottom:35}}>
            <FooterTab>
              <Button vertical active={activeFooter === "passenger-dash"} onPress={()=>{this.setFooterSection('passenger-dash')}}>
                  <Icon name="walk" active={activeFooter === "passenger-dash"}/>
                  <Text>Passenger</Text>
              </Button>
              <Button vertical active={activeFooter === "driver-dash"} onPress={()=>{this.setFooterSection('driver-dash')}}>
                  <Icon name="car" active={activeFooter === "driver-dash"} />
                  <Text>Driver</Text>
              </Button>
              <Button vertical active={activeFooter === "observer-dash"} onPress={()=>{this.setFooterSection('observer-dash')}}>
                  <Icon name="glasses" active={activeFooter === "observer-dash"} />
                  <Text>Observer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Animatable.View>
      </Container>
    );
  }
}

export default withRouter(Main);