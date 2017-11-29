import React from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

import "./App.css";

import todos from "./mock/todo_list";

const todosReducer = (state = todos, action) => {
  const { type, payload } = action;
  switch (type) {
    case "complete":
      console.log(type, payload);
      return state.map(
        item => (item.id == payload ? { ...item, completed: true } : item)
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer
});

const store = createStore(rootReducer);

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    const clickId = event.target.id;
    store.dispatch({
      type: "complete",
      payload: clickId
    });
  }
  componentDidMount() {}
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <li
            className={todo.completed ? "completed" : "uncompleted"}
            id={todo.id}
            onClick={this.onClick}
            key={todo.id}
          >
            {todo.id}
          </li>
        ))}
      </ul>
    );
  }
}

const WrapperedTodoList = connect(function mapStateToProps(state) {
  return state;
})(TodoList);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WrapperedTodoList />
      </Provider>
    );
  }
}

export default App;
