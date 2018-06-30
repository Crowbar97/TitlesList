import React, { Component } from 'react';
import styles from "./styles.module.css";
import Header from "../Header/index";
import SearchPanel from '../SearchPanel';
import Content from '../Content/index'
import Footer from '../Footer/index'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SearchPanel />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;