import './Expences.css';

import Expence from "./Expence"
function Exp(props){
    return (
            <div>
                { props.item.map((a)=>(
                //<p>hi</p>
                   <Expence date={a.date} title={a.title} amount={a.amount}/>
                ))}
            {/* <Expence
                date={ props.item[0].date } 
                title={ props.item[0].title } 
                amount={ props.item[0].amount }/>
            <Expence 
               date={ props.item[1].date } 
               title={ props.item[1].title } 
               amount={ props.item[1].amount }/>
            <Expence 
               date={ props.itemprops.item[2].date } 
               title={ props.item[2].title } 
               amount={ props.item[2].amount }/>
            <Expence 
              date={ props.item[3].date } 
              title={ props.item[3].title } 
              amount={ props.item[3].amount }/> */}
        </div>
    );
}
export default Exp;