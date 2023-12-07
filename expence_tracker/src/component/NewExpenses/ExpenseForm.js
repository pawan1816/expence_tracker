import React,  { useState } from "react";
 
import './ExpenseForm.css';

const ExpenseForm = ()=>{
     const [enteredTitle,setEnteredTitle]=useState("");
     const [enteredAmount,setEnteredAmount]=useState("");
     const [enteredDate,setEnteredDate]=useState("");

     const titleChangeHandler =(event)=>{
          setEnteredTitle(event.target.value);
     };
     const amountChangeHandler =(event)=>{
          setEnteredAmount(event.target.value);
     };
     const dateChangeHandler =(event)=>{
          setEnteredDate(event.target.value);
     };

     const sumitHandler =(event)=>{
          event.preventDefault();
          const expenseDate={
               title:enteredTitle,
               amount:enteredAmount,
               date:new Date(enteredDate)
               
          }
          
          console.log(expenseDate);
          setEnteredAmount('');
          setEnteredTitle('');
          setEnteredDate('');
     };
     return(
        <form onSubmit={sumitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                     <level>Title</level>
                     <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense_control">
                     <level>Amounts</level>
                     <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense_control">
                     <level>Date</level>
                     <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense_actions">
               <button type="submit">Add Expense</button>
            </div>
        </form>
     );
}
export default ExpenseForm;