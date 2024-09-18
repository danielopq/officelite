// Simulates a select HTML element with the available packs.

import { useEffect, useRef, useState } from 'react';
import '../formContainer.css';
import './select.css';
import Option from './option/Option';

type Props = {
    id: string; // Select element ID.
    initialPack: string; // Initially selected pack.
    inicialPrice: string; // Price of the initially selected pack.
}

interface SelectedPackInterf {
    pack: string; // Name of the selected pack.
    price: string; // Price of the selected pack.
}

const Select: React.FC<Props> = ({ id, initialPack='Basic Pack', inicialPrice='Free' }) => {

    const select = useRef<HTMLDivElement>(null); // Reference to the entire select element.
    const selection = useRef<HTMLDivElement>(null); // Reference to the selected option, displayed in the header.
    const subMenu = useRef<HTMLDivElement>(null); // Reference to the submenu containing the pack options.

    const [subMenuVisibility, setSubMenuVisibility] = useState(false); // Tracks whether the submenu is visible.

    // Stores the information (pack name and price) of the selected pack.
    const [selectedPack, setSelectedPack] = useState<SelectedPackInterf>({
        pack: initialPack,
        price: inicialPrice
    });

    const { pack, price } = selectedPack;

    // Tracks which pack option is currently selected.
    const [optionChecked, setOptionChecked] = useState({
        basicChecked: true,
        proChecked: false,
        ultimateChecked: false
    });

    const { basicChecked, proChecked, ultimateChecked } = optionChecked;

    // Toggles the visibility of the submenu by changing its display style.
    useEffect(() => {
        if (subMenu.current) {
            subMenu.current.style.display = subMenuVisibility ? 'flex' : 'none';
        }
    }, [subMenuVisibility]);

    /**
     * Handles the user clicking on a pack option.
     * Updates the selected pack and marks the corresponding option as checked.
     * 
     * @param {string} selectedPackName - The name of the selected pack.
     * @param {string} selectedPackPrice - The price of the selected pack.
     * @param {string} selectId - The ID of the selected option.
     */
    const handleOptionClick = (selectedPackName: string, selectedPackPrice: string, selectId: string) => {
        const optionLabel: string = selectId + 'Checked';

        setOptionChecked({
            basicChecked: false,
            proChecked: false,
            ultimateChecked: false
        });

        setOptionChecked((prevChecked) => ({
            ...prevChecked,
            [optionLabel]: true,
        }));

        setSelectedPack({ pack: selectedPackName, price: selectedPackPrice });
    };

    /**
     * Toggles the arrow direction (up or down) based on the submenu visibility.
     */
    const changeArrow = () => {
        if (selection.current) {
            selection.current.className === 'arrowDown' ? selection.current.className = 'arrowUp': selection.current.className = 'arrowDown';
        }
    }

    /**
     * Toggles the submenu visibility.
     */
    const showSubmenu = () => {
        setSubMenuVisibility(prevVisibility => !prevVisibility);
        changeArrow();
    };

    // Adds event listeners to show or hide the submenu on mouse events.
    useEffect(() => {
        const currentSelect = select.current;

        if (currentSelect) {
            currentSelect.addEventListener('click', showSubmenu);
        }

        return () => {
            if (currentSelect) {
                currentSelect.removeEventListener('mouseenter', showSubmenu);
            }
        };
    }, []);

    return (
        <div className='formContainer'>
            <div ref={select} className='select'>
                <div className="selectHeader">
                    <p id={id} ref={selection} className='arrowDown'>
                        <span className="pack">{pack}</span>
                        <span className="price"> {price}</span>
                    </p>
                </div>
                <div ref={subMenu} className="submenu">
                    <div className="submenuFrame">
                        <Option id="basic" checked={basicChecked} pack="Basic Pack" price="Free" onClickButton={handleOptionClick} />
                        <Option id="pro" checked={proChecked} pack="Pro Pack" price="$9.99" onClickButton={handleOptionClick} />
                        <Option id="ultimate" checked={ultimateChecked} pack="Ultimate Pack" price="$19.99" onClickButton={handleOptionClick} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Select;
