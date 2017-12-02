import React from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

import "./App.css";

import { todos } from "./mock/todo_dict";
const todosReducer = (state = todos, action) => {
  const { type, payload } = action;
  switch (type) {
    case "complete":
      const start = performance.now();
      const assignResult = Object.assign(
        {},
        {
          ...state,
          [payload]: {
            completed: true
          }
        }
      );
      console.log("ASSIGN COST===>", performance.now() - start);
      return assignResult;
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
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {Object.entries(todos).map(([id, { completed }]) => (
          <li
            className={completed ? "completed" : "uncompleted"}
            id={id}
            onClick={this.onClick}
            key={id}
          >
            {id}
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
