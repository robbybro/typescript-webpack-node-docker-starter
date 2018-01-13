import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import App from './components/App/App';
import { getTitle } from './actions/app';
import store from './store';

const mapStateToProps = (state:any, props:any) => {
    return { ...state, ...props };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getTitle: (title:string) => dispatch(getTitle(title))
    };
};


const ControlledApp = connect(mapStateToProps, mapDispatchToProps)(App);

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <ControlledApp />
        </Provider>,
        document.getElementById('app'),
    );

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers/index').default);
    });
    module.hot.accept('./components/App/App', () => render());
}
