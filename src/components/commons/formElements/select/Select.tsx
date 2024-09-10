import '../formContainer.css';
import './select.css';


type Props = {
    id: string;
    children: React.ReactNode;
}

const Select: React.FC<Props> = ({ id, children }) => {
    return (
        <div className='formContainer'>
            <div id={id} className='select'>
                <div id="selectHeader">
                    <p id="selectedValue"  className='arrowDown'><span className="pack">Basic Pack </span><span className="price">Free</span></p>
                </div>
                <div id="selectSubmenu">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Select;