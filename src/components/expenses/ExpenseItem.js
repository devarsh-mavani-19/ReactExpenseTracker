import Card from '../ui/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import React, { useState } from 'react'

function ExpenseItem (props) {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    alert('clicked')
    setTitle('updated')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
