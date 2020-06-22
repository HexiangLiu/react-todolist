import React from 'react';

import './TodoItem.scss';

export default function TodoItem(props) {
  return (
    <div className="item-box">
      <p className="item__text">{props.item.content}</p>
      <div>
        <i className="fas fa-pencil-alt item__icon item__icon--edit"></i>
        <i
          onClick={() => props.deleteItem(props.item.id)}
          className="fas fa-trash-alt  item__icon item__icon--delete"
        ></i>
      </div>
    </div>
  );
}
