import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWithRouter from './App';

const isProduction = import.meta.env.PROD;

// Create a wrapper component for Vercel analytics
function VercelAnalytics() {
  if (!isProduction) return null;
  
  // In production, these will be imported dynamically
  const Analytics = React.lazy(() => import('@vercel/analytics/react'));
  const SpeedInsights = React.lazy(() => import('@vercel/speed-insights/react'));
  
  return (
    <React.Suspense fallback={null}>
      <Analytics />
      <SpeedInsights />
    </React.Suspense>
  );
}

function App() {
  return (
    <StrictMode>
      <AppWithRouter />
      <VercelAnalytics />
    </StrictMode>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
