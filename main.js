
let inventory = {
    coffee: [10, 0.75],
    decafCoffee: [10, 0.75],
    sugar: [10, 0.25],
    cream: [10, 0.25],
    steamedMilk: [10, 0.35],
    foamedMilk: [10, 0.35],
    espresso: [10, 1.10],
    cocoa: [10, 0.90],
    whippedCream: [10, 1.00]
}

let menu = {
    coffee: {
        ingredients: {
            coffee: 3,
            sugar: 1,
            cream: 1,
        },
        price: priceCheck('coffee'),
        inStock: inStockCheck()
    },
    decafCoffee: {
        ingredients: {
            decafCoffee: 3,
            sugar: 1,
            cream: 1
        },
        price: priceCheck('decafCoffee'),
        inStock: inStockCheck()
    },
    caffeeLate: {
        ingredients: {
            espresso: 2,
            steamedMilk: 1
        },
        price: priceCheck('caffeeLate'),
        inStock: inStockCheck()
    },
    caffeAmericano: {
        ingredients: {
            espresso: 3
        },
        price: priceCheck('caffeAmericano'),
        inStock: inStockCheck()
    },
    caffeMocha: {
        ingredients: {
            espresso: 1,
            cocoa: 1,
            steamedMilk: 1,
            whippedCream: 1
        },
        price: priceCheck('caffeMocha'),
        inStock: inStockCheck()
    },
    cappuccino: {
        ingredients: {
            espresso: 2,
            steamedMilk: 1,
            foamedMilk: 1
        },
        price: priceCheck('cappuccino'),
        inStock: inStockCheck()
    }
}

const priceCheck = (drink) => {
    let total = 0
    for (let key in menu.drink.ingredients) {
        total += inventory.key[1] * menu.drink.ingredients.key
    }
    return total
}

const inStockCheck = () => {
    return true
}

console.log(menu.coffee.price)

