import { useEffect, useRef, useState } from 'react';
import '../formContainer.css';
import './select.css';
import Option from './option/Option';



type Props = {
    id: string;
    children: React.ReactNode;
    initialPack:string;
    inicialPrice:string;
}

interface SelectedPackInterf {
    pack: string;
    price: string;
}

const Select: React.FC<Props> = ({ id, children,initialPack,inicialPrice  }) => {
    const select = useRef<HTMLDivElement>(null);
    const selection = useRef<HTMLDivElement>(null);
    const subMenu = useRef<HTMLDivElement>(null);

    const [submenuVisibility, setSubmenuVisibility] = useState(false);

    const [selectedPack, setSelectedPack] = useState<SelectedPackInterf>({
        pack: initialPack,
        price: inicialPrice
    });

    const {pack,price} = selectedPack;

    useEffect(() => {
        if (subMenu.current) {
            subMenu.current.style.display = submenuVisibility ? 'flex' : 'none';
        }
    }, [submenuVisibility]);

    const handleOptionClick = (newPackValue: string, newPriceValue: string) => {
        setSelectedPack({
            pack: newPackValue,
            price: newPriceValue
        }
        );
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
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Select;