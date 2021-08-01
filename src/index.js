import React from 'react';
import ReactDOM from 'react-dom';

import withClearCache from './cache';
import App from './containers';

import './index.less';

const ClearCacheComponent = withClearCache(App);

ReactDOM.render(
  <React.StrictMode>
    <ClearCacheComponent />
  </React.StrictMode>,
  document.getElementById('root'),
);
