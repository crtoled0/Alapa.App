import React from 'react';
import { AppLoading } from 'expo';
import { StyleProvider, Root, Container} from 'native-base';
import * as Font from 'expo-font';
//import { NativeRouter as Router } from "react-router-native";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Backbone from './controllers/Backbone';
import skel from './controllers/StateSkeleton';

import { Ionicons } from '@expo/vector-icons';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

import * as Animatable from 'react-native-animatable';

import {Splash, Main, Login, Register, 
        //Full Screen
        TripDetails, UserProfile, MyProfile, 
        AddLocation, AddObserver, ViewObserved, 
        Messages
       } from './components';

import Snackbar from 'react-native-snackbar-component';
import { MainActions } from './controllers';


export default class App extends React.Component {
  private backbone;
  constructor(props) {
    super(props);
    this.state = skel;
    Backbone.initComponent(this);
    this.backbone = Backbone.getInstance();
  }

  async componentDidMount() {
    let {isLogged} = this.backbone.state;
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.backbone.setState({ isReady: true, currLocation: isLogged?'/dsh/passenger-dash':'/login'});
  }

 

  render() {
    let {isReady, message, currLocation} = this.backbone.state;
    let {handleRef} = MainActions;
    if (!isReady) {
      return (<Splash />);
    }

    return (
        <StyleProvider style={getTheme(commonColor)}>
              <Router>
                <Redirect push to={currLocation||'/dsh/passenger-dash'} />
                <Route path={"/login"} render={()=>{ return (<Animatable.View animation="fadeInRight" ref={handleRef}><Login /></Animatable.View>)}} />
                <Route path={"/register"} render={()=>{ return (<Animatable.View animation="fadeInRight" ref={handleRef}><Register /></Animatable.View>)}} />
                <Route path={"/dsh"} render={()=>{ return (<Main />)}} />
                <Route path={"/trip-details/:trid"} render={()=>{ return (<Animatable.View animation="fadeInRight" ref={handleRef}><TripDetails /></Animatable.View>)}} />
                <Route path={"/my-profile"} render={()=>{ return (<Animatable.View animation="fadeInRight" ref={handleRef}><MyProfile /></Animatable.View>)}} />
                
                <Route path={"/user-profile/:userid"} render={()=>{ return (<Animatable.View animation="bounceInUp" ref={handleRef}><UserProfile /></Animatable.View>)}} />
                <Route path={"/add-location"} render={()=>{ return (<Animatable.View animation="fadeInRight" ref={handleRef}><AddLocation /></Animatable.View>)}} />
                <Route path={"/add-observer"} render={()=>{ return (<Animatable.View animation="fadeInRight" ref={handleRef}><AddObserver /></Animatable.View>)}} />
                <Route path={"/view-observed/:userid"} render={()=>{ return (<Animatable.View animation="bounceInUp" ref={handleRef}><ViewObserved /></Animatable.View>)}} />
                <Route path={"/messages"} render={()=>{ return (<Animatable.View animation="bounceInUp" ref={handleRef}><Messages /></Animatable.View>)}} />

                <Snackbar
                    visible={message.open}
                    //SnackBar visibility control
                    textMessage={message.msg}
                    //Text on SnackBar
                    actionHandler={() => {
                      //function called while clicking on action Text
                      console.log("let's go");
                      //After handling click making nackBar invisible 
                      this.backbone.setState({ 
                        message: {open: false, msg:"", duration: 3000, color:'#484848'} 
                      });
                    }}
                    actionText={"OK"} 
                    autoHidingTime={message.duration} 
                    backgroundColor={message.color||'#484848'}
                    accentColor={'#FFFFFF'}
                    messageColor={'#FFFFFF'}
                    //action Text to print on SnackBar
                    distanceCallback={distance => {
                      //Number indicating distance taken up by snackbar
                      console.log("distance", distance);
                      //this.setState({ distance: distance });
                    }}
                  />
              </Router>
        </StyleProvider>
    );
  }
}