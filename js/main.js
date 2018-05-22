const { menu, inventory } = require('./menu-inventory')
const { mapInventory, mapMenu } = require('./display');
const { restock, inStockCheck, runCoffeeMachine } = require('./logic');


// start the program by restocking and checking inventory, printing inventory and menu and starting up the Node interface
const main = () => {
    restock(menu, inventory)
    inStockCheck(menu, inventory)
    mapInventory(inventory);
    mapMenu(menu)
    runCoffeeMachine(inventory, menu)
}

main();

