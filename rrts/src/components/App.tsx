import React from "react";
import { connect } from "react-redux";
import { ToDo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface ApProps {
  todos: ToDo[];
  fetchTodos(): any;
}

class _App extends React.Component<ApProps> {
  render() {
    return <div>Hi there</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: ToDo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
