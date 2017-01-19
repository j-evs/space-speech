import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
// const initialState = {
//         speechData: {
//             speechList: [],
//             speeches: {}
//         },
//         currentRadioStream: undefined
// }

export default function configureStore() {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));
}
