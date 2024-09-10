import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/home/Home';
import SignUp from './components/signUp/SignUp';
import './assets/css/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
    {/* <SignUp/> */}
  </StrictMode>,
)
