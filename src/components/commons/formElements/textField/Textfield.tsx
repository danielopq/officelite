import { useEffect, useState } from 'react';
import '../formContainer.css';
import './textField.css'

type Props = {
    id: string;
    children: string;
    error: boolean;
}

const TextField: React.FC<Props> = ({ id, children, error = false }) => {

    const [contSkin, setContSkin] = useState('formContainer');
    const [tfSkin, setTfSkin] = useState('signUpTextfield');

    useEffect(() => {
        error ? setContSkin('formContainer error') : setContSkin('formContainer');
        error ? setTfSkin('signUpTextfield textFieldError') : setTfSkin('signUpTextfield');
    }, [error])

    return (
        <div className={contSkin}>
            <input id={id} name={id} type="text" placeholder={children} className={tfSkin}></input>
        </div>
    )
}

export default TextField;