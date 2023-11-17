import './Expence.css';
function Expence(){
    return (
        <div className='expence-item'>
            <div>March 12th 2021</div>
            <div className='expence-item__description'>
                <h2>Car Insurance</h2>
                <div className='expence-item__price'>$200</div>
            </div>
        </div>
    );
}
export default Expence;