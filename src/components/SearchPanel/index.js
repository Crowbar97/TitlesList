import React, { Component } from 'react';
import styles from "./styles.module.css";
import { observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject("store")
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

    @computed get filterIsEmpty() {
        return this.filter === "";
    }

    fetchItems(event) {
        this.props.store.fetchItems(this.filter);
        event.preventDefault();
    }

    render() {
        return (
            <div className={styles.block}>
                <form onSubmit={this.fetchItems}>
                    <input type="text" onChange={this.refreshFilter} className={styles.input} placeholder="Search"/>
                    <input type="submit" value="Go" disabled={this.filterIsEmpty} className={styles.button} />
                </form>
            </div>
        );
    }
}

export default SearchPanel;