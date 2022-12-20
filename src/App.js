import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 11),
    },
    {
      title: "Car Insurance",
      amount: 194.12,
      date: new Date(2020, 8, 14),
    },
    {
      title: "Hospital",
      amount: 294.12,
      date: new Date(2020, 6, 30),
    },
    {
      title: "New TV",
      amount: 1294.12,
      date: new Date(2021, 6, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
