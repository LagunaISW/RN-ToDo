import Exponent from 'exponent';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

class PluralTodo extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {

        };
    }

    render() {
      return (
        <View>
          <Text>Hello MotheFucker!</Text>
        </View>
      );
    }
}


Exponent.registerRootComponent(PluralTodo);
