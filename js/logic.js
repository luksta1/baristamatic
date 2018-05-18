const restock = (inv) => {
    for (let ingredient in inv) {
        if (inv.hasOwnProperty(ingredient)) {
            inv[ingredient].stock = 10
        }
    }
}

const inStockCheck = (menu, inv) => {
    for (let beverage in menu) {
        if (menu.hasOwnProperty(beverage)) {
            for (let ingredient in menu[beverage].ingredients) {
                if (menu[beverage].ingredients.hasOwnProperty(ingredient)) {
                    if (menu[beverage].ingredients[ingredient] <= inv[ingredient].stock) {
                        menu[beverage].inStock = true
                    } else {
                        menu[beverage].inStock = false
                        break;
                    }
                }
            }
        }
    }
}

const calculateStock = (beverage, inv, menu) => {
    for (let ingredient in menu[beverage].ingredients) {
        if (menu[beverage].ingredients.hasOwnProperty(ingredient)) {
            inv[ingredient].stock = inv[ingredient].stock - menu[beverage].ingredients[ingredient]
        }
    }
    inStockCheck(menu, inv)
}

module.exports = {
    restock,
    inStockCheck,
    calculateStock
}
