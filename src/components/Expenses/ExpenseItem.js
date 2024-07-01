import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../../UI/Card';
import './ExpenseItem.css';
//useState() ==> Must not be used outside component function
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); 
  // Must only be used here, inside the component function
  // This will use a Default state, which must be provided for it to work. For this, props.title will be default.
  // It is a React Hook.
  // useState() always returns two things. The Value, and the Function that Can Update that Value
  // let title = props.title;
const clickHandler = () => {
    // useState() ==> Not even here, this is a nested function call.
    setTitle('Updated!');
    // Calling this function is important to ensure a Dynamic update to the value of the title.
    // The component function where this is called, has to be executed again, hence ExpenseItem gets called again
    // This is why setting the variable using setTitle is so important.

  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Click Here</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;