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
    
    const navigateToSignUp = (event: React.MouseEvent<HTMLButtonElement>) =>{
        let selectedPlan:selectedPlanInfo = {selectedPack: '', selectedPackPrice: ''}; 
        switch(event.currentTarget.id){
            case 'tryBasicButton':
                selectedPlan = {selectedPack: 'Basic Pack', selectedPackPrice: 'Free'};
                break;
            case 'tryProButton':
                selectedPlan = {selectedPack: 'Pro Pack', selectedPackPrice: '$9.99'};
                break;
            case 'tryUltimateButton':
                selectedPlan = {selectedPack: 'Ultimate Pack', selectedPackPrice: '19.99$'};
                break;
        }
        navigate('/signup', { state: selectedPlan });
    }

    return (
        <div id="plans">
            <div id="basicPlan" className='planFrame'>
                <p className='planName'>Basic</p>
                <p className='planPrice'>Free</p>
                <p className='userLimit'>Up to 5 users for free</p>
                <p className='planFeature'>Basic document collaboration</p>
                <p className='planFeature'>2 GB storage</p>
                <p className='planFeature'>Great security and support</p>
                <DefaultButton id="tryBasicButton" buttonType='tryDark' onButtonClick={navigateToSignUp}>Try for Free</DefaultButton>
            </div>
            <div id="proPlan" className='planFrame'>
                <p className='planName'>Pro</p>
                <p className='planPrice'>$9.99</p>
                <p className='userLimit'>Per user, billed monthly</p>
                <p className='planFeature'>All essential integrations</p>
                <p className='planFeature'>50 GB storage</p>
                <p className='planFeature'>More control and insights</p>
                <DefaultButton id="tryProButton" buttonType='tryLight' onButtonClick={navigateToSignUp}>Try for Free</DefaultButton>
            </div>
            <div id="ultimatePlan" className='planFrame'>
                <p className='planName'>Ultimate</p>
                <p className='planPrice'>$19.99</p>
                <p className='userLimit'>Per user, billed monthly</p>
                <p className='planFeature'>Robust work management</p>
                <p className='planFeature'>100 GB storage</p>
                <p className='planFeature'>VIP support</p>
                <DefaultButton id="tryUltimateButton" buttonType='tryDark' onButtonClick={navigateToSignUp}>Try for Free</DefaultButton>
            </div>
        </div>
    )
}

export default Plans;