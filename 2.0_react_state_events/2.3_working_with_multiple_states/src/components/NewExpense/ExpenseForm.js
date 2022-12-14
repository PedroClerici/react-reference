import { useState } from "react";

import "./ExpenseForm.css";

export const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')
  // or
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = ({ target }) => {
    // setEnteredTitle(target.value);
    setUserInput({
      ...userInput,
      enteredDate: target.value,
    });
  };

  const amountChangeHandler = ({ target }) => {
    // setEnteredAmount(target.value);
    setUserInput({
      ...userInput,
      enteredAmount: target.value,
    });
  };

  const dateChangeHandler = ({ target }) => {
    // setEnteredDate(target.value);
    setUserInput({
      ...userInput,
      enteredDate: target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};