// Define sample sales data
const salesData = [
    { product: "Product A", quantity: 100, price: 20 },
    { product: "Product B", quantity: 150, price: 25 },
    { product: "Product C", quantity: 80, price: 30 },
  ];
  
  // Function to calculate total sales
  function calculateTotalSales(data) {
    let totalSales = 0;
    data.forEach(item => {
      totalSales += item.quantity * item.price;
    });
    return totalSales;
  }
  
  // Function to generate sales report
  function generateSalesReport(data) {
    console.log("Sales Report:");
    console.log("-------------");
    data.forEach(item => {
      console.log(`${item.product}: ${item.quantity} units sold for $${item.price} each`);
    });
    console.log("-------------");
    console.log(`Total Sales: $${calculateTotalSales(data)}`);
  }
  
  // Call the function to generate the report
  generateSalesReport(salesData);
  