import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWithRouter from './App';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppWithRouter />
    <Analytics />
    <SpeedInsights />
  </StrictMode>
);
