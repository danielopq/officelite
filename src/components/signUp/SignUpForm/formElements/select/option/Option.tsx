// Represents an HTML option element used within a Select component.

import { useEffect, useState } from 'react';
import './option.css';

type Props = {
    id: string; // Unique identifier for the option.
    checked: boolean; // Indicates whether the option is currently checked.
    pack: string; // Name of the pack.
    price: string; // Price of the pack.
    onClickButton: (pack: string, price: string, id: string) => void; //callback function triggered on click, providing the pack's name, price, and id.
}

const Option: React.FC<Props> = ({ id, checked, pack, price, onClickButton }) => {

    const [optionChecked, setOptionChecked] = useState("option"); // State to manage the CSS class based on the checked status of the option.

    useEffect(() => {         // Update the CSS class based on whether the option is checked.
        setOptionChecked(checked ? "option checked" : "option");
    }, [checked]);

    /**
     * Handles the click event by calling the optional onClickButton callback with the pack's name, price, and id.
     */
    const handleClick = () => {
        if (onClickButton) {
            onClickButton(pack, price, id);
        }
    };

    return (
        <div id={id} className={optionChecked} onClick={handleClick}>
            <div className='optionBt'>
                <span className="optionPack">{pack}</span>
                <span className="optionPrice"> {price}</span>
            </div>
        </div>
    )
}

export default Option;