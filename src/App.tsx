import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store'
import Routes from './routes';
import './style/global.scss';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return(
      <Provider store={store}>
        <Routes />
        <ToastContainer />
      </Provider>
  )
}

export default App;