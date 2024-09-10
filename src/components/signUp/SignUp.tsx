import './signUp.css';
import Logo from '../commons/logo/Logo';
import BackCounter from '../commons/backCounter/BackCounter';
import SignUpForm from './SignUpForm/SignUpForm';
const SignUp = () => {
    return (
        <main>
            <div id="mainContent">
                <Logo />
                <h1>Work smarter. Save time.</h1>
                <p className='mainText'>Easily manage your projects. Get on the list and receive
                    in-app perks available only to early subscribers. We are
                    moving into final development and getting ready for
                    official launch soon.
                </p>
                <BackCounter bcType='light'/>
            </div>
            <div id="mainForm">
                <SignUpForm/>
            </div>
        </main>
    )
}

export default SignUp;