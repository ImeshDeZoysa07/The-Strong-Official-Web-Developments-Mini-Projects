// InventoryReport.js

// Sample data representing inventory items
const inventoryItems = [
    { id: 1, name: "Product A", quantity: 10, price: 20 },
    { id: 2, name: "Product B", quantity: 5, price: 30 },
    { id: 3, name: "Product C", quantity: 15, price: 25 }
];

// Function to generate an inventory report
function generateInventoryReport(items) {
    console.log("Inventory Report:");
    console.log("-----------------");
    console.log("ID | Name      | Quantity | Price");
    console.log("--------------------------------");

    items.forEach(item => {
        console.log(`${item.id.toString().padEnd(2)} | ${item.name.padEnd(10)} | ${item.quantity.toString().padEnd(8)} | $${item.price.toFixed(2)}`);
    });

    console.log("--------------------------------");
}

// Generate and display the inventory report
generateInventoryReport(inventoryItems);
