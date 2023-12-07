import React,{useState} from 'react';
import './Expence.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
function Expence(props){
    const [newtitle,setNewTitle]=useState("");
    const [title,setTitle]=useState(props.title);
    const clickHandler = () =>{
         setTitle(newtitle);
    }
    const changeHandler = (event) =>{
        setNewTitle(event.target.value);
    }
    return (
        <Card className='expence-item'>
            <ExpenseDate date={props.date} />
            <div className='expence-item__description'>
                <h2>{ title }</h2>
                <div className='expence-item__price'>${ props.amount }</div>
            </div>
            <input type="text" value={newtitle} onChange={changeHandler}/> 
            <button onClick={clickHandler}>Change</button>
        </Card>
    );
}
export default Expence;