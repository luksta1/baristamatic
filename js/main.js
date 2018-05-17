
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
        name: 'Coffee',
        ingredients: {
            coffee: 3,
            sugar: 1,
            cream: 1,
        },
        price: 2.75,
        inStock: true
    },
    decafCoffee: {
        name: 'Decaf Coffee',
        ingredients: {
            decafCoffee: 3,
            sugar: 1,
            cream: 1
        },
        price: 2.75,
        inStock: true
    },
    caffeeLate: {
        name: 'Caffee Late',
        ingredients: {
            espresso: 2,
            steamedMilk: 1
        },
        price: 2.55,
        inStock: true
    },
    caffeAmericano: {
        name: 'Caffe Americano',
        ingredients: {
            espresso: 3
        },
        price: 3.30,
        inStock: true
    },
    caffeMocha: {
        name: 'Coffee',
        ingredients: {
            espresso: 1,
            cocoa: 1,
            steamedMilk: 1,
            whippedCream: 1
        },
        price: 2.70,
        inStock: true
    },
    cappuccino: {
        name: 'Cappuccino',
        ingredients: {
            espresso: 2,
            steamedMilk: 1,
            foamedMilk: 1
        },
        price: 2.90,
        inStock: true
    }
}

const checkStock = () => {

}

console.log(menu)