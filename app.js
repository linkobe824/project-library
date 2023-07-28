const myLibrary = [
                    {title: "harry potter", author: "jk rowling", pages: "300", readed:true },
                    {title: "davinci code", author: "dan brown", pages: "400", readed:true },
                    {title: "game of thrones", author: "grr martin", pages: "300", readed:false }
];

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

