const readline = require('readline');
const { mapInventory, mapMenu } = require('./display');

// function to check stock based on units needed vs inventory and set to true or false
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

// function to loop over inventory and reset all ingredients to 10
const restock = (menu, inv) => {
    for (let ingredient in inv) {
        if (inv.hasOwnProperty(ingredient)) {
            inv[ingredient].stock = 10
        }
    }
    inStockCheck(menu, inv)
}

// function to check the inventory stock once a drink has been ordered
const calculateStock = (beverage, inv, menu) => {
    for (let ingredient in menu[beverage].ingredients) {
        if (menu[beverage].ingredients.hasOwnProperty(ingredient)) {
            inv[ingredient].stock = inv[ingredient].stock - menu[beverage].ingredients[ingredient]
        }
    }
    inStockCheck(menu, inv)
}

// function to check if a valid order was placed and to print out the correct drink
const runOrder = (input, menu, inv) => {
    const menuItems = Object.keys(menu).sort();
    let selection = Number(input);

    if (!isNaN(selection) && selection > 0 && selection <= menuItems.length) {
        let bevOrdered = menu[menuItems[selection - 1]]
        if (!bevOrdered.inStock) {
            console.log(`Out Of Stock: ${bevOrdered.name}`)
        } else {
            console.log(`Dispensing: ${bevOrdered.name}`)
            calculateStock(menuItems[selection - 1], inv, menu);
            mapInventory(inv);
            mapMenu(menu)
        }
    } else {
        console.log(`Invalid Selection: ${input}`)
    }

}

// main coffee machine function that runs Node.js readline method to create a command line interface and read input cases
const runCoffeeMachine = (inv, menu) => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', (input) => {
        switch (input.trim()) {
            case 'r':
            case 'R':
                console.log('Restocking Machine');
                restock(menu, inv)
                mapInventory(inv);
                mapMenu(menu)
                break;
            case 'q':
            case 'Q':
                process.exit(0);
                break;
            default:
                runOrder(input, menu, inv)
                break;
        }
        rl.prompt();
    }).on('close', () => {
        process.exit(0);
    });
}

module.exports = {
    restock,
    inStockCheck,
    calculateStock,
    runCoffeeMachine
}
