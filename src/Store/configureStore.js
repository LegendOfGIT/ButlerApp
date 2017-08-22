import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    let storeCreator;

    //  client side
    if (typeof(window) !== 'undefined')
    {
        storeCreator = createStore(
            rootReducer,
            initialState,
            //composeEnhancers(applyMiddleware(thunk))
            applyMiddleware(thunk)
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