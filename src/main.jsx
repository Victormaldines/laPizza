import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './styles/GlobalStyles';
import store, { persistor } from './store';
import { Header } from './components/Header';
import Routes from './routes';
import history from './services/history';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </PersistGate>
  </Provider>
);