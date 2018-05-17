const mapInventory = (inv) => {
    console.log('Inventory:\n')
    for (let ingredient in inv) {
        if (inv.hasOwnProperty(ingredient)) {
            console.log(`${inv[ingredient].name}, ${inv[ingredient].stock}`)
        }
    }
}

const mapMenu = (menu) => {
    console.log('\nMenu:\n')
    const beverages = Object.keys(menu)
    for (let beverage in menu) {
        if (menu.hasOwnProperty(beverage)) {
            const index = beverages.indexOf(beverage)
            console.log(`${index + 1}, ${menu[beverage].name}, $${menu[beverage].price}, ${menu[beverage].inStock}`)
        }
    }
}

module.exports = {
    mapInventory,
    mapMenu
}
