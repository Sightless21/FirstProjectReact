interface Book {
    title: string;
    genre: 'fiction' | 'non-fiction' | 'educational';
    price: number;
}

const book: Book[] = [
    { title: "The Great Gatsby", genre: 'fiction', price: 320 },
    { title: "War and Peace", genre: 'fiction', price: 250 },
    { title: "Economics 101", genre: 'educational', price: 400 },
    { title: "In Cold Blood", genre: 'non-fiction', price: 300 },
    { title: "The Catcher in the Rye", genre: 'fiction', price: 400 },
];

function filterBook(books: Book[]): Book[] {
    return books.filter(books => books.genre === 'fiction' && books.price > 300)
}

function discountBook(books: Book[]): Book[] {
    return books.map(books => ({...books, price: books.price*0.9}))
}

let filteredBook = filterBook(book);
let discountedBook = discountBook(filteredBook);

console.log(discountedBook);