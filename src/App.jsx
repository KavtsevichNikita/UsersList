import React, { useState } from 'react'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
function App() {

  const DUMY_EXPENSES = [
    { id: 1, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 2, title: "Shopping", amount: 400, date: new Date(2020, 1, 24) },
    { id: 3, title: "House", amount: 47, date: new Date(2022, 3, 18) },
    { id: 4, title: "Gas", amount: 20, date: new Date(2021, 5, 28) }
  ];

  const [expenses, setExpenses] = useState(DUMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
