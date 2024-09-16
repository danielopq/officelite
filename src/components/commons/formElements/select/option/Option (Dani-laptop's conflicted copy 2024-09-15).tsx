import { useEffect, useState } from 'react';
import './option.css';
import '../select.css'
type Props = {
    id:string;
    checked:boolean
    pack:string;
    price:string;
    onClickButton?: (pack:string,price:string)=>void;
}

const Option: React.FC<Props> = ({id,checked,pack,price,onClickButton})=>{
    
    const [optionChecked, setOptionChecked] = useState("option");

    useEffect(() => {
        checked ? setOptionChecked("option checked") : setOptionChecked("option");
    }, [checked]);

    /**
     * Call the function with the pack and price values.
     */
    const handleClick = () => {
        if (onClickButton) {
            onClickButton(pack, price);
        }
    };

    return(
        <div id={id} className={optionChecked}><span className="pack">{pack}</span><span className="price" onClick={handleClick}> {price}</span></div>
    )
}
export default Option;