import React, { Component } from 'react';
import styles from "./styles.module.css";
import store from "../../store/index";

class SearchPanel extends Component {
    applyFilter() {
        // place fetch api here
    }

    render() {
        return (
            <div className={styles.block}>
                <input className={styles.input} placeholder="Search"/>
                <button className={styles.button} onClick={this.applyFilter}>Go</button>
            </div>
        );
    }
}

export default SearchPanel;