import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";

import "./Expenses.css";

export const Expenses = ({ items }) => (
  <Card className="expenses">
    {
      items.map(expense => (
        <ExpenseItem 
          title={expense.title} 
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }
  </Card>
);