interface Book {
    title: string
    genre: 'fiction' | 'non-fiction' | 'educational';
    price: number;
}

const books: Book[] = [
    {title:"The Great Gatsby", genre: "fiction", price: 320},
    {title:"War and Peace", genre: "fiction", price: 250},
    {title:"Ecomomics 101", genre: "educational", price: 480},
    {title:"In Cold Blood", genre: "non-fiction", price: 300},
    {title:"The Cather in the Rye", genre: "fiction", price: 400}
];

function filterBookByPrice(books : Book[] ): Book[] {
    let booksfilted = books.filter(books => books.price > 300 && books.genre == 'fiction');
    return booksfilted.map(books=>({...books,price:books.price * 0.9}));
}

let filterProduct = filterBookByPrice(books);

console.log(filterProduct);