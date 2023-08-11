const myLibrary = [
                    {title: "harry potter", author: "jk rowling", pages: "300", readed:true},
                    {title: "davinci code", author: "dan brown", pages: "400", readed:true},
                    {title: "game of thrones", author: "grr martin", pages: "300", readed:false}
];

class Book {
    constructor(title, author, pages, readed = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readed = readed;
    }

    remove(){
        
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);

}


//create book
function createAndAddNewBook(){
    const addBtn = document.querySelector('.add');
    
    addBtn.addEventListener('click', () => {
        const title = document.querySelector("input[name='title']").value;
        const author = document.querySelector("input[name='author']").value;
        const pages = document.querySelector("input[name='pages']").value;
        const readed = document.querySelector("#readed").checked;

        const bookObj = new Book(title, author, pages, readed);
        // let bookObjString = JSON.stringify(bookObj);
        // addBookToLibrary(JSON.parse(bookObjString));
        addBookToLibrary(bookObj);

        //add card to the page.
        createCard(bookObj);

        //clear input values
        clearInputs();
    });
}

function clearInputs(){
    const title = document.querySelector("input[name='title']");
    const author = document.querySelector("input[name='author']");
    const pages = document.querySelector("input[name='pages']");
    const readed = document.querySelector("#readed");

    title.value = "";
    author.value = "";
    pages.value = "";
    readed.checked = true;
}

//create card and place it in the DOM
function createCard(book) {
    //deconstruct object
    const {title, author, pages, readed} = book;
    
    // get the cards container
    const container = document.querySelector('.container');
    // craete elements
    const cardContainer = document.createElement('div');
    const titleHeading = document.createElement('h2');
    const authorPar = document.createElement('p');
    const authorSpan = document.createElement('span');
    const pagesPar = document.createElement('p');
    const pagesSpan = document.createElement('span');
    const btnContainer = document.createElement('div');
    const btnRemove = document.createElement('button');
    const btnReaded = document.createElement('button');
    
    // add html classes
    cardContainer.classList.add('card');
    titleHeading.classList.add('title');
    authorPar.classList.add('author');
    pagesPar.classList.add('pages');
    btnContainer.classList.add('btn-container');
    btnRemove.classList.add('remove-btn');

    // logic for readed/not-readed classes
    if(!readed) {
        btnReaded.classList.add('not-readed-btn');
        btnReaded.textContent = 'Not Readed';
        cardContainer.classList.add('not-readed');
    }else {
        btnReaded.classList.add('readed-btn')
        btnReaded.textContent = 'Readed';
    }

    // add content to elements
    titleHeading.textContent = title;
    authorPar.textContent = 'Author: ';
    pagesPar.textContent = 'Pages: '
    pagesSpan.textContent = pages;
    authorSpan.textContent = author;
    btnRemove.textContent = 'Remove';

    // create child-parent relationship
    cardContainer.appendChild(titleHeading);
    cardContainer.appendChild(authorPar);
    authorPar.appendChild(authorSpan);
    cardContainer.appendChild(pagesPar);
    pagesPar.appendChild(pagesSpan);
    cardContainer.appendChild(btnContainer);
    btnContainer.appendChild(btnRemove);
    btnContainer.appendChild(btnReaded);
    //append the card to the container
    container.appendChild(cardContainer);
}


//if the library has books already in it, it will display them.
function displayBooks(library) {
    library.forEach(book => createCard(book));
}

// pop up form
function addBookButton(){
    const addBtn = document.querySelector('.book-add');
    addBtn.addEventListener('click', openTheForm);
}

function formButtons(){
    const cancelBtn = document.querySelector('#cancelBtn');
    cancelBtn.addEventListener('click', closeTheForm);
}

function openTheForm() {
    document.querySelector(".addBookPopup ").style.display = "block";
}

function closeTheForm() {
    document.querySelector(".addBookPopup ").style.display = "none";
}

function main(){
    displayBooks(myLibrary);
    addBookButton();
    formButtons();
    createAndAddNewBook()
}

main();