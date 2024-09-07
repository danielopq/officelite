import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './assets/css/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main></Main>
    <Footer></Footer>
  </StrictMode>,
)
