import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/components-style/style.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

/*Material-UI. Our components use react-tap-event-plugin to listen for touch / tap / clickevents.
 This dependency is temporary and will go away once the official React version is released.
 Until then, be sure to inject this plugin at the start of your app.*/
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
