import './signUpForm.css';
import FormTextField from '../../commons/formTextField/FormTextField';
import DefaultButton from '../../commons/defaultButton/DefaultButton';

const SignUpForm = () => {
    return (
        <div id="signUpForm">
            <form id="getStartedForm">
                <FormTextField id='name'>Name</FormTextField>
                <FormTextField id='email'>Email Addres</FormTextField>
                <FormTextField id='temp'>Basic Pack</FormTextField>
                <FormTextField id='phone'>Phone Number</FormTextField>
                <FormTextField id='company'>Company</FormTextField>
                <DefaultButton buttonType='getOn'>Get on the list</DefaultButton>
            </form>
        </div>
    )
}

export default SignUpForm;