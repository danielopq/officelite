import Home from './components/home/Home';
import SignUp from './components/signUp/SignUp';
import './assets/css/index.css';
import { Route, Routes } from 'react-router-dom';

const OfficeEliteApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};

export default OfficeEliteApp;