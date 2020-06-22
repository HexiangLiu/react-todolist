import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

import './TodoInput.scss';

export default class TodoInput extends Component {
  state = { value: '' };

  handleInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="input-box">
        <form className="input__field">
          <i className="input__icon fas fa-book"></i>
          <input
            type="text"
            placeholder="Add A Todo Item"
            value={this.state.value}
            onChange={this.handleInput}
          />
        </form>

        <button
          className="btn btn--blue"
          onClick={() => {
            this.props.addItem({ content: this.state.value, id: uuidv1() });
            this.setState({ value: '' });
          }}
        >
          add item
        </button>
      </div>
    );
  }
}
