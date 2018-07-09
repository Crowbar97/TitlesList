import React, { Component } from 'react';
import styles from './styles.module.css';
import Item from '../Item/index';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class Content extends Component {
    render() {
        return (
            <div className={styles.block}>
                {this.props.store.itemList.map(item => (<Item title={item.title} text={item.text} key={item.id} />))}
            </div>
        );
    }
}

export default Content;