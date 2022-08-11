import { ExpenseItem } from "./ExpenseItem";

import "./Expenses.css";

export const Expenses = ({ expenses }) => (
  <div className="expenses">
    {
      expenses.map(expense => (
        <ExpenseItem 
          title={expense.title} 
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }
  </div>
);