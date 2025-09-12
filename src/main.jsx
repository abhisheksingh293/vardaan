import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWithRouter from './App';

const isProduction = import.meta.env.PROD;

// Dynamically import Vercel analytics only in production
const VercelAnalytics = isProduction ? (await import('@vercel/analytics/react')).default : () => null;
const SpeedInsights = isProduction ? (await import('@vercel/speed-insights/react')).default : () => null;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppWithRouter />
    {isProduction && (
      <>
        <VercelAnalytics />
        <SpeedInsights />
      </>
    )}
  </StrictMode>
);
