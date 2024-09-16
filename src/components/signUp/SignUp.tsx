// Main website component. Contains all signup elements.

import './signUp.css';
import Logo from '../commons/logo/Logo';
import BackCounter from '../commons/backCounter/BackCounter';
import SignUpForm from './SignUpForm/SignUpForm';

const SignUp = () => {

    return (
        <main id="signUp">
            <div id="signUpMainContent">
                <Logo />
                <h1>Work smarter. Save time.</h1>
                <p className='mainText'>Easily manage your projects. Get on the list and receive
                    in-app perks available only to early subscribers. We are
                    moving into final development and getting ready for
                    official launch soon.
                </p>
                <BackCounter skinTheme='light'/>
            </div>
            <div id="mainForm">
                <SignUpForm/>
            </div>
        </main>
    )
}

export default SignUp;