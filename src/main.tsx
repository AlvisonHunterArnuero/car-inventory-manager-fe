import ReactDOM from 'react-dom/client';
import App from './App';
import { worker } from './mocks/browser';

worker
  .start({ onUnhandledRequest: 'bypass' })
  .then(() => {
    const root = ReactDOM.createRoot(
      document.getElementById('root')!
    );
    root.render(<App />);
  })
  .catch((err) => console.error('Worker failed:', err));
