import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import GlobalContext from './GlobalContext';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContext>
  <QueryClientProvider client={queryClient}>
    
      <App />
   
  </QueryClientProvider>
  </GlobalContext>
    );