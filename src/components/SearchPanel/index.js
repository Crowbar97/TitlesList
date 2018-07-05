import React, { Component } from 'react';
import styles from "./styles.module.css";
import store from "../../store/index";
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class SearchPanel extends Component {
    @observable filter = "";

    constructor(props) {
        super(props);
        this.refreshFilter = this.refreshFilter.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
    }

    refreshFilter(event) {
        this.filter = event.target.value;
    }

    fetchItems(event) {
        store.fetchItems(this.filter);
        event.preventDefault();
    }

    render() {
        return (
            <div className={styles.block}>
                <form onSubmit={this.fetchItems}>
                    <input type="text" onChange={this.refreshFilter} className={styles.input} placeholder="Search"/>
                    <input type="submit" value="Go" disabled={this.filter===""} className={styles.button} />
                </form>
            </div>
        );
    }
}

export default SearchPanel;