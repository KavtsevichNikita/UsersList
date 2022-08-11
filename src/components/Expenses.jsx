import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2022')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
    return (
    <div>
      
      <div className='expenses'>
          <ExpenseFilter selectedYear={filteredYear} onChangleFilter={filterChangeHandler}/>
          <ExpensesChart expenses={filteredExpenses}/>
          {filteredExpenses.length === 0 ? <p className='data'>Data not found</p> : 
          filteredExpenses.map(item => 
          <ExpenseItem
          key={item.id} 
          title={item.title} 
          amount={item.amount} 
          date={item.date}
          />)}
      </div>
    </div>
    );
}

export default Expenses
