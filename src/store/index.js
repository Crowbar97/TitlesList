import { observable } from 'mobx';

class Store {
    @observable itemList = [{title: 1, text: 1, key: 1}, {title: 2, text: 2, key: 2}];

    constructor() {
        this.fetchItems = this.fetchItems.bind(this);
      }

    getUrlByFilter(filter) {
        return "https://chroniclingamerica.loc.gov/search/titles/results/?terms=" + filter + "&format=json&page=1";
    }

    fetchItems(filter) {
        if (filter !== undefined) {
            console.log("Fetching data with filter \"" + filter + "\"...\n");
            fetch(this.getUrlByFilter(filter))
            .then(
                response => response.json()
            )
            .then(
                jsonArray => this.itemList = jsonArray.items.map(item => ({title: item.title, text: item.place_of_publication, key: item.id}))
            );
        }
    }
}

export default new Store;