import React, { Component } from 'react';

import './TodoList.scss';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <div className="list-box">
        {this.props.items.map((item) => {
          return (
            <TodoItem
              item={item}
              key={item.id}
              deleteItem={this.props.deleteItem}
            />
          );
        })}
        <div>
          <button
            type="button"
            className="btn btn--red"
            onClick={() => this.props.clearItems()}
          >
            Clear List
          </button>
        </div>
      </div>
    );
  }
}
