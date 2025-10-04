import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWithRouter from './App';
import { Analytics } from '@vercel/analytics/react';
import './utils/trustedTypes'; // Import Trusted Types configuration

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppWithRouter />
    <Analytics />
  </StrictMode>
);
