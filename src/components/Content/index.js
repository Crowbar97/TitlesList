import React, { Component } from 'react';
import styles from './styles.module.css';
import Item from '../Item/index';
import store from "../../store/index";
import { observer } from 'mobx-react';

@observer
class Content extends Component {
    render() {
        return (
            <div className={styles.block}>
                {store.itemList.map(item => (<Item title={item.title} text={item.text} key={item.key} />))}
            </div>
        );
    }
}

export default Content;