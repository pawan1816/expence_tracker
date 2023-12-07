import React from "react";
 
import './ExpenseForm.css';

const ExpenseForm = ()=>{
     return(
        <form>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                     <level>Title</level>
                     <input type="text"/>
                </div>
                <div className="new-expense_control">
                     <level>Amounts</level>
                     <input type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense_control">
                     <level>Date</level>
                     <input type="date"/>
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
     );
}
export default ExpenseForm;