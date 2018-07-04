import React, { Component } from 'react';
import styles from './styles.module.css';
import Item from '../Item/index';
import store from "../../store/index";
import { observer } from 'mobx-react';

@observer
class Content extends Component {
    render() {
        var key = 0;
        var itemList = store.itemList.map(item => (<Item item={item} key={key++}/>));
        return (
                <div className={styles.block}>
                    <ul>{itemList}</ul>
                </div>
        );
    }
}

export default Content;