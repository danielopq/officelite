// Displays a confirmation message when the form is submitted.

import './confirmation.css';
import DefaultButton from '../../../commons/defaultButton/DefaultButton';

type confirmationProps = {
    showConfirmation: boolean;
    submitForm: ()=>void;
}

const Confirmation : React.FC<confirmationProps> = ({showConfirmation,submitForm}) =>{
    return(
        <div id="confBackground" className={showConfirmation ? 'visible' : 'invisible' }>
            <div id="confContent">
                <p id="confText">
                    Your details have been submitted.
                </p>
                <p id="confThanks">
                    Thanks.
                </p>
                <DefaultButton buttonType='accept' onButtonClick={submitForm}>Accept</DefaultButton>
            </div>
        </div>
    )
}

export default Confirmation;