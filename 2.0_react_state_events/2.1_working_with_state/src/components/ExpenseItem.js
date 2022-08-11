import { useState } from 'react';

import { Card } from './Card';
import { ExpenseDate } from './ExpenseDate';

import "./ExpenseItem.css";

export const ExpenseItem = ({ initialTitle, amount, date }) => {
  const [title, setTitle] = useState(initialTitle);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};