import '../../../assets/css/home/footer/footerBotton.css';
import DefaultButton from '../../commons/DefaultButton';
import BackCounter from '../../commons/BackCounter';
const FooterBotton = () => {
    return (
        <div id="footerBottom">
            <BackCounter />
            <DefaultButton buttonType='getStarted'>Get Started</DefaultButton>
        </div>
    )
}

export default FooterBotton;