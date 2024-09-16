//Contains the main container for the home page. 

import './homeMain.css';
import Logo from '../../commons/logo/Logo';
import DefaultButton from '../../commons/defaultButton/DefaultButton';
const HomeMain = () => {
    return (
        <main id="home">
            <Logo />
            <div id="homeMainContent">
                <div id="homeMainContent-text">
                    <h1>A simple solution to complex tasks is coming soon</h1>
                    <p className='mainText'>Say goodbye to inefficient juggling of multiple apps, teams,
                        and projects. Officelite is the new collaboration platform
                        built with an intuitive interface to improve productivity.
                    </p>
                    <DefaultButton buttonType='getStartedShadow'>Get Started</DefaultButton>
                </div>
                <div id="homeMainContent-img"></div>
            </div>
        </main>
    )
}

export default HomeMain;