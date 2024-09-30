var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
// making a function
// OrderStatus is a Type
function displayOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Your order is pending.");
            break;
        case OrderStatus.Shipped:
            console.log("Your order has been shipped.");
            break;
        case OrderStatus.Cancelled:
            console.log("Your order is cancelled.");
            break;
        default:
            console.log("Unknown order status...");
    }
}
displayOrderStatus(OrderStatus.Cancelled);
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Pending);
