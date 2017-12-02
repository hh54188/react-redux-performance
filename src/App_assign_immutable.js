import React from "react";
import { fromJS } from "immutable";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

import "./App.css";

import { todos } from "./mock/todo_dict";
const todosReducer = (state = fromJS(todos), action) => {
  const { type, payload } = action;
  switch (type) {
    case "complete":
      const start = performance.now();
      const setInResult = state.setIn([payload, "completed"], true);
      console.log("IMMUTABLE SETIN COST===>", performance.now() - start);
      return setInResult;
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
    // const start = performance.now();
    // const todos2JS = todos.toJS();
    // console.log("TOJS() COST===>", performance.now() - start);
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
  const { todos } = state;
  console.log(todos);
  return {
    todos: state.todos.toJS()
  };
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
