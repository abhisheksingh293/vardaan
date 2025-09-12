import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWithRouter from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithRouter />
    <Analytics />
    <SpeedInsights />
  </StrictMode>
)
