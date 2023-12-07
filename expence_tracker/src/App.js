import React from 'react';
import Exp from "./component/Expenses/Exp";

import NewExpense from './component/NewExpenses/NewExpense';
function App(){
  let expenses =[
    {
      id:'e1',
      title: 'scool fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id:'e2',
      title: 'books',
      amount:230,
      date: new Date(2021, 12, 11)
    },
    {
      id:'e2',
      title: 'house rant',
      amount:500,
      date: new Date(2021, 3, 2)
    },
    {
      id:'e1',
      title: 'food',
      amount:530,
      date: new Date(2023, 2, 2)
    }
  ];
  return (
    <div>
        <NewExpense/>
        <Exp item = {expenses} />
    </div> 
  );
}
export default App;