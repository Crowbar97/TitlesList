import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Wrapper from './styles/Wrapper';
import Block from './styles/Block'
import store from '../../store/index';
import Header from '../Header/index';
import Main from '../Main/index';
import Footer from '../Footer/index';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Block>
                    <Wrapper>
                        <Header />
                        <Main />
                    </Wrapper>
                    <Footer />
                </Block>
            </Provider>
        );
    }
}

export default App;