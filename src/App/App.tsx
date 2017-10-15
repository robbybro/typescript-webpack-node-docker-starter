import * as _ from 'underscore';
import * as React from "react";
import axios from 'axios';
import './App.scss';

interface AppState {
    title: string;
}

export default class App extends React.Component<null, AppState> {
    constructor (props:null) {
        super(props);
        this.state = {
            title: '',
        };
    }

    componentDidMount() {
        axios.get('/title').then((res) => {
            console.log(res);
            this.setState({
                ...this.state,
                title: res.data.title,
            });
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}