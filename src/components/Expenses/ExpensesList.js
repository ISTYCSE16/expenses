import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    let expensesContent = <p>No expenses found.</p>

    if (props.items.length > 0) {
        expensesContent = props.items.map((expense) => (
          <ExpenseItem
            key={expense.id} // Needed, bug happens otherwise
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    
    return <ul className='expenses-list'>
        
    </ul>
}

export default ExpensesList;