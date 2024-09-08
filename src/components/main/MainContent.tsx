import '../../assets/css/main/mainContent.css'
import DefaultButton from '../commons/DefaultButton';
const MainContent = () => {
    return (
        <div id="mainContent">
            <div id="mainContent-text">
                <h1>A simple solution to complex tasks is coming soon</h1>
                <p>Say goodbye to inefficient juggling of multiple apps, teams,
                    and projects. Officelite is the new collaboration platform
                    built with an intuitive interface to improve productivity.
                </p>
                <DefaultButton buttonType ='getStartedShadow'>Get Started</DefaultButton>
            </div>
            <div id="mainContent-img"></div>
        </div>
    )
}

export default MainContent;