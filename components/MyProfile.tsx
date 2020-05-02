import React, { Component } from 'react';
import { Container, Header, Card, CardItem, 
         Footer, FooterTab, Button, Left,H2,
         Right, Body, Icon, Text, Thumbnail, Content, Form, Item, Input } from 'native-base';

import {Image} from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Route, Redirect, Link } from "react-router-dom";
import Backbone from '../controllers/Backbone';
import {UserActions, LoginActions} from '../controllers';



export default class MyProfile extends Component {
  private backbone;
  private availOptions;
  constructor(props){
      super(props);
      this.backbone = Backbone.getInstance(); 
  }

  //

  setFooterSection(sec){
  //    this.backbone.setState({activeFooter:sec, currLocation:sec});
  }

  componentDidMount() {
    
  }

  render() {
    let {loggedUser} = this.backbone.state;
    let {goBack, valueLink, editUserImage} = UserActions;
    let {logout} = LoginActions;
    
    return (
      <Container>
        {/**<Header style={{position:'fixed',width:'-webkit-fill-available'}} hasSegment> **/}
        <Header >
          <Left>
               <Button transparent onPress={goBack}>
                   <Icon name="arrow-back"  />
               </Button>
          </Left>          
          <Right>
            <Button transparent onPress={logout} >
                <Icon name="logout" type="AntDesign" style={{color:'red'}} />
            </Button>
          </Right>
        </Header>
        <Content style={{margin:25, marginTop:50}}>
        <H2>Profile {loggedUser.userid}</H2>
          <Card style={{flex:1,justifyContent: "left",alignItems: "center"}}>
              <CardItem>
                <Thumbnail source={loggedUser.avatarImg?{uri:loggedUser.avatarImg}:require('../assets/empty-user.png')} style={{width:100, height:100, borderRadius:50}}/>
                <Button  transparent>
                  <Icon name="create" onPress={editUserImage} />
                </Button>
              </CardItem>
          </Card>
          <Form style={{width: '100%'}} id="myProfileForm">
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='arrow-dropright' />
              <Input  placeholder='Name to be seen' value={loggedUser.userid} onChange={(eve)=>{valueLink({formName:'myProfileForm', key:'userid', ...eve});valueLink({formName:'myProfileForm',key:'displayName', ...eve})}} style={{width: '80%'}} />
            </Item>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='arrow-dropright' />
              <Input placeholder='Your Full Name' value={loggedUser.fullName} onChange={(eve)=>{valueLink({formName:'myProfileForm',key:'fullName', ...eve})}} style={{width: '80%'}} />
            </Item>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='mail' />
              <Input keyboardType={"email-address"} value={loggedUser.email} placeholder='Email' onChange={(eve)=>{valueLink({formName:'myProfileForm',key:'email', ...eve})}} style={{width: '80%'}} />
            </Item>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='key' />
              <Input secureTextEntry={true} placeholder='New Password' onChange={(eve)=>{valueLink({formName:'myProfileForm',key:'password', ...eve})}} style={{width: '80%'}} />
            </Item>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='key' />
              <Input secureTextEntry={true} placeholder='Repeat New Password' onChange={(eve)=>{valueLink({formName:'myProfileForm',key:'password2', ...eve})}} style={{width: '80%'}} />
            </Item>
          </Form>
          <Button block rounded success style={{marginTop:10}} ><Icon name="content-save-edit" type="MaterialCommunityIcons" /><Text>Save </Text></Button>
        </Content>
      </Container>
    );
  }
}