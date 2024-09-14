import './signUpForm.css';
import { useState } from 'react';
import TextField from '../../commons/formElements/textField/Textfield';
import Select from '../../commons/formElements/select/Select';
import Option from '../../commons/formElements/select/option/Option';
import DefaultButton from '../../commons/defaultButton/DefaultButton';
import {validateFilled, justLetters, validateEmail, validatePhone} from '../../../utils/validalidateForm';

const SignUpForm = () => {

    const [inputValue, setInputValue] = useState({
        nameValue: '',
        emailValue: '',
        phoneValue: '',
        companyValue: '',
    });

    const { nameValue, emailValue, phoneValue, companyValue } = inputValue || {};

    const [errors, setErrors] = useState({
        validName: false,
        validEmail: false,
        validPhone: false,
        validCompany: false,
    });

    const { validName, validEmail, validPhone, validCompany } = errors || {};

    const handleInputChange = (id: string, value: string) => {

        setInputValue((inputValue) => ({
            ...inputValue,
            [`${id}Value`]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        validateForm();
    }

    /**
     * Validates whether all of the information in the form has the correct format.
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
                <Select id='plan' initialPack='Basic Pack' inicialPrice='Free'>
                    <Option id="free" checked={true} pack="Basic Pack" price="Free" />
                    <Option id="pro" checked={false} pack="Pro Pack" price="$9.99" />
                    <Option id="ultimate" checked={false} pack="Ultimate Pack" price="$19.99" />
                </Select>
                <TextField id='phone' error={validPhone} value={phoneValue} placeholder="Phone Number" onChange={handleInputChange} />
                <TextField id='company' error={validCompany} value={companyValue} placeholder="Company" onChange={handleInputChange} />
            </form>
            <DefaultButton buttonType='getOn' onButtonClick={validateForm}>Get on the list</DefaultButton>
        </div>
    )
}

export default SignUpForm;