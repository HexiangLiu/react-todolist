import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

//showing vs-code github setup
export default class App extends Component {
  state = { items: [], editItem: false, item: '', id: uuidv4() };

  handleInput = (e) => {
    this.setState({ item: e.target.value });
  };

  addItem = () => {
    this.setState({
      items: [
        ...this.state.items,
        { title: this.state.item, id: this.state.id },
      ],
      item: '',
      id: uuidv4(),
      editItem: this.state.editItem && false,
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

  editItem = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    const editState = !this.state.editItem;
    console.log(editState);
    this.setState({
      items: filteredItem,
      editItem: true,
      item: selectedItem.title,
      id: id,
    });
  };

  render() {
    return (
      <main className="main">
        <div className="input__container">
          <h2 className="title">Todo Input</h2>
          <TodoInput
            handleInput={this.handleInput}
            addItem={this.addItem}
            editItem={this.state.editItem}
            item={this.state.item}
          />
        </div>
        <div className="list__container">
          <h2 className="title">Todo List</h2>
          <TodoList
            items={this.state.items}
            deleteItem={this.deleteItem}
            clearItems={this.clearItems}
            editItem={this.editItem}
          />
        </div>
      </main>
    );
  }
}
