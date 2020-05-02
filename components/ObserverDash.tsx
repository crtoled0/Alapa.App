import React, { Component } from 'react';
import { Container, Content, Item, Input, 
        ListItem, List,Left, Body, Card, CardItem,
          Button, Segment, Icon, Text, Thumbnail, DatePicker, Right } from 'native-base';
import {Backbone, UserActions} from '../controllers';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Route, Link } from "react-router-dom";


function MyObserved(){
    const {goTo} = UserActions;
    return (<Content style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px'}}>
                <Item rounded style={{marginTop:'4px'}}>
                    <Input placeholder="Filter" />
                    <Icon name="filter-list" type="MaterialIcons" />
                </Item>
                <Grid>
                    <Section stretch>
                            <Block xsSize="1/1" smSize="1/2">
                                <Card>
                                    <CardItem>
                                        <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                                        <Body style={{alignItems:'center'}}>
                                            <Text numberOfLines={1}>Cristian TOledo</Text>
                                            <Text note numberOfLines={1}>crtoledo</Text> 
                                        </Body>
                                        <Icon name="eye-slash" style={{color:'red'}} type="FontAwesome5" />
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
                                        <Icon name="eye" style={{color:'green'}} type="FontAwesome5" onPress={()=>{goTo('/view-observed/34343r34')}} />
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
                                        <Icon name="eye-slash" style={{color:'red'}} type="FontAwesome5" />
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
                                        <Icon name="eye" style={{color:'green'}} type="FontAwesome5" onPress={()=>{goTo('/view-observed/34343r34')}} />
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
                                        <Icon name="eye-slash" style={{color:'red'}} type="FontAwesome5" />
                                    </CardItem>
                                </Card>
                            </Block>
                    </Section>
                </Grid>
            </Content>);
}

function MyObservers(){
    const {goTo} = UserActions;

    return (<Content style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px'}}>
    <Grid>
        <Section stretch>
                <Block xsSize="3/4" smSize="3/4">
                    <Item rounded style={{marginTop:'4px'}}>
                        <Input placeholder="Filter" />
                        <Icon name="filter-list" type="MaterialIcons" />
                    </Item>
                </Block>
                <Block xsSize="1/4" smSize="1/4">
                    <Item style={{marginTop:'4px',alignItems:'center'}}>
                        <Right>
                            <Button success onPress={()=>{goTo('/add-observer')}}><Icon name="md-add" type="Ionicons" /></Button>
                        </Right>
                    </Item>
                </Block>
                <Block xsSize="1/1" smSize="1/2">
                    <Card>
                        <CardItem>
                            <Thumbnail source={require('../assets/empty-user.png')} style={{width:25, height:25}}/>
                            <Body style={{alignItems:'center'}}>
                                <Text numberOfLines={1}>Cristian TOledo</Text>
                                <Text note numberOfLines={1}>crtoledo</Text> 
                            </Body>
                            <Icon name="ios-remove-circle" style={{color:'red'}} type="Ionicons" />
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
                            <Icon name="ios-remove-circle" style={{color:'red'}} type="Ionicons" />
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
                            <Icon name="ios-remove-circle" style={{color:'red'}} type="Ionicons" />
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
                            <Icon name="ios-remove-circle" style={{color:'red'}} type="Ionicons" />
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
                            <Icon name="ios-remove-circle" style={{color:'red'}} type="Ionicons" />
                        </CardItem>
                    </Card>
                </Block>
                <Block xsSize="1/1" smSize="1/1">
                    <Card>
                        <CardItem>
                            <Body style={{alignItems:'center'}}>
                                <Button onPress={()=>{goTo('/add-observer')}} success ><Icon name="md-add" type="Ionicons" /></Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Block>
        </Section>
    </Grid>
</Content>);
}

export default class Main extends Component {
   
    private backbone;
    constructor(props) {
      super(props);      
      this.backbone = Backbone.getInstance();
      this.state = {segmentActive: "my-observed"};
    }
    switchSegment(seg){
        this.setState({segmentActive: seg});
    }

  render() {
    let {segmentActive} = this.state;
    return (
        <Container>
        <Segment>
          <Button first active={segmentActive==="my-observed"} onPress={()=>{this.switchSegment("my-observed")}}>
            <Link to="/dsh/observer-dash" style={{ textDecoration: 'none' }}><Text>My Observed</Text></Link>
          </Button>
          <Button last active={segmentActive==="my-observers"} onPress={()=>{this.switchSegment("my-observers")}}>
            <Link to="/dsh/observer-dash/my-observers" style={{ textDecoration: 'none' }}><Text>My Observers</Text></Link>
          </Button>
        </Segment>
        <Route exact={true} path={"/dsh/observer-dash"} component={MyObserved} />
        <Route path={"/dsh/observer-dash/my-observers"} component={MyObservers}  />
        </Container>
    );
  }
}

