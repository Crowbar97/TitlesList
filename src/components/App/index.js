import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import store from '../../store/index';
import { Block, Wrapper } from './styles';
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