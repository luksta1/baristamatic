const { menu, inventory } = require('./menu-inventory')
const { mapInventory, mapMenu } = require('./display');
const { restock } = require('./logic');

const main = () => {
    restock(inventory)
    mapInventory(inventory);
    mapMenu(menu)
}

main();

