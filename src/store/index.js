import { observable, action } from 'mobx';

class Item {
    @observable title;
    @observable text;
    @observable id;

    constructor(title, text, id) {
        this.title = title;
        this.text = text;
        this.id = id;
    }
}

class Store {
    @observable itemList = [];

    getUrlByFilter(filter) {
        return `http://localhost:3000/items?q=${filter}`;
    }

    @action async fetchItems(filter) {
        try {
            console.log(`Fetching data with filter "${filter}"...\n`);
            const response = await fetch(this.getUrlByFilter(filter));
            const jsonData = await response.json();
            this.itemList = jsonData.map((item, index) => (new Item(item.title, item.text, index)));
            console.log(`${this.itemList.length} item(s) were fetched.\n`);
        }
        catch (e) {
            console.log(`Error ${e.name}: ${e.message}\n ${e.stack}`);
        }
    }
}

export default new Store;