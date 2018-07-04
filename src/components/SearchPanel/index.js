import React, { Component } from 'react';
import styles from "./styles.module.css";
import store from "../../store/index";

class SearchPanel extends Component {
    render() {
        return (
            <div className={styles.block}>
                <form onSubmit={store.fetchItems}>
                    <input type="text" onChange={store.refreshFilter} className={styles.input} placeholder="Search"/>
                    <input type="submit" value="Go" className={styles.button} />
                </form>
            </div>
        );
    }
}

export default SearchPanel;