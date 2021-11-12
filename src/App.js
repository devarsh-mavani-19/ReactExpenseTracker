import logo from './logo.svg'
import './App.css'
import ExpenseItem from './components/expenses/ExpenseItem'
import Expenses from './components/expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense'
import React, { useState } from 'react'

function App () {
  const [expenses, setExpenses] = useState([])

  const addExpenseHandler = expense => {
    console.log(expense)
    setExpenses(prev => [expense, ...prev])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}
export default App
