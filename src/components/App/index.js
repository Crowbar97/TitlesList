import React, { Component } from 'react';
import styles from './styles.module.css';
import Header from "../Header/index";
import Main from '../Main/index';
import Footer from '../Footer/index';

class App extends Component {
    render() {
        return (
            <div className={styles.block}>
                <div className={styles.wrapper}>
                    <Header />
                    <Main />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;