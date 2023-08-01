const myLibrary = [
                    {title: "harry potter", author: "jk rowling", pages: "300", readed:true },
                    {title: "davinci code", author: "dan brown", pages: "400", readed:true },
                    {title: "game of thrones", author: "grr martin", pages: "300", readed:false }
];

function Book(title, author, pages, readed=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function createCard(book) {
    const {title, author, pages, readed} = book;
    
    const container = document.querySelector('.container');
    const cardContainer = document.createElement('div');
    const titleHeading = document.createElement('h2');
    const authorPar = document.createElement('p');
    const authorSpan = document.createElement('span');
    const pagesPar = document.createElement('p');
    const pagesSpan = document.createElement('span');
    const btnContainer = document.createElement('div');
    const btnRemove = document.createElement('button');
    const btnReaded = document.createElement('button');
    
    cardContainer.classList.add('card');
    titleHeading.classList.add('title');
    authorPar.classList.add('author');
    pagesPar.classList.add('pages');
    btnContainer.classList.add('btn-container');
    btnRemove.classList.add('remove-btn');

    if(!readed) {
        btnReaded.classList.add('not-readed-btn');
        btnReaded.textContent = 'Not Readed';
        cardContainer.classList.add('not-readed');
    }else {
        btnReaded.classList.add('readed-btn')
        btnReaded.textContent = 'Readed';
    }

    titleHeading.textContent = title;
    authorPar.textContent = 'Author: ';
    pagesPar.textContent = 'Pages: '
    pagesSpan.textContent = pages;
    authorSpan.textContent = author;
    btnRemove.textContent = 'Remove';

    cardContainer.appendChild(titleHeading);
    cardContainer.appendChild(authorPar);
    authorPar.appendChild(authorSpan);
    cardContainer.appendChild(pagesPar);
    pagesPar.appendChild(pagesSpan);
    cardContainer.appendChild(btnContainer);
    btnContainer.appendChild(btnRemove);
    btnContainer.appendChild(btnReaded);
    container.appendChild(cardContainer);
}

function displayBooks(library) {
    library.forEach(book => createCard(book));
}

displayBooks(myLibrary);