import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import './index.css';
import AppWithRouter from './App';

const isProduction = import.meta.env.PROD;

function App() {
  const [AnalyticsComponent, setAnalyticsComponent] = useState(() => () => null);
  const [SpeedInsightsComponent, setSpeedInsightsComponent] = useState(() => () => null);

  useEffect(() => {
    if (isProduction) {
      Promise.all([
        import('@vercel/analytics/react'),
        import('@vercel/speed-insights/react')
      ]).then(([analytics, speedInsights]) => {
        setAnalyticsComponent(() => analytics.default);
        setSpeedInsightsComponent(() => speedInsights.default);
      });
    }
  }, []);

  return (
    <StrictMode>
      <AppWithRouter />
      {isProduction && (
        <>
          <AnalyticsComponent />
          <SpeedInsightsComponent />
        </>
      )}
    </StrictMode>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
