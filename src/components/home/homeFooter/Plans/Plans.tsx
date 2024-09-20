// Displays the different plans and their features on the homepage.

import './plans.css';
import DefaultButton from '../../../commons/defaultButton/DefaultButton';
import { useNavigate } from 'react-router-dom';

type selectedPlanInfo = {
    selectedPack: string;
    selectedPackPrice: string;
}

const Plans = () => {

    const navigate = useNavigate();

    /**
     * Renders the sign-up page.
     */

    const navigateToSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
        let selectedPlan: selectedPlanInfo = { selectedPack: '', selectedPackPrice: '' };
        switch (event.currentTarget.id) {
            case 'tryBasicButton':
                selectedPlan = { selectedPack: 'Basic Pack', selectedPackPrice: 'Free' };
                break;
            case 'tryProButton':
                selectedPlan = { selectedPack: 'Pro Pack', selectedPackPrice: '$9.99' };
                break;
            case 'tryUltimateButton':
                selectedPlan = { selectedPack: 'Ultimate Pack', selectedPackPrice: '19.99$' };
                break;
        }
        navigate('/signup', { state: selectedPlan });
    }

    return (
        <div id="plans">
            <div id="basicPlan" className='planFrame'>
                <div className='planDescription'>
                    <div>
                        <p className='planName'>Basic</p>
                        <p className='planPrice'>Free</p>
                        <p className='userLimit'>Up to 5 users for free</p>
                    </div>
                    <div className='planFeatures'>
                        <p className='feature'>Basic document collaboration</p>
                        <p className='feature'>2 GB storage</p>
                        <p className='feature'>Great security and support</p>
                    </div>
                </div>
                <DefaultButton id="tryBasicButton" buttonType='tryDark' onButtonClick={navigateToSignUp}>Try for Free</DefaultButton>
            </div>
            <div id="proPlan" className='planFrame'>
                <div className='planDescription'>
                    <div>
                        <p className='planName'>Pro</p>
                        <p className='planPrice'>$9.99</p>
                        <p className='userLimit'>Per user, billed monthly</p>
                    </div>
                    <div className='planFeatures'>
                        <p className='feature'>All essential integrations</p>
                        <p className='feature'>50 GB storage</p>
                        <p className='feature'>More control and insights</p>
                    </div>
                </div>
                <DefaultButton id="tryProButton" buttonType='tryLight' onButtonClick={navigateToSignUp}>Try for Free</DefaultButton>
            </div>
            <div id="ultimatePlan" className='planFrame'>
                <div className='planDescription'>
                    <div>
                        <p className='planName'>Ultimate</p>
                        <p className='planPrice'>$19.99</p>
                        <p className='userLimit'>Per user, billed monthly</p>
                    </div>
                    <div className='planFeatures'>
                        <p className='feature'>Robust work management</p>
                        <p className='feature'>100 GB storage</p>
                        <p className='feature'>VIP support</p>
                    </div>
                </div>
                <DefaultButton id="tryUltimateButton" buttonType='tryDark' onButtonClick={navigateToSignUp}>Try for Free</DefaultButton>
            </div>
        </div>
    )
}

export default Plans;