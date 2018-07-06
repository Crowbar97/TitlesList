import { observable, action } from 'mobx';

class Store {
    @observable itemList = [{ title: 1, text: 1, key: 1 }, { title: 2, text: 2, key: 2 }];

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
                error => console.log("Fetch error: " + error)
            )
            .then(
                jsonArray => {
                    if (jsonArray !== undefined) {
                        this.itemList = jsonArray.items.map(item => ({ title: item.title, text: item.place_of_publication, key: item.id }));
                        console.log(this.itemList.length + " item(s) were fetched.\n");
                    }
                },
                error => console.log("JSON parsing error: " + error)
            );
    }
}

export default new Store;