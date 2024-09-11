import './signUpForm.css';
import TextField from '../../commons/formElements/textField/Textfield';
import Select from '../../commons/formElements/select/Select';
import Option from '../../commons/formElements/select/option/Option';
import DefaultButton from '../../commons/defaultButton/DefaultButton';
import { useState } from 'react';

const SignUpForm = () => {

    const [errors, setErrors] = useState({
        validName: false,
        validEmail: false,
        validPhone: false,
        validCompany: false,
    });


    const validateForm = () =>{
        const foundErrors = {
            validName: true,
            validEmail: true,
            validPhone: true,
            validCompany: true,
        }

        setErrors(foundErrors );
    }

    return (
        <div id="signUpForm">
            <form id="getStartedForm">
                <TextField id='name' error={errors.validName} placeholder="Name"/>
                <TextField id='email' error={errors.validEmail} placeholder="Email Address"/>
                <Select id='plan'>
                    <Option id="free" checked={true} pack="Basic Pack" price="Free" />
                    <Option id="pro" checked={false} pack="Pro Pack" price="$9.99" />
                    <Option id="ultimate" checked={false} pack="Ultimate Pack" price="$19.99" />
                </Select>
                <TextField id='phone' error={errors.validPhone} placeholder="Phone Number"/>
                <TextField id='company' error={errors.validCompany} placeholder="Company"/>
                <DefaultButton buttonType='getOn' onButtonClick={validateForm}>Get on the list</DefaultButton>
            </form>
        </div>
    )
}

export default SignUpForm;