import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer></Footer>
    <em className='h6 small mobile-hide bottom-error text-center'>Please expect bugs as this website is in beta. Report bugs at the Discortics Support server <a href="https://www.discord.gg/discortics" className='text-muted' target='_blank'>here</a>. Variables may not work as you expect in the preview.</em>

  </React.StrictMode>
);
