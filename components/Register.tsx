import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, 
         Body, Icon, Form, Item, Input, Button, 
         Text, Title, Card, CardItem, Thumbnail} from 'native-base';
import { Image, View, Switch } from 'react-native';

import {Backbone, LoginActions} from '../controllers';

export default class Register extends Component {
  private backbone;
  constructor(props) {
    super(props);
    this.backbone = Backbone.getInstance();
  }
  render() {
    let {userToRegister} = this.backbone.state;
    const {goToLogin, registerValueLink, sendRegisterForm, loadThumbImage} = LoginActions;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={goToLogin}>
              <Icon name='arrow-round-back' />
            </Button>
          </Left>
          <Body>
            <Title>Back To Login</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{margin:25, marginTop:50}}>
          <Card style={{flex:1,justifyContent: "left",alignItems: "center"}}>
              <CardItem>
                <Thumbnail source={(userToRegister && userToRegister.avatarImg)?{uri:userToRegister.avatarImg}:require('../assets/empty-user.png')} style={{width:100, height:100, borderRadius:50}}/>
                <Button  rounded bordered warning>
                  <Icon name="create" onPress={loadThumbImage} />
                </Button>
              </CardItem>
          </Card>
          <Button block rounded iconLeft style={{marginBottom:10,marginTop:10, backgroundColor:'#3b5998'}}>
                    <Icon name='logo-facebook' />
                    <Text>Get Profile from Facebook </Text>
          </Button>
          <Form style={{width: '100%'}}>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='arrow-dropright' />
              <Input  placeholder='Name to be seen' onChange={(eve)=>{registerValueLink({key:'userid', ...eve});registerValueLink({key:'displayName', ...eve})}} style={{width: '80%'}} />
            </Item>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='arrow-dropright' />
              <Input placeholder='Your Full Name' onChange={(eve)=>{registerValueLink({key:'fullName', ...eve})}} style={{width: '80%'}} />
            </Item>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='mail' />
              <Input keyboardType={"email-address"} placeholder='Email' onChange={(eve)=>{registerValueLink({key:'email', ...eve})}} style={{width: '80%'}} />
            </Item>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='key' />
              <Input secureTextEntry={true} placeholder='Password' onChange={(eve)=>{registerValueLink({key:'password', ...eve})}} style={{width: '80%'}} />
            </Item>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='key' />
              <Input secureTextEntry={true} placeholder='Repeat Password' onChange={(eve)=>{registerValueLink({key:'password2', ...eve})}} style={{width: '80%'}} />
            </Item>
{/**
            <Item regular>
              <Icon active name='contact' />
              <Input  placeholder='Payment Method' style={{width: '80%'}} />
            </Item>
  **/
}

          </Form>
          <Button block rounded success style={{marginTop:10}} onPress={sendRegisterForm}><Text>Register </Text></Button>
        </Content>
      </Container>
    );
  }
}