import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";

import "./NewExpense.css";

export const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {showForm &&
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler} 
          onCancel={() => setShowForm(false)}/>
      }
      {!showForm &&
        <button onClick={() => setShowForm(true)}>Add New Expense</button>
      }
    </div> 
  );
};