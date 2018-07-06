import { observable, action } from 'mobx';

class Store {
    @observable itemList = [];

    constructor() {
        this.fetchItems = this.fetchItems.bind(this);
    }

    getUrlByFilter(filter) {
        return "https://chroniclingamerica.loc.gov/search/titles/results/?terms=" + filter + "&format=json&page=1";
    }

    @action fetchItems(filter) {
        console.log("Fetching data with filter \"" + filter + "\"...\n");
        fetch(this.getUrlByFilter(filter))
            .then(
                response => response.json(),
                error => console.log("Fetch error: " + error + "\n")
            )
            .then(
                jsonArray => {
                    if (jsonArray !== undefined) {
                        this.itemList = jsonArray.items.map(item => ({ title: item.title, text: item.place_of_publication, key: item.id }));
                        console.log(this.itemList.length + " item(s) were fetched.\n");
                    }
                },
                error => console.log("JSON parsing error: " + error + "\n")
            );
        console.log("Fetch request was successfully sended!\n");
    }
}

export default new Store;