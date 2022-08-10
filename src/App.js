import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // In the past we could not write directly to the JSX we had to import React component like code line one, Behind the scene, the JSX code snippet that's turning to react component it that can be write instead of the JSX at the moment . So the below code block that we can see which is pure react object to return component

  // It does same functionaltilly as much as JSX.
  // Meanwhile, it's hard to read and a bit more cumbersome rather than JSX
  // In modern React project we don't have to add React component explicitly , so we can omit it from line code 1;
  // Eventually, Under the hood JSX's goint to return this transforrmed somethink like this code block.
  // return React.createElement(
  //   "div",
  //   {}, // It could have filled with attributes or props but it doesnt has any.So this is empty object.
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
