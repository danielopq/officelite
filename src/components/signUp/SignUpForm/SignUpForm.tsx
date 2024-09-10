import './signUpForm.css';
import TextField from '../../commons/formElements/textField/Textfield';
import Select from '../../commons/formElements/select/Select';
import Option from '../../commons/formElements/select/option/Option';
import DefaultButton from '../../commons/defaultButton/DefaultButton';

const SignUpForm = () => {
    return (
        <div id="signUpForm">
            <form id="getStartedForm">
                <TextField id='name'>Name</TextField>
                <TextField id='email'>Email Addres</TextField>
                <Select id='plan'>
                    <Option id="free" checked={true} pack="Basic Pack" price="Free" />
                    <Option id="pro" checked={false} pack="Pro Pack" price="$9.99" />
                    <Option id="ultimate" checked={false} pack="Ultimate Pack" price="$19.99" />
                </Select>
                <TextField id='phone'>Phone Number</TextField>
                <TextField id='company'>Company</TextField>
                <DefaultButton buttonType='getOn'>Get on the list</DefaultButton>
            </form>
        </div>
    )
}

export default SignUpForm;