import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import HandleAuthContext from'./Component/Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Toaster
     position="top-left"
     reverseOrder={false}
     gutter={8}
     containerClassName=""
     containerStyle={{}}
     toastOptions={{
       // Define default options
       className: '',
       duration: 5000,
       style: {
         background: '#white',
         color: 'brown',
       },

       // Default options for specific types
       success: {
         duration: 3000,
         theme: {
           primary: 'skyblue',
           secondary: 'red',
         },
       },
     }}
   />
    <HandleAuthContext>
    <App />
    </HandleAuthContext>

    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
