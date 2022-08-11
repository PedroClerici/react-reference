import { Card } from "./Card";
import { ExpenseItem } from "./ExpenseItem";

import "./Expenses.css";

export const Expenses = ({ items }) => (
  <Card className="expenses">
    {
      items.map(expense => (
        <ExpenseItem 
          initialTitle={expense.title} 
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }
  </Card>
);