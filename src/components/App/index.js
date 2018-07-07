import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import styles from './styles.module.css';
import store from "../../store/index";
import Header from "../Header/index";
import Main from '../Main/index';
import Footer from '../Footer/index';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className={styles.block}>
                    <div className={styles.wrapper}>
                        <Header />
                        <Main />
                    </div>
                    <Footer />
                </div>
            </Provider>
        );
    }
}

export default App;