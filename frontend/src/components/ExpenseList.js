import React from "react";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div>
      <h2>📋 Expense List</h2>
      <ul>
        {expenses.map((exp) => (
          <li key={exp._id}>
            {exp.title} - ₹{exp.amount} ({exp.category})
            <button onClick={() => onDelete(exp._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
