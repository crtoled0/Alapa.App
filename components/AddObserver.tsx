import React, { Component } from 'react';
import { Container, Header, Item, Input, 
        ListItem, List,Left, Body, Card, CardItem, 
          Button, Segment, Icon, Text, Thumbnail, DatePicker, Right, H2, Content } from 'native-base';
import {View} from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Route, Link } from "react-router-dom";
import Backbone from '../controllers/Backbone';
import {UserActions} from '../controllers';



export default class AddObserver extends Component {
   
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
               <H2 style={{color:'white'}}>Add Observer</H2>
          </Body>
        </Header>
        <Content style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px'}}>
                <Item rounded style={{marginTop:'4px'}}>
                    <Input placeholder="Search User" />
                    <Icon name="account-search" type="MaterialCommunityIcons" />
                </Item>
                <Grid style={{marginTop:10,marginBottom:10}}>
                    <Section stretch>
                            <Block xsSize="1/1" smSize="1/2">
                                <Card>
                                    <CardItem>
                                        <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                        <Body style={{alignItems:'center'}}>
                                            <Text numberOfLines={1}>Cristian TOledo</Text>
                                            <Text note numberOfLines={1}>crtoledo</Text> 
                                        </Body>
                                        <Icon name="person-add" style={{color:'green'}} type="MaterialIcons" />
                                    </CardItem>
                                </Card>
                            </Block>
                            <Block xsSize="1/1" smSize="1/2">
                                <Card>
                                    <CardItem>
                                        <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                        <Body style={{alignItems:'center'}}>
                                            <Text numberOfLines={1}>Cristian TOledo</Text>
                                            <Text note numberOfLines={1}>crtoledo</Text> 
                                        </Body>
                                        <Icon name="person-add" style={{color:'green'}} type="MaterialIcons" />
                                    </CardItem>
                                </Card>
                            </Block>
                            <Block xsSize="1/1" smSize="1/2">
                                <Card>
                                    <CardItem>
                                        <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                        <Body style={{alignItems:'center'}}>
                                            <Text numberOfLines={1}>Cristian TOledo</Text>
                                            <Text note numberOfLines={1}>crtoledo</Text> 
                                        </Body>
                                        <Icon name="person-add" style={{color:'green'}} type="MaterialIcons" />
                                    </CardItem>
                                </Card>
                            </Block>
                            <Block xsSize="1/1" smSize="1/2">
                                <Card>
                                    <CardItem>
                                        <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                        <Body style={{alignItems:'center'}}>
                                            <Text numberOfLines={1}>Cristian TOledo</Text>
                                            <Text note numberOfLines={1}>crtoledo</Text> 
                                        </Body>
                                        <Icon name="person-add" style={{color:'green'}} type="MaterialIcons" />
                                    </CardItem>
                                </Card>
                            </Block>                            
                    </Section>
                </Grid>
                <Button block success rounded onPress={goBack}><Icon name="done-all" type="MaterialIcons" /></Button>
            </Content>
        </Container>
    );
  }
}

