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

//Task 4 Calculates the total price of an order
function calculateOrderTotal(order){
    let totalPrice = 0;
//Searches inventory for the item
    order.items.forEach(orderedItem => {

        let itemInStock = inventory.find(item => item.Name === orderedItem.Name);
//Calculates the total price by multiplying the quantity in the order by the price of the selected item
        if (itemInStock) {
            totalPrice += itemInStock.price *orderedItem.quantity;

        }


    }
);
//logs the price
console.log(totalPrice);
}

//checks the function using the order1
calculateOrderTotal(order1);

//Task 5 Createa a function to complete an order
function completeOrder(customerName){
//Checks order if it is in the orders array
    let orderStatusCheck = orders.find(orderStatusCheck => orderStatusCheck.customerName === customerName);
//Changes status to complete
    if (orderStatusCheck){ orderStatusCheck.status  = "Complete";
    console.log("Order Complete");
    }
    else{
    console.log("Error not found");
    }
}
//Checks to see if the function works
completeOrder("Jorge");
console.log(orders);

//Task 6 create a function to check on pending orders
function checkPendingOrders(){
    orders.forEach(order => {
        if (order.status === "Pending"){
            console.log("Order still pending");
        }
    })
}
