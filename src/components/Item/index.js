import React, { Component } from 'react';
import styles from "./styles.module.css";

class Item extends Component {
    render() {
        return (
            <div className={styles.block}>
                <div className={styles.firstLayer}></div>
                <div className={styles.secondLayer}></div>
                <div className={styles.title}>{this.props.item.title}</div>
                <div className={styles.text}>{this.props.item.text}</div>
            </div>
        );
    }
}

export default Item;