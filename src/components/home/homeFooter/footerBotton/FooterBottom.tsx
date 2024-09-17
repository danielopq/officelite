//Contains the bottom section of the homepage footer.

import './footerBotton.css';
import { useNavigate } from 'react-router-dom';
import DefaultButton from '../../../commons/defaultButton/DefaultButton';
import BackCounter from '../../../commons/backCounter/BackCounter';
const FooterBotton = () => {
    
    const navigate = useNavigate();

    /**
     * Renders the sign-up page.
     */
    const navigateToSignUp = () =>{
        navigate('/signup');
    }

    return (
        <div id="footerBottom">
            <BackCounter skinTheme='darkSkin' />
            <DefaultButton buttonType='getStarted' onButtonClick={navigateToSignUp}>Get Started</DefaultButton>
        </div>
    )
}

export default FooterBotton;