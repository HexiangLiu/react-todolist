import React, { Component } from 'react';

import './App.scss';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default class App extends Component {
  state = { items: [] };

  addItem = (item) => {
    this.setState((state) => {
      return item.content ? { items: [...state.items, item] } : null;
    });
  };

  deleteItem = (id) => {
    const items = this.state.items.filter((item) => {
      return item.id !== id;
    });

    this.setState({ items: items });
  };

  clearItems = () => {
    this.setState({ items: [] });
  };

  render() {
    return (
      <main className="main">
        <div className="input__container">
          <h2 className="title">Todo Input</h2>
          <TodoInput addItem={this.addItem} />
        </div>
        <div className="list__container">
          <h2 className="title">Todo List</h2>
          <TodoList
            items={this.state.items}
            deleteItem={this.deleteItem}
            clearItems={this.clearItems}
          />
        </div>
      </main>
    );
  }
}
