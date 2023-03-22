import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddNewExpense(false);
  };
  const addNewExpenseHandler = () => {
    setAddNewExpense(true);
  };

  const stopEditingHandler = () => {
    setAddNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
