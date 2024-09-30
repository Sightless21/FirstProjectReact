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
var book = [
    { title: "The Great Gatsby", genre: 'fiction', price: 320 },
    { title: "War and Peace", genre: 'fiction', price: 250 },
    { title: "Economics 101", genre: 'educational', price: 400 },
    { title: "In Cold Blood", genre: 'non-fiction', price: 300 },
    { title: "The Catcher in the Rye", genre: 'fiction', price: 400 },
];
function filterBook(books) {
    return books.filter(function (books) { return books.genre === 'fiction' && books.price > 300; });
}
function discountBook(books) {
    return books.map(function (books) { return (__assign(__assign({}, books), { price: books.price * 0.9 })); });
}
var filteredBook = filterBook(book);
var discountedBook = discountBook(filteredBook);
console.log(discountedBook);
