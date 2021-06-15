import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store/store';
import 'react-toastify/dist/ReactToastify.css';
import GlobalState from './globalstate/globalstate';

reactDom.render(
    <BrowserRouter>
    <GlobalState>
    <Provider store={store}>
    <App/>
        </Provider>
        </GlobalState>
        </BrowserRouter>
    , document.getElementById("root"));