import React, { Component } from 'react';
import styles from "./styles.module.css";

class SearchPanel extends Component {
    render() {
        return (
            <div className={styles.block}>
                <input className={styles.input} placeholder="Search"/>
                <button className={styles.button}> Go </button>
            </div>
        );
    }
}

export default SearchPanel;