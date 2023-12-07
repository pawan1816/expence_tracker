import React,  { useState } from "react";
 
import './ExpenseForm.css';

const ExpenseForm = ()=>{
     const [enteredTitle,setEnteredTitle]=useState("");
     const [enteredAmount,setEnteredAmount]=useState("");
     const [enteredDate,setEnteredDate]=useState("");

     const titleChangeHandler =(event)=>{
          console.log(event.target.value);
     };
     const amountChangeHandler =(event)=>{};
     const dateChangeHandler =(event)=>{};
     return(
        <form>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                     <level>Title</level>
                     <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense_control">
                     <level>Amounts</level>
                     <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense_control">
                     <level>Date</level>
                     <input type="date" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense_actions">
               <button type="submit">Add Expense</button>
            </div>
        </form>
     );
}
export default ExpenseForm;