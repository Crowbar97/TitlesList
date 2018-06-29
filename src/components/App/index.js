import React, { Component } from 'react';
import styles from "./styles.module.css";
import Header from "../Header/index";
import SearchPanel from '../SearchPanel';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SearchPanel />
            </div>
        );
    }
}

export default App;