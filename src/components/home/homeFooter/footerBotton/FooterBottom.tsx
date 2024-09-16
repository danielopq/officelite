//Contains the bottom section of the homepage footer.

import './footerBotton.css';
import DefaultButton from '../../../commons/defaultButton/DefaultButton';
import BackCounter from '../../../commons/backCounter/BackCounter';
const FooterBotton = () => {
    return (
        <div id="footerBottom">
            <BackCounter skinTheme='darkSkin' />
            <DefaultButton buttonType='getStarted'>Get Started</DefaultButton>
        </div>
    )
}

export default FooterBotton;