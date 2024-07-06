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
var books = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Ecomomics 101", genre: "educational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Cather in the Rye", genre: "fiction", price: 400 }
];
function filterBookByPrice(books) {
    var booksfilted = books.filter(function (books) { return books.price > 300 && books.genre == 'fiction'; });
    return booksfilted.map(function (books) { return (__assign(__assign({}, books), { price: books.price * 0.9 })); });
}
var filterProduct = filterBookByPrice(books);
console.log(filterProduct);
