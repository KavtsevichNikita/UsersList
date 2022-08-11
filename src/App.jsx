import React, { useState } from 'react'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
function App() {

  const DUMY_EXPENSES = [
    { id: 1, title: "Car Insurance", amount: 294.67, date: new Date(2019, 2, 28) },
    { id: 2, title: "Shopping", amount: 40, date: new Date(2019, 1, 24) },
    { id: 3, title: "House", amount: 470, date: new Date(2022, 3, 18) },
    { id: 4, title: "Laptop", amount: 2000, date: new Date(2021, 5, 28) }
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
