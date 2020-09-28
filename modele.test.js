const { Restaurant, Menu, Item } = require("./models")


describe("items",()=>{
    test('item has a name',()=>{
        const item = new Item({name : "punk IPA"})
        expect(item.name).toBe("punk IPA")
    })
    test('Item cannot be created without name',()=>{
        expect(()=>{new Item()}).toThrow()
    })
    test("price can be added",()=>{
        const item = new Item({name : "punk IPA"})
        item.addPrice(3.6)
        expect(item.price).toEqual(3.6)
    })
    test("description can be added",()=>{
        const item = new Item({name : "punk IPA"})
        item.addDescription("5.6% hoppy IPA from brewdog")
        expect(item.description).toEqual("5.6% hoppy IPA from brewdog")
    })
    test("allergens can be added",()=>{
        const item = new Item({name : "punk IPA"})
        item.addAllergens("gluten")
        expect(item.allergens).toEqual("gluten")
    })
    test("price can be checked",()=>{
        const item = new Item({name : "punk IPA"})
        item.addPrice(3.6)
        expect(item.getPrice()).toEqual(3.6)
    })
    test("description can be checked",()=>{
        const item = new Item({name : "punk IPA"})
        item.addDescription("5.6% hoppy IPA from brewdog")
        expect(item.getDescription()).toEqual("5.6% hoppy IPA from brewdog")
    })
    test("name can be checked",()=>{
        const item = new Item({name : "punk IPA"})
        expect(item.getName()).toEqual("punk IPA")
    })
    test("allergens can be checked",()=>{
        const item = new Item({name : "punk IPA"})
        item.addAllergens("gluten")
        expect(item.getAllergens()).toEqual("gluten")
    })
})


describe("menu",()=>{
    test('has a title',()=>{
        const menu = new Menu({name:'set menu 1'})
        expect(menu.name).toEqual('set menu 1')
    })
    test('items are array',()=>{
        const menu = new Menu({name:'drinks menu'})
        expect(Array.isArray(menu.items)).toBeTruthy
    })
    test('menu needs a name',()=>{
        expect(()=>{new Menu()}).toThrow()
    })
    test('can add items',()=>{
        const menu = new Menu({name:'drinks menu'})
        const item = new Item({name : "punk IPA"})
        menu.addItem(item)
        expect(menu.items[0]).toEqual({name:"punk IPA"})
    })
    test('can check items',()=>{
        const menu = new Menu({name:'drinks menu'})
        const item = new Item({name : "punk IPA"})
        menu.addItem(item)
        expect(menu.getItems()).toEqual([{name:'punk IPA'}])
    })
})

describe('Restaurant',()=>{
    test('has a name',() =>{
        const restaurant = new Restaurant ({name:"the eagle"})
        expect(restaurant.name).toBe("the eagle")
        expect(restaurant.image).toBe('http://image.url')
    })
    test("restaurant must have name",() =>{
        expect(()=>{new Restaurant()}).toThrow()
    })
    test('can add menus',() =>{
        const restaurant = new Restaurant({name:"the foo bar"})
        const menu = new Menu({name:"drinks menu"})
        restaurant.addMenu(menu)
        expect(restaurant.menus[0].name).toEqual("drinks menu")
    })
    test('can check menus',() =>{
        const restaurant = new Restaurant({name:"the foo bar"})
        const menu = new Menu({name:"drinks menu"})
        restaurant.addMenu(menu)
        menus = restaurant.getMenus()
        expect(menus[0].name).toEqual("drinks menu")
    })

})
