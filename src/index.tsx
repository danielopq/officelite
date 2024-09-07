import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './Main';
import Footer from './Footer';
import './assets/css/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main></Main>
    <Footer></Footer>
  </StrictMode>,
)
