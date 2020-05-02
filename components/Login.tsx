import React, { Component } from 'react';
import { Container, Content, 
         Form, Item, Input, Label, Button, 
         Text, Icon } from 'native-base';
import { Image, View, Switch } from 'react-native';
import {Backbone, LoginActions} from '../controllers';

export default class Login extends React.Component {
 // private loginActions;
  private BbState;
  constructor(props) {
    super(props);
    //this.backbone = props.backbone;
   // this.loginActions = new LoginActions();
    this.BbState = Backbone.getInstance();
    console.log(this.props);
  }  

  componentDidMount() {
    this.BbState.setState({ keepLogged: true});
  }
  render() {
    let {keepLogged} = this.BbState.state;
    const {goToRegister, toogleKeepLogged, loginValueLink, sendLoginForm} = LoginActions;
    return (
      <Container>
        <Content style={{margin:25, marginTop:50}}>
          <View  style={{justifyContent: 'center',
                        alignItems: 'center'}}>
                <Image rounded source={require('../assets/icon2.png')} style={{height: 200, width: 200, flex: 1}}/>
          </View>
          <Form style={{width: '100%'}}>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='contact' />
              <Input keyboardType={"email-address"} onChange={(eve)=>{loginValueLink({key:'email', ...eve})}} placeholder='Email' style={{width: '80%'}} />
            </Item>
            <Item regular rounded style={{marginBottom:5}}>
              <Icon active name='key' />
              <Input secureTextEntry={true} placeholder='Password' onChange={(eve)=>{loginValueLink({key:'password', ...eve})}} style={{width: '80%'}} />
            </Item>
          </Form>
          <Button block rounded success style={{marginTop:10}} onPress={sendLoginForm}><Text>Sign In </Text></Button>
          <Button block rounded warning style={{marginTop:10}} onPress={goToRegister} ><Text>Register </Text></Button>
          <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop:10
            }}>
                <View><Text>Keep Logged</Text></View>
                <View><Switch warning value={keepLogged} onValueChange={toogleKeepLogged} /></View>                
          </View>
        </Content>
      </Container>
    );
  }
}