import Exponent from 'exponent';
import React from 'react';
import TaskList from './TaskList';

class PluralTodo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    render() {
        return (
          <TaskList />
      );
    }
}


Exponent.registerRootComponent(PluralTodo);
