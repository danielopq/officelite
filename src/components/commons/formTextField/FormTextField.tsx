import React from 'react';
import './formTextField.css';

type TextFieldProps = {
    id: string;
    children: string;
}

const FormTextField: React.FC<TextFieldProps> = ({ id,children }) => {
    return (
        <div id={id} className='formTextField'>
            <input type="text" placeholder={children}></input>
        </div>
    )
}

export default FormTextField;