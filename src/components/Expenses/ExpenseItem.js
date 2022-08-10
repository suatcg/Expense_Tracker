import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = "294.67";

  // useState function returns an array that contains two element which are the first one value itselft that we gave as a parameter , other ones is function when we want to update it , thus that's going to trigger that function. So we can destcruce via array feature like below.
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React"); // That initialy call four times , because we use the ExpenseItem four times onto Expenses component , but when we click one of the buttons that we will going to see just only one console.log() call , due to react re-evalute only specific item which event has been occured.

  // function clickHandler() {
  //   setTitle("Updated!");
  //   console.log(title);
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={setTitle.bind(this, "sldkjf")}>Change Title</button> */}
        {/* <button
        onClick={() => {
          console.log("Clicked!");
        }}
      >
        Change Title
      </button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
