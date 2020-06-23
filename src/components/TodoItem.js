import React from 'react';

import './TodoItem.scss';

export default function TodoItem({ deleteItem, editItem, item }) {
  return (
    <div className="item-box">
      <p className="item__text">{item.title}</p>
      <div>
        <i
          className="fas fa-pencil-alt item__icon item__icon--edit"
          onClick={() => editItem(item.id)}
        ></i>
        <i
          onClick={() => deleteItem(item.id)}
          className="fas fa-trash-alt  item__icon item__icon--delete"
        ></i>
      </div>
    </div>
  );
}
