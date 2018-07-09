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
        return `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${filter}&format=json&page=1`;
    }

    @action async fetchItems(filter) {
        try {
            console.log(`Fetching data with filter "${filter}"...\n`);
            const response = await fetch(this.getUrlByFilter(filter));
            const jsonData = await response.json();
            this.itemList = jsonData.items.map((item, index) => (new Item(item.title, item.place_of_publication, index)));
            console.log(`${this.itemList.length} item(s) were fetched.\n`);
        }
        catch (e) {
            console.log(`Error ${e.name}: ${e.message}\n ${e.stack}`);
        }
    }
}

export default new Store;