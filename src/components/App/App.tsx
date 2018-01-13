if (process.env.WEBPACK) require('./App.scss');

import * as React from 'react';
import { getTitle } from '../../actions/app';

interface AppProps {
    app: {
        title: string;
    }
    getTitle: Function;
}

export default class App extends React.Component<AppProps, null> {
    componentDidMount() {
        this.props.getTitle();
    }

    render() {
        return (
            <div>
                <h1>{this.props.app.title}</h1>
            </div>
        );
    }
}