import { useState } from "react";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesFilter } from "./ExpensesFilter";
import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";

import "./Expenses.css";

export const Expenses = ({ items }) => {
  const [ selectedYear, setSelectedYear ] = useState('2021');

  const saveSelectedYear = ({ year }) => {
    setSelectedYear(year);
  };

  const filteredItems = items.filter(expense => 
    expense.date
      .getFullYear()
      .toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectedYearChange={saveSelectedYear} selected={selectedYear}/>
      <ExpensesChart expenses={filteredItems} />
      {
        filteredItems.map(expense => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </Card>
  );
};