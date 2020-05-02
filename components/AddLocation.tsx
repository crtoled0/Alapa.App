import React, { Component } from 'react';
import { Container, Header, Item, Input, 
        ListItem, List,Left, Body, Card, CardItem, 
          Button, Segment, Icon, Text, Thumbnail, DatePicker, Right, H2, Form, Content } from 'native-base';
import {Image} from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Route, Link } from "react-router-dom";
import Backbone from '../controllers/Backbone';
import {TripActions} from '../controllers';



export default class AddLocation extends Component {
   
    private backbone;
    constructor(props) {
      super(props);      
      this.backbone = Backbone.getInstance();
    }

  render() {
    const {goBack, valueLink} = TripActions;
    return (
        <Container>
            <Header >
          <Left>
               <Button transparent onPress={goBack}>
                   <Icon name="arrow-back" color={'white'} />
               </Button>
          </Left>          
          <Body>
               <H2 style={{color:'white'}}>Add Location</H2>
          </Body>
        </Header>
        <Content style={{width:'95%', margin:10}}>
            <Form style={{width: '100%', marginTop:10}}>
                <Item regular rounded style={{marginBottom:5}}>
                    <Icon active name='flag' type="FontAwesome5" />
                    <Input  placeholder='Country' value={'Chile'}  onChange={(eve)=>{valueLink({formName:'addLocationForm', key:'country', ...eve});valueLink({formName:'myProfileForm',key:'displayName', ...eve})}} style={{width: '80%'}} />
                </Item>
                <Item regular rounded style={{marginBottom:5}}>
                    <Icon active name='city' type="FontAwesome5"/>
                    <Input placeholder='Location or City Name'  onChange={(eve)=>{valueLink({formName:'addLocationForm',key:'city', ...eve})}} style={{width: '80%'}} />
                </Item>
                <Item regular rounded style={{marginBottom:5}}>
                    <Icon active name='tags' type="FontAwesome5" />
                    <Input placeholder='Tags (Any location identifier helper for search. Separated by comma)' onChange={(eve)=>{valueLink({formName:'addLocationForm',key:'tags', ...eve})}} style={{width: '80%'}} />
                </Item>
                <Item regular rounded style={{marginBottom:5}}>
                    <Icon active name='location-pin' type="Entypo" />
                    <Input placeholder='Departure Point'  style={{width: '80%'}} />
                    <Icon active name='filter-variant' type="MaterialCommunityIcons" />
                </Item>
                <Item regular rounded style={{marginBottom:5}}>
                    <Image source={require('../assets/map-area.example.png')} style={{height: 300, width: '100%', flex: 1}} />
                </Item>
            </Form>
            <Button block rounded success style={{marginTop:10}} ><Icon name="content-save-edit" type="MaterialCommunityIcons" /><Text>Save </Text></Button>
            </Content>
        </Container>
    );
  }
}

