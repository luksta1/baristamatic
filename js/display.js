// function to map over the inventory and print it out line by line
const mapInventory = (inv) => {
    console.log('Inventory:')
    Object.keys(inv)
        .sort()
        .forEach(ingredient => {
            console.log(`${inv[ingredient].name}, ${inv[ingredient].stock}`)
        });
}

// function to map over the menu and print it out line by line
const mapMenu = (menu) => {
    console.log('Menu:')
    const beverages = Object.keys(menu);
    beverages.sort()
        .forEach(beverage => {
            if (menu.hasOwnProperty(beverage)) {
                const index = beverages.indexOf(beverage)
                console.log(`${index + 1}, ${menu[beverage].name}, $${menu[beverage].price.toFixed(2)}, ${menu[beverage].inStock}`)
            }
        });
}

module.exports = {
    mapInventory,
    mapMenu
}
