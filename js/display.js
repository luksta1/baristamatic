const mapInventory = (inv) => {
    console.log('Inventory:')
    Object.keys(inv)
        .sort()
        .forEach(ingredient => {
            console.log(`${inv[ingredient].name}, ${inv[ingredient].stock}`)
        });
}

const mapMenu = (menu) => {
    console.log('\nMenu:')
    const beverages = Object.keys(menu);
    beverages.sort()
        .forEach(beverage => {
            if (menu.hasOwnProperty(beverage)) {
                const index = beverages.indexOf(beverage)
                console.log(`${index + 1}, ${menu[beverage].name}, $${menu[beverage].price}, ${menu[beverage].inStock}`)
            }
        });
}

module.exports = {
    mapInventory,
    mapMenu
}
