import ReactDOM from 'react-dom';
import App from './App.jsx'; // Assuming your App component is in App.jsx
import './App.css'; // Link to your App.css file

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// In your main JavaScript file (e.g., index.js)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
  