import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
//name Github Users
//domain dev-27xc5pku.us.auth0.com
//client  AsInsTODCSDYLmbXWvL0cZRMct5r4TI4
//client secret     B5zA077Ele9uRsKTesi1T9Wudo2v6_CjIrnKn5KNNntb0X6zbzBynb-IgtCRStur

ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
      domain='dev-27xc5pku.us.auth0.com'
      clientId='AsInsTODCSDYLmbXWvL0cZRMct5r4TI4'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
