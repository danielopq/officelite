// Simulates an HTML option element included in a Select.

import { useEffect, useState } from 'react';
import './option.css';

type Props = {
    id: string; //Option id.
    checked: boolean //Indicates whether the option is checked.
    pack: string; //Pack name.
    price: string; //Pack price.
    onClickButton?: (pack: string, price: string) => void; //"onClick action. Returns the pack's name and its price
}

const Option: React.FC<Props> = ({ id, checked, pack, price, onClickButton }) => {

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

    return (
        <div id={id} className={optionChecked} onClick={handleClick}>
            <div className='optionBt'>
                <span className="optionPack">{pack}</span><span className="optionPrice"> {price}</span>
            </div>
        </div>
    )
}
export default Option;