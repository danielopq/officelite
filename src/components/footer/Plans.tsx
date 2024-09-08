import '../../assets/css/footer/plans.css';
import DefaultButton from '../commons/DefaultButton';
const Plans = () => {
    return (
        <div id="plans">
            <div id="basicPlan" className='planFrame'>
                <p className='planName'>Basic</p>
                <p className='planPrice'>Free</p>
                <p className='userLimit'>Up to 5 users for free</p>
                <p className='planFeature'>Basic document collaboration</p>
                <p className='planFeature'>2 GB storage</p>
                <p className='planFeature'>Great security and support</p>
                <DefaultButton buttonType='tryDark'>Try for Free</DefaultButton>
            </div>
            <div id="proPlan" className='planFrame'>
                <p className='planName'>Pro</p>
                <p className='planPrice'>$9.99</p>
                <p className='userLimit'>Per user, billed monthly</p>
                <p className='planFeature'>All essential integrations</p>
                <p className='planFeature'>50 GB storage</p>
                <p className='planFeature'>More control and insights</p>
                <DefaultButton buttonType='tryLight'>Try for Free</DefaultButton>
            </div>
            <div id="ultimatePlan" className='planFrame'>
                <p className='planName'>Ultimate</p>
                <p className='planPrice'>$19.99</p>
                <p className='userLimit'>Per user, billed monthly</p>
                <p className='planFeature'>Robust work management</p>
                <p className='planFeature'>100 GB storage</p>
                <p className='planFeature'>VIP support</p>
                <DefaultButton buttonType='tryDark'>Try for Free</DefaultButton>
            </div>
        </div>
    )
}

export default Plans;