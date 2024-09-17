// Main website component. Contains all signup elements.

import './signUp.css';
import Logo from '../commons/logo/Logo';
import BackCounter from '../commons/backCounter/BackCounter';
import SignUpForm from './SignUpForm/SignUpForm';
import { useLocation } from 'react-router-dom';

type selectPlaninfo = {
    selectedPack: string;
    selectedPackPrice: string;
}


const SignUp = () => {
    const location = useLocation();
    const selectPlan = (location.state as selectPlaninfo) || {
        selectedPack: "Basic Pack",  // Valor por defecto para `selectedPack`
        selectedPackPrice: "Free"        // Valor por defecto para `selectedPackPrice`
    };

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
                <SignUpForm selectedPack={selectPlan.selectedPack} selectedPackPrice={selectPlan.selectedPackPrice}/>
            </div>
        </main>
    )
}

export default SignUp;