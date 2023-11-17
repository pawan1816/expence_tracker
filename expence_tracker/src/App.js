import Expence from "./component/Expence";

function App(){
  let expenses =[
    {
      id:'e1',
      title: 'scool fee',
      amount:250,
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
        <h2>Let's get started</h2>
        <Expence 
            date={expenses[0].date} 
            title={expenses[0].title} 
            amount={expenses[0].amount}>
        </Expence>
        <Expence 
            date={expenses[1].date} 
            title={expenses[1].title} 
            amount={expenses[1].amount}>
        </Expence>
        <Expence 
            date={expenses[2].date} 
            title={expenses[2].title} 
            amount={expenses[2].amount}>
        </Expence>
        <Expence 
            date={expenses[3].date} 
            title={expenses[3].title} 
            amount={expenses[3].amount}>
        </Expence>
    </div>
    
  );
}
export default App;