//Task 1 create an inventory for the coffee shop
let inventory = [
    {Name: "Espresso", price: 10, quantity: 50},
    {Name: "Cappucino", price: 7, quantity: 100},
    {Name: "Thai Tea", price: 15, quantity: 200},
    {Name: "Kava", price: 25, quantity: 250}
];
//Task 2 create an empty Array called orders so you can add more orders
let orders = [];
//creates order 1 to go into the array orders
let order1 = {
    customerName : "Sanjay",
    [
        {Name: "Espresso", quantity: 3}
    ],
    status: "Complete"
};
//Puts order1 in the orders array
orders.push(order1);

//Task 3 create a function to place a new order
function placeOrder(customerName, itemsOrdered){
    for (let i = 0; i < itemsOrdered.length; i++){
        let orderedItem = itemsOrdered[i];
        let itemStockCheck = inventory.find(item => item.Name === orderedItem.Name);
//Checks if the order is an item that doesnt exist or if the order quantity is too high
        if (!itemStockCheck || itemStockCheck.stock < orderedItem.quantity){
            console.log("Error, Item doesn't exist or is out of stock");
        }
        itemsOrdered.forEach(orderedItem => {
            let itemStockCheck = inventory.find(item => item.Name === orderedItem.name);
            itemStockCheck.quantity -= orderedItem.quantity;
        });
        let orderUpdate = 
        {
            customerName: customerName,
            items: itemsOrdered,
            status: "pending"
        };
//puts the new order into the orders array created in task 2
        orders.push(orderUpdate);
    }

}
//Used to test the function to see if it works
placeOrder("Jorge",
    [{Name: "Thai Tea", quantity: 1100}]
);

console.log(inventory);
console.log(orders);
