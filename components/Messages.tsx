import React, { Component } from 'react';
import { Container, Header, Item, Input, 
        ListItem, List,Left, Body, Card, CardItem, 
          Button, Segment, Icon, Text, Thumbnail, DatePicker, Right, H2, Content } from 'native-base';
import {View} from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Route, Link } from "react-router-dom";
import Backbone from '../controllers/Backbone';
import {UserActions} from '../controllers';



export default class Messages extends Component {
   
    private backbone;
    constructor(props) {
      super(props);      
      this.backbone = Backbone.getInstance();
    }

  render() {
    const {goBack} = UserActions;
    return (
        <Container>
            <Header >
          <Left>
               <Button transparent onPress={goBack}>
                   <Icon name="arrow-back" color={'white'} />
               </Button>
          </Left>          
          <Body>
               <H2 style={{color:'white'}}>Messages</H2>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem avatar>
              <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>                
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>                
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>                
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>                
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>                
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>                
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
        </Container>
    );
  }
}

