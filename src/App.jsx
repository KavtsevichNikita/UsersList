import React from 'react'
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    { id: 1, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 2, title: "Shopping", amount: 400, date: new Date(2020, 2, 24) },
    { id: 3, title: "House", amount: 47, date: new Date(2022, 2, 18) },
    { id: 4, title: "Gas", amount: 20, date: new Date(2021, 2, 28) }
  ];

  return (
    <div>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
