import React from "react";
import { connect } from "react-redux";
import { ToDo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface ApProps {
  todos: ToDo[];
  fetchTodos(): any;
}

class _App extends React.Component<ApProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ToDo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: ToDo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
