import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWithRouter from './App';

const isProduction = import.meta.env.PROD;

// Create lazy-loaded components
const Analytics = isProduction 
  ? lazy(() => import('@vercel/analytics/react').then(module => ({ default: module.default })))
  : () => null;

const SpeedInsights = isProduction
  ? lazy(() => import('@vercel/speed-insights/react').then(module => ({ default: module.default })))
  : () => null;

function App() {
  return (
    <StrictMode>
      <AppWithRouter />
      {isProduction && (
        <Suspense fallback={null}>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      )}
    </StrictMode>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
