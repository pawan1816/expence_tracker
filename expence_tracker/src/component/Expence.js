import './Expence.css';
import ExpenseDate from './ExpenseDate';
function Expence(props){
    
    return (
        <div className='expence-item'>
            <ExpenseDate date={props.date} />
            <div className='expence-item__description'>
                <h2>{ props.title }</h2>
                <div className='expence-item__price'>${ props.amount }</div>
            </div>
        </div>
    );
}
export default Expence;