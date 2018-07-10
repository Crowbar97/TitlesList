import React, { Component } from 'react';
import { Block, FirstLayer, SecondLayer, Text, Title } from './styles';

class Item extends Component {
    render() {
        return (
            <Block>
                <FirstLayer />
                <SecondLayer />
                <Title>{this.props.title}</Title>
                <Text>{this.props.text}</Text>
            </Block>
        );
    }
}

export default Item;