import { useState } from "react";
import { ExpensesFilter } from "./ExpensesFilter";
import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";

import "./Expenses.css";

export const Expenses = ({ items }) => {
  const [ selectedYear, setSelectedYear ] = useState('2021');

  const saveSelectedYear = ({ year }) => {
    setSelectedYear(year);
  };

  const filteredItems = items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectedYearChange={saveSelectedYear} selected={selectedYear}/>
      {filteredItems.length === 0 && <p>No expenses found!</p>}
      {filteredItems.length > 0 && (
        filteredItems.map(expense => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};