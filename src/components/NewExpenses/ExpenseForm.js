import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''	
    // })

    // Below is a single Change Handler that uses multiple instances of use states
    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier == 'title') {
    //         setEnteredTitle(value);
    //     } else if (identifier == 'date') {
    //         setEnteredDate(value);
    //     } else {
    //         setEnteredAmount(value);
    //     }
    // }
    // Below are codes that use a single useState instance but multiple change Handler  
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return ({...prevState, enteredTitle: event.target.value});
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,	
        // });
        // setUserInput((prevState) => {
        //     return ({...prevState, enteredAmount: event.target.value});
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // this shall not be used as React schedules the Dynamic State Update, this may update a different state
        // setUserInput({ 
        //     ...userInput,
        //     enteredDate: event.target.value,	
        // });
        /** This Approach on the other hand will be able to update the state of exactly the component you are calling from */
        // setUserInput((prevState) => {
        //     return ({...prevState, enteredDate: event.target.value});
        // });
    }

    const submitHandler = (event) => {
        // Submit's default behaviour is to send a request to the server
        // This is not what we want
        // We need to do our task within JavaScript
        // So we use a JS function that prevents the default behavior
        event.preventDefault(); 

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        // to execute the custom event handler in NewExpense file
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');    
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                {/* Single Change Handler, multiple useState instance */}
                {/* <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)}/>        */}
                {/* Multiple Change Handler, single useState instance */}
                <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                {/* Single Change Handler, multiple useState instance */}
                {/* <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)}/>        */}
                {/* Multiple Change Handler, single useState instance */}
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>

            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                {/* Single Change Handler, multiple useState instance */}
                {/* <input type="date" min="2019-01-01" max="2022-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)}/>        */}
                {/* Multiple Change Handler, single useState instance */}
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>

            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};
export default ExpenseForm;