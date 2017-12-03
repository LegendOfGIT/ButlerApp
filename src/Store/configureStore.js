import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';
import { compose } from 'redux';

export default function configureStore(initialState) {
    let storeCreator;

    //  client side
    if (typeof(window) !== 'undefined')
    {
        storeCreator = createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunk),
                window.devToolsExtension ? window.devToolsExtension() : f => f
            )
        );
    }
    //  server side
    else{
        storeCreator = createStore(
            rootReducer,
            initialState,
            applyMiddleware(thunk)
        );
    }

    return storeCreator;
}