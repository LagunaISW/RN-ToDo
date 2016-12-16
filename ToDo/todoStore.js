import { createStore } from 'redux';

const defaultStore = {
    todos: [
        {
            task: 'Initial todo in store',
        },
    ],
};

function todoStore(state = defaultStore, action) {
    switch (action.type) {
    case 'ADD_TODO':
        return Object.assign({}, state, {
            todos: state.todos.concat([{
                task: action.task,
            }]),
        });
    default:
        return state;
    }
}

export default createStore(todoStore);
