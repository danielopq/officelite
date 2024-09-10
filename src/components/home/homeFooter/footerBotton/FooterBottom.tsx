import './footerBotton.css';
import DefaultButton from '../../../commons/defaultButton/DefaultButton';
import BackCounter from '../../../commons/backCounter/BackCounter';
const FooterBotton = () => {
    return (
        <div id="footerBottom">
            <BackCounter />
            <DefaultButton buttonType='getStarted'>Get Started</DefaultButton>
        </div>
    )
}

export default FooterBotton;