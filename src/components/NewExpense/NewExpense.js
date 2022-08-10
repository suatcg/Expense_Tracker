import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditting] = useState(false);
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
    setIsEditting(false);
  }

  const startEdittingHandler = () => {
    setIsEditting(true);
  };

  const stopEdittingHandler = () => {
    setIsEditting(false);
  };
  return (
    <div className="new-expense">
      {/* // It does not have be start with on sake of convetion of start with on
      that we typed with on keyword as well. */}
      {!isEditing && (
        <button onClick={startEdittingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdittingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
