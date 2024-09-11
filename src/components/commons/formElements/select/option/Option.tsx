import { useEffect, useState } from 'react';
import './option.css';
import '../select.css'
type Props = {
    id:string;
    checked:boolean
    pack:string;
    price:string;
}

const Option: React.FC<Props> = ({id,checked,pack,price})=>{
    
    const [optionChecked, setOptionChecked] = useState("option");

    useEffect(() => {
        checked ? setOptionChecked("option checked") : setOptionChecked("option");
    }, [checked]);

    return(
        <div id={id} className={optionChecked}><span className="pack">{pack} </span><span className="price">{price}</span></div>
    )
}
export default Option;