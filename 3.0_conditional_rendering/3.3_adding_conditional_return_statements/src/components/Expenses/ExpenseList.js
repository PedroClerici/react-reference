import { ExpenseItem } from "./ExpenseItem";

import "./ExpenseList.css";

export const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    items.map(expense => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />
    ))
  );
};