import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom'
import { UseWalletProvider } from 'use-wallet';

ReactDOM.render(<Router>
    <Provider store={store}>
        <UseWalletProvider
            chainId={1}
            connectors={{
              // This is how connectors get configured
              portis: { dAppId: 'my-dapp-id-123-xyz' },
            }}        
        >
            <App />
        </UseWalletProvider>
    </Provider>
</Router>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
