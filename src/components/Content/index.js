import React, { Component } from 'react';
import { Block } from './styles';
import Item from '../Item/index';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class Content extends Component {
    render() {
        return (
            <Block>
                {this.props.store.itemList.map(item => (<Item title={item.title} text={item.text} key={item.id} />))}
            </Block>
        );
    }
}

export default Content;