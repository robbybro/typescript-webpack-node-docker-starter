import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';
import '../vendor/normalize.css';

const app = document.getElementById('app');

if (typeof module !== 'undefined') {
    if (module && module.hot) {
        module.hot.accept();
    }
}

ReactDOM.render(<App />, app);

export default app;