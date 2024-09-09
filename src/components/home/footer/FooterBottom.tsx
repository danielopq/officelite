import '../../../assets/css/home/footer/footerBotton.css';
import '../../../assets/css/home/footer/homeFooter.css';
import DefaultButton from '../../commons/DefaultButton';
import BackCounter from '../../commons/BackCounter';
const FooterBotton = () => {
    return (
        <div id="footerBottom">
            <div id="footerCounter">
                <BackCounter/>
                <DefaultButton buttonType='getStarted'>Get Started</DefaultButton>
            </div>
        </div>
    )
}

export default FooterBotton;