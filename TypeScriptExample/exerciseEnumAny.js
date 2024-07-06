var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
function DisplayProductStatus(products) {
    products.forEach(function (product) {
        console.log("Product: ".concat(product.name) + ', ' + "Status: ".concat(product.status) + ', ' + "price: ".concat(product.price));
    });
}
DisplayProductStatus(products);
