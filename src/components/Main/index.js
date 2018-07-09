import React, { Component } from 'react';
import SearchPanel from '../SearchPanel/index';
import Content from '../Content/index';

class Main extends Component {
    render() {
        return (
            <div>
                <SearchPanel />
                <Content />
            </div>
        );
    }
}

export default Main;