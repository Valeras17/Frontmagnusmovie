import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContextWrapper } from './contexts/DarkModeContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient()
root.render(
  <QueryClientProvider client={client}>
  <BrowserRouter>
  <AuthContextProvider>
    <DarkModeContextWrapper>
      <App />
    </DarkModeContextWrapper>
    </AuthContextProvider>
  </BrowserRouter>
</QueryClientProvider>
);



