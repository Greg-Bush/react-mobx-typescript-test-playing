import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { App } from 'app';
import { createStores } from 'app/stores/createStore';

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
