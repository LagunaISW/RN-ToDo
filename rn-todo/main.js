import Exponent from 'exponent';
import React from 'react';
import TaskList from './TaskList';

class PluralTodo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native',
                },
                {
                    task: 'Learn Redux',
                },
            ],
        };
    }

    onAddStarted() {
        console.log('Clicked');
    }

    render() {
        return (
          <TaskList
              onAddStarted={this.onAddStarted.bind(this)}
              todos={this.state.todos}
          />
      );
    }
}


Exponent.registerRootComponent(PluralTodo);
