// Includes all form elements for the sign-up process.

import './signUpForm.css';
import { useState } from 'react';
import TextField from './formElements/textField/Textfield';
import Select from './formElements/select/Select';
import DefaultButton from '../../commons/defaultButton/DefaultButton';
import {validateFilled, justLetters, validateEmail, validatePhone} from '../../../utils/validalidateForm';

const SignUpForm = () => {
    // Stores the values of all text fields.
    const [inputValue, setInputValue] = useState({
        nameValue: '',
        emailValue: '',
        phoneValue: '',
        companyValue: '',
    });

    const { nameValue, emailValue, phoneValue, companyValue } = inputValue || {};

    // Tracks possible validation errors for the text fields
    const [errors, setErrors] = useState({
        validName: false,
        validEmail: false,
        validPhone: false,
        validCompany: false,
    });

    const { validName, validEmail, validPhone, validCompany } = errors || {};

    /**
     * Updates the value of a text field when modified by the user. 
     * @param {string} id - Text field ID.
     * @param {string} value - New value for the text field.
     */
    const handleInputChange = (id: string, value: string) => {
        setInputValue((inputValue) => ({
            ...inputValue,
            [`${id}Value`]: value,
        }));
    };

    /**
     * Handles form submission and triggers validation.
     * @param {React.FormEvent} e - Form event
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        validateForm();
    }

    /**
     *  Validates whether the form data is correctly formatted.
     */
    const validateForm = () => {
        const form = document.getElementById('getStartedForm') as HTMLFormElement;
        let foundErrors = {
            validName: false,
            validEmail: false,
            validPhone: false,
            validCompany: false,
        };

        foundErrors.validName = !(validateFilled(nameValue) || justLetters(nameValue));
        foundErrors.validEmail = !validateEmail(emailValue);
        foundErrors.validPhone = !validatePhone(phoneValue);
        foundErrors.validCompany = !validateFilled(companyValue);
        console.table(foundErrors)
        setErrors(foundErrors);
        
        if(foundErrors.validName == false && foundErrors.validEmail == false && foundErrors.validPhone == false && foundErrors.validCompany == false){
            form.submit();  
        }
    }

    return (
        <div id="signUpForm">
            <form id="getStartedForm" onSubmit={handleSubmit}>
                <TextField id='name' error={validName} value={nameValue} placeholder="Name" onChange={handleInputChange} />
                <TextField id='email' error={validEmail} value={emailValue} placeholder="Email Address" onChange={handleInputChange} />
                <Select id='plan' initialPack='Basic Pack' inicialPrice='Free'/>
                <TextField id='phone' error={validPhone} value={phoneValue} placeholder="Phone Number" onChange={handleInputChange} />
                <TextField id='company' error={validCompany} value={companyValue} placeholder="Company" onChange={handleInputChange} />
            </form>
            <DefaultButton buttonType='getOn' onButtonClick={validateForm}>Get on the list</DefaultButton>
        </div>
    )
}

export default SignUpForm;