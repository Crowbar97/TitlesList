import React, { Component } from 'react';
import { Block, Form, Input } from './styles';
import { observable, computed } from 'mobx';
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
            <Block>
                <Form onSubmit={this.fetchItems}>
                    <Input type="text" onChange={this.refreshFilter} placeholder="Search" />
                    <Input type="submit" value="Go" disabled={this.filterIsEmpty} />
                </Form>
            </Block>
        );
    }
}

export default SearchPanel;