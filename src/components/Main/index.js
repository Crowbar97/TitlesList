import React, { Component } from 'react';
import Wrapper from './styles/Wrapper';
import SearchPanel from '../SearchPanel/index';
import Content from '../Content/index';

class Main extends Component {
    render() {
        return (
            <Wrapper>
                <SearchPanel />
                <Content />
            </Wrapper>
        );
    }
}

export default Main;