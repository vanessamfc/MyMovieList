import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import persistReducer from './persistReducer';

const store = createStore(
  persistReducer(rootReducer),
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

export { store, persistor };
