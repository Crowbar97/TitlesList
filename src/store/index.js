import { observable, action } from 'mobx';

class Store {
    @observable itemList = [];

    constructor() {
        this.fetchItems = this.fetchItems.bind(this);
    }

    getUrlByFilter(filter) {
        return `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${filter}&format=json&page=1`;
    }

    @action async fetchItems(filter) {
        try {
            console.log("Fetching data with filter \"" + filter + "\"...\n");
            const response = await fetch(this.getUrlByFilter(filter));
            const jsonData = await response.json();
            this.itemList = jsonData.items.map(item => ({ title: item.title, text: item.place_of_publication, key: item.id }));
            console.log(this.itemList.length + " item(s) were fetched.\n");
        }
        catch (e) {
            console.log("Error " + e.name + ": " + e.message + "\n" + e.stack);
        }
    }
}

export default new Store;