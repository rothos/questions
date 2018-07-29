import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import rootReducer from './reducers/'

// For binding shortcuts
import { bindShortcuts } from 'redux-shortcuts'
import { actionCreators } from './actions'

// Create the store
const store = createStore(
    rootReducer,
    undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Bind shortcuts
bindShortcuts(
    [['right', 'k'], actionCreators.nextCard],
    [['left', 'j'], actionCreators.prevCard]
)(store.dispatch)

// Render the app
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
