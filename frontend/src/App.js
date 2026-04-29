import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ChartComponent from "./components/ChartComponent";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Replace with your live Render backend URL
  const BASE_URL = "https://finance-tracker-bkqo.onrender.com";

  
  const fetchExpenses = async () => {
    const res = await axios.get(`${BASE_URL}/api/expenses`);
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    await axios.post(`${BASE_URL}/api/expenses`, expense);
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await axios.delete(`${BASE_URL}/api/expenses/${id}`);
    fetchExpenses();
  };

  return (
    <div className="container">
      <h1>💰 Personal Finance Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      <ChartComponent expenses={expenses} />
    </div>
  );
};

export default App;
