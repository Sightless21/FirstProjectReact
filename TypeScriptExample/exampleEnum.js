//deine value type Enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function DisplayOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Your Order is pendding");
            break;
        case OrderStatus.Shipped:
            console.log("Your Order has been Shipped");
            break;
        case OrderStatus.Cancelled:
            console.log("Your Order is Cacelled");
            break;
        default:
            console.log("Unknow Order status");
    }
}
//test funtions
DisplayOrderStatus(OrderStatus.Shipped);
DisplayOrderStatus(OrderStatus.Cancelled);
