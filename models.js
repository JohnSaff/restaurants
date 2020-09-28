
class Item{
    constructor({name}){
        if(!name) return new Error("item must have a name")
        this.name = name
        this.allergens
        this.description
        this.price
    }
    addPrice(price){
        this.price = price
    }
    addDescription(description){
        this.description = description
    }
    addAllergens(allergen){
        this.allergens = allergen
    }
    getPrice(){
        return this.price
    }
    getName(){
        return this.name
    }
    getDescription(){
        return this.description
    }
    getAllergens(){
        return this.allergens
    }
}

class Menu{
    constructor({name}){
        if(!name) return new Error("item must have a name")
        this.name = name
        this.description
        this.items = []

    }
    addItem(item){
        this.items.push(item)
    }
    getItems(){
        return this.items
    }
}


class Restaurant{
    constructor({name,image = "http://image.url"}){
        if(!name) return new Error("restaurant must have a name")
        this.name = name
        this.image = image
        this.menus = []
    }
    addMenu(menu){
        this.menus.push(menu)
    }
    getMenus(){
        return this.menus
    }

}





module.exports = {
    Restaurant,
    Menu,
    Item
}
