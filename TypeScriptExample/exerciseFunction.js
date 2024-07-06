"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//decare array of product 
var product = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffee Maker', price: 2500, category: 'Appliances' }
];
//create functions
function filterProductByPrice(products, filnum) {
    return products.filter(function (product) { return product.price > filnum; });
}
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
//call functions
var filterProduct = filterProductByPrice(product, 10000);
var DiscountProduct = discountProduct(filterProduct);
//console.log(filterProduct);
console.log(DiscountProduct);
