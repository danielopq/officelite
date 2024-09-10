import './signUpForm.css';
import FormTextField from '../../commons/formTextField/FormTextField';

const SignUpForm = () => {
    return(
        <div id="signUpForm">
            <FormTextField id='name'>Name</FormTextField>
            <FormTextField id='email'>Email Addres</FormTextField>
            <FormTextField id='temp'>Basic Pack</FormTextField>
            <FormTextField id='phone'>Phone Number</FormTextField>
            <FormTextField id='company'>Company</FormTextField>
        </div>
    )
}

export default SignUpForm;