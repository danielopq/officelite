// Includes all form elements for the sign-up process.

import './signUpForm.css';
import { useState,useRef } from 'react';
import Confirmation from './confirmation/Confirmation';
import TextField from './formElements/textField/Textfield';
import Select from './formElements/select/Select';
import DefaultButton from '../../commons/defaultButton/DefaultButton';
import { validateForm } from '../../../utils/validateForm';


type SignUpFormProps = {
    selectedPack: string;
    selectedPackPrice: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ selectedPack="Basic Pack", selectedPackPrice="Free" }) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    // Stores the values of all text fields.
    const [inputValue, setInputValue] = useState({
        nameValue: '',
        emailValue: '',
        phoneValue: '',
        companyValue: '',
    });

    const { nameValue, emailValue, phoneValue, companyValue } = inputValue || {};

    // Tracks possible validation errors for the text fields.
    const [errors, setErrors] = useState({
        validName: false,
        validEmail: false,
        validPhone: false,
        validCompany: false,
    });

    const { validName, validEmail, validPhone, validCompany } = errors || {};

    // Tracks wether confirmation message is displayed.
    const [showConfirmation, setShowConfirmation] = useState(false);

    /**
     * Displays a confirmation message when the formRef is submitted.
     */
    const displayConfirmation = () => {
        setShowConfirmation(!showConfirmation);
        formRef.current?.submit();
    }

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
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const foundErrors = validateForm(nameValue, emailValue, phoneValue, companyValue);
        if (!foundErrors.validName && !foundErrors.validEmail && !foundErrors.validPhone && !foundErrors.validCompany) {
            displayConfirmation();
        }else{
            setErrors(foundErrors); 
        }
    }

    return (
        <>
            <Confirmation showConfirmation={showConfirmation} displayConfirmation={displayConfirmation} />
            <div id="signUpForm">
                <form id="getStartedForm" onSubmit={handleSubmit} ref={formRef}>
                    <TextField id='name' error={validName} value={nameValue} placeholder="Name" onChange={handleInputChange} />
                    <TextField id='email' error={validEmail} value={emailValue} placeholder="Email Address" onChange={handleInputChange} />
                    <Select id='plan' initialPack={selectedPack} inicialPrice={selectedPackPrice} />
                    <TextField id='phone' error={validPhone} value={phoneValue} placeholder="Phone Number" onChange={handleInputChange} />
                    <TextField id='company' error={validCompany} value={companyValue} placeholder="Company" onChange={handleInputChange} />
                    <DefaultButton buttonType='getOn'>Get on the list</DefaultButton>
                </form>
            </div>
        </>
    )
}

export default SignUpForm;