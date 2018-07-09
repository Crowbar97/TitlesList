import React, { Component } from 'react';
import Block from "./styles/Block";
import FirstLayer from "./styles/FirstLayer";
import SecondLayer from "./styles/SecondLayer";
import Title from "./styles/Title";
import Text from "./styles/Text";

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