import React, { Component } from 'react';
import { Container, Header, Item, Input, 
        ListItem, List,Left, Body, Card, CardItem, 
          Button, Segment, Icon, Text, Thumbnail, Right, H2 } from 'native-base';
import {Image, ImageBackground} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Route, Link } from "react-router-dom";
import Backbone from '../controllers/Backbone';
import {UserActions} from '../controllers';



export default class ViewObserved extends Component {
   
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
                    <H2 style={{color:'white'}}>View Observed</H2>
                </Body>
        </Header>
        <ImageBackground source={require('../assets/map-area.example.png')} style={{height: null, width: null, flex: 1}} >
                      <Card>
                          <CardItem>
                              <Icon type="AntDesign" name="calendar" />
                              <DatePicker
                                          style={{width: 200}}
                                          date={'05-04-2019'}
                                          mode="date"
                                          placeholder="When"
                                          format="DD-MM-YYYY"
                                          minDate="01-05-2016"
                                          confirmBtnText="Confirm"
                                          cancelBtnText="Cancel"
                                          showIcon={false}
                                          customStyles={{
                                          dateInput: {
                                              marginLeft: -5,
                                              border: 'none'
                                          }
                                          // ... You can check the source to find the other keys.
                                          }}
                                          onDateChange={(date) => {console.log(date)}}
                                      />
                          </CardItem>
                      </Card>
                      
        </ImageBackground>
        </Container>
    );
  }
}

