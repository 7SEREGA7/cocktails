import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { store } from './store';


const app = <Provider store={store}>
							<BrowserRouter>
								<Switch>
									<App />
								</Switch>
							</BrowserRouter>
						</Provider>

ReactDOM.render(
  app,
  document.getElementById('root')
);
serviceWorker.unregister();
