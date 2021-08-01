import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const midleware = [thunk];
const getStore = () => {
  let newStore = createStore(
    rootReducer,
    compose(applyMiddleware(...midleware)),
  );
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    newStore = createStore(
      rootReducer,
      compose(
        applyMiddleware(...midleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__(),
      ),
    );
  }
  return newStore;
};

export const store = getStore();
