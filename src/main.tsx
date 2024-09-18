import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import OfficeEliteApp from './OfficeEliteApp';

import './assets/css/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <OfficeEliteApp/>
    </BrowserRouter>
  </StrictMode>,
)