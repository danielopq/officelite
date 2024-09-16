import { useEffect, useState } from 'react';
import '../formContainer.css';
import './textField.css'

type Props = {
    id: string;
    placeholder: string;
    error?: boolean;
    value: string;
    onChange: (id: string, value: string) => void;
}

const TextField: React.FC<Props> = ({ id, placeholder, value, error = false, onChange }) => {

    const [contSkin, setContSkin] = useState('formContainer');
    const [tfSkin, setTfSkin] = useState('signUpTextfield');

    useEffect(() => {
        setContSkin(error ? 'formContainer error' : 'formContainer');
        setTfSkin(error ? 'signUpTextfield textFieldError' : 'signUpTextfield');
    }, [error])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.id,e.target.value);
        }
    };

    return (
        <div className={contSkin}>
            <input id={id} name={id} type="text" placeholder={placeholder} value={value} className={tfSkin} onChange={handleInputChange} ></input>
        </div>
    )
}

export default TextField;