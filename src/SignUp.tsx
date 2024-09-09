import '../src/assets/css/signUp/signUp.css';
import Logo from './components/commons/Logo';
import BackCounter from './components/commons/BackCounter';
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
                <BackCounter/>
            </div>
            <div id="mainForm"></div>
        </main>
    )
}

export default SignUp;