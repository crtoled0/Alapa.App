import React, { Component } from 'react';
import { Container, H1 } from 'native-base';


export default class Splash extends Component {
   constructor(props) {
      super(props);      
}

  render() {
    return (
        <Container>
          <H1>Loading Alapa app... </H1>        
        </Container>
    );
  }
}

