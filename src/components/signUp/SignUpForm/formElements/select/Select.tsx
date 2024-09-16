import { useEffect, useRef, useState } from 'react';
import '../formContainer.css';
import './select.css';
import Option from './option/Option';

type Props = {
    id: string;
    initialPack: string;
    inicialPrice: string;
}

interface SelectedPackInterf {
    pack: string;
    price: string;
}

const Select: React.FC<Props> = ({ id, initialPack, inicialPrice }) => {
    const select = useRef<HTMLDivElement>(null);
    const selection = useRef<HTMLDivElement>(null);
    const subMenu = useRef<HTMLDivElement>(null);

    const [submenuVisibility, setSubmenuVisibility] = useState(false);

    const [selectedPack, setSelectedPack] = useState<SelectedPackInterf>({
        pack: initialPack,
        price: inicialPrice
    });

    const { pack, price } = selectedPack;

    const [optionChecked,setOptionChecked] = useState({
        basicChecked: false,
        proChecked: false,
        ultimateChecked: false
    });

    const{basicChecked,proChecked,ultimateChecked} = optionChecked; 
    

    useEffect(() => {
        if (subMenu.current) {
            subMenu.current.style.display = submenuVisibility ? 'flex' : 'none';
        }
    }, [submenuVisibility]);

    const handleOptionClick = (newPackValue: string, newPriceValue: string) => {
        setOptionChecked({
            basicChecked: false,
            proChecked: false,
            ultimateChecked: false
        });

        setOptionChecked((optionChecked) => ({
            ...optionChecked,
            [`${id}Checked`]: true,
        }));


        setSelectedPack({pack: newPackValue,price: newPriceValue});
    };

    useEffect(() => {
        const currentSelect = select.current;
        const showSubmenu = () => {
            setSubmenuVisibility(true);
            changeArrow();
        };

        const hideSubmenu = () => {
            setSubmenuVisibility(false);
            changeArrow();
        };

        const changeArrow = () => {
            if (selection.current) {
                selection.current.className == 'arrowDown' ? selection.current.className = 'arrowUp' : selection.current.className = 'arrowDown';
            }
        }

        if (currentSelect) {
            currentSelect.addEventListener('mouseenter', showSubmenu);
            currentSelect.addEventListener('mouseleave', hideSubmenu);
        }

        return () => {
            if (currentSelect) {
                currentSelect.removeEventListener('mouseenter', showSubmenu);
                currentSelect.removeEventListener('mouseleave', hideSubmenu);
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
                        <Option id="basic" checked={basicChecked} pack="Basic Pack" price="Free" onClickButton={handleOptionClick}/>
                        <Option id="pro" checked={proChecked} pack="Pro Pack" price="$9.99" onClickButton={handleOptionClick}/>
                        <Option id="ultimate" checked={ultimateChecked} pack="Ultimate Pack" price="$19.99" onClickButton={handleOptionClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Select;