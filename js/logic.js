const readline = require('readline');
const { mapInventory, mapMenu } = require('./display');

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

const restock = (menu, inv) => {
    for (let ingredient in inv) {
        if (inv.hasOwnProperty(ingredient)) {
            inv[ingredient].stock = 10
        }
    }
    inStockCheck(menu, inv)
}

const calculateStock = (beverage, inv, menu) => {
    for (let ingredient in menu[beverage].ingredients) {
        if (menu[beverage].ingredients.hasOwnProperty(ingredient)) {
            inv[ingredient].stock = inv[ingredient].stock - menu[beverage].ingredients[ingredient]
        }
    }
    inStockCheck(menu, inv)
}

const runCoffeeMachine = (inv, menu) => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', (line) => {
        switch (line.trim()) {
            case 'r' || 'R':
                console.log('Restocking Machine');
                restock(menu, inv)
                mapInventory(inv);
                mapMenu(menu)
                break;
            default:
                console.log(`Say what? I might have heard '${line.trim()}'`);
                break;
        }
        rl.prompt();
    }).on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
    });
}

module.exports = {
    restock,
    inStockCheck,
    calculateStock,
    runCoffeeMachine
}
