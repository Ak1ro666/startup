import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'
import { Page } from '../pages/all-ideas-page/page'
import { Providers } from './providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Page />
    </Providers>
  </StrictMode>
)
