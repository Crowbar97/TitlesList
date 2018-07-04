import { observable } from 'mobx';

class Store {

    @observable itemList = [];

    constructor() {
        this.filter = "";
        this.refreshFilter = this.refreshFilter.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
        this.fetchItems();
      }

    refreshFilter(event) {
        this.filter = event.target.value;
    }

    getUrlByFilter() {
        return "https://chroniclingamerica.loc.gov/search/titles/results/?terms=" + this.filter + "&format=json&page=1";
    }

    fetchItems(event) {
        console.log("Fetching data with filter \"" + this.filter + "\"...\n");
        fetch(this.getUrlByFilter())
        .then(
            response => response.json()
        )
        .then(
            jsonArray => this.itemList = jsonArray.items.map(item => ({title: item.title, text: item.place_of_publication, key: item.id}))
        );

        if (event !== undefined)
            event.preventDefault();
    }
}

export default new Store;