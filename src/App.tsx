import React from 'react';
import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import GlobalStyle from './styles/global';
import { ThemeProvider } from '@material-ui/core';
import 'react-perfect-scrollbar/dist/css/styles.css';
import themes from './styles/themes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={themes}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
