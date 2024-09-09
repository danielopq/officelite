import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home';
import SignUp from './SignUp';
import './assets/css/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
    {/* <SignUp/> */}
  </StrictMode>,
)
