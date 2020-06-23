import React, { Component } from 'react';

import './TodoInput.scss';

export default class TodoInput extends Component {
  render() {
    const { handleInput, addItem, editItem, item } = this.props;
    return (
      <div className="input-box">
        <form
          className="input__field"
          onSubmit={(e) => {
            e.preventDefault();
            addItem();
          }}
        >
          <div className="icon-box">
            <i className="far fa-flushed input__icon input__icon--1"></i>
            <i className="far fa-grin-alt input__icon input__icon--2"></i>
          </div>

          <input
            type="text"
            placeholder="Add A Todo Item"
            value={item}
            onChange={handleInput}
          />
        </form>

        <button
          className={editItem ? 'btn btn--green' : 'btn btn--blue'}
          onClick={addItem}
          disabled={item ? false : true}
        >
          {editItem ? 'edit item' : 'add item'}
        </button>
      </div>
    );
  }
}
