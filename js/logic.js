const priceCheck = (drink) => {
    const total = 0
    for (let key in menu.drink.ingredients) {
        total += inventory.key[1] * menu.drink.ingredients.key
    }
    return total
}

const inStockCheck = () => {
    return true
}

module.exports = {
    priceCheck,
    inStockCheck
}
