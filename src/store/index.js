import { observable } from 'mobx';

class Store {
    @observable itemList = [
        {
            title: "title 1",
            text: "text 1"
        },
        {
            title: "title 2",
            text: "text 2"
        },
        {
            title: "title 3",
            text: "text 3"
        },
    ];
}

var store = new Store;

export default store;