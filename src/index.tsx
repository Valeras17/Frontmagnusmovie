
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeContextWrapper } from './contexts/DarkModeContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { VideoProvider } from './contexts/VideoContext';
import { ReviewProvider } from './contexts/ReviewContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient()
root.render(

  <QueryClientProvider client={client}>
    <Router>
      <AuthContextProvider>
        <DarkModeContextWrapper>
        <VideoProvider> 
        <ReviewProvider>
            <App />
            </ReviewProvider>
          </VideoProvider>
        </DarkModeContextWrapper>
      </AuthContextProvider>
    </Router>
  </QueryClientProvider>
);



