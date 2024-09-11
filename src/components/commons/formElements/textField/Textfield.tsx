import { useEffect, useState } from 'react';
import '../formContainer.css';
import './textField.css'

type Props = {
    id: string;
    placeholder: string;
    error?: boolean;
}

const TextField: React.FC<Props> = ({ id, placeholder, error = false }) => {

    const [contSkin, setContSkin] = useState('formContainer');
    const [tfSkin, setTfSkin] = useState('signUpTextfield');

    useEffect(() => {
        setContSkin(error ? 'formContainer error' : 'formContainer');
        setTfSkin(error ? 'signUpTextfield textFieldError' : 'signUpTextfield');
    }, [error])

    return (
        <div className={contSkin}>
            <input id={id} name={id} type="text" placeholder={placeholder} className={tfSkin}></input>
        </div>
    )
}

export default TextField;