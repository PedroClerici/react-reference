import { useState } from "react";
import { ExpensesFilter } from "./ExpensesFilter";
import { Card } from "../UI/Card";
import { ExpenseList } from "./ExpenseList";

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
      <ExpenseList items={filteredItems}/>
    </Card>
  );
};