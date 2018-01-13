import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const initialStore = {
    app: {
        title: 'initial title',
    },
};

const enhancers = compose(
    applyMiddleware(thunk),
    typeof window !== 'undefined' && (window as any).devToolsExtension
        ? (window as any).devToolsExtension()
        : (f: any) => f,
);

const store = createStore(reducers, initialStore, enhancers);

export default store;
