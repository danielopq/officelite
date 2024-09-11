import { useEffect, useRef, useState } from 'react';
import '../formContainer.css';
import './select.css';


type Props = {
    id: string;
    children: React.ReactNode;
}

const Select: React.FC<Props> = ({ id, children }) => {
    const select = useRef<HTMLDivElement>(null);
    const selection = useRef<HTMLDivElement>(null);
    const subMenu = useRef<HTMLDivElement>(null);

    const [submenuVisibility, setSubmenuVisibility] = useState(false);

    useEffect(() => {
        if (subMenu.current) {
            subMenu.current.style.display = submenuVisibility ? 'flex' : 'none';
        }
    }, [submenuVisibility]);

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
                        <span className="pack">Basic Pack </span>
                        <span className="price">Free</span>
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