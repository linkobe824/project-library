// Node of linked list
class Book {
    constructor(title, author, pages, readed){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readed = readed;

        this.next = null;
        this.list = null;
        this.id = null;
    }

    removeFromList(){
        if(!this.list || !this.list.head){
            return; // node is not linked to any list or list is empty
        }

        if(this.list.head === this){
            this.list.head = this.next;
        } else {
            let cur = this.list.head;
            while(cur.next !== this){
                cur = cur.next;
            }

            cur.next = this.next;
        }

        this.list = null;
    }

    createCard(){
        //get the cards container
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
        cardContainer.classList.add('card', `_${this.id}`);
        titleHeading.classList.add('title');
        authorPar.classList.add('author');
        pagesPar.classList.add('pages');
        btnContainer.classList.add('btn-container');
        btnRemove.classList.add('remove-btn');
        btnReaded.classList.add('btn')

        // logic for readed/not-readed classes
        if(!this.readed) {
            btnReaded.classList.add('not-readed-btn');
            btnReaded.textContent = 'Not Readed';
            cardContainer.classList.add('not-readed');
        }else {
            btnReaded.classList.add('readed-btn')
            btnReaded.textContent = 'Readed';
        }

        // add content to elements
        titleHeading.textContent = this.title;
        authorPar.textContent = 'Author: ';
        pagesPar.textContent = 'Pages: '
        pagesSpan.textContent = this.pages;
        authorSpan.textContent = this.author;
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
            
        // btnRemove logic
        btnRemove.addEventListener('click' , () => {
            this.removeFromList();
            this.removeFromDOM();
        })

        // btnReaded logic
        btnReaded.addEventListener('click', () => {
            const card = document.querySelector(`._${this.id}`);
            const btn = document.querySelector(`._${this.id}>.btn-container>.btn`);
            if(!card.classList.contains('not-readed')){
                card.classList.add('not-readed');
                btn.classList.remove('readed-btn');
                btn.classList.add('not-readed-btn');
                btn.textContent = 'Not Readed';
                this.readed = false;
            }else {
                card.classList.remove('not-readed');
                btn.classList.remove('not-readed-btn');
                btn.classList.add('readed-btn')
                btn.textContent = 'Readed';
                this.readed = true;
            }
        })
    }

    removeFromDOM(){
        const card = document.querySelector(`._${this.id}`);
        card.remove();
    }
}


class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(val) {
        const newNode = val;
        newNode.list = this;

        if(!this.head) {
            this.head = newNode;
        }
        else {
            let cur = this.head;
            while(cur.next) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.size++;
        newNode.id = this.size;
    }
}

// list to store books
const myLibrary = new LinkedList();

//test
const bok = new Book('harry potter', 'jk rowling', 500, true);
myLibrary.push(bok);
bok.createCard();

// //create book
function createAndAddNewBook(){
    const addBtn = document.querySelector('.add');
    
    addBtn.addEventListener('click', () => {
        const title = document.querySelector("input[name='title']").value;
        const author = document.querySelector("input[name='author']").value;
        const pages = document.querySelector("input[name='pages']").value;
        const readed = document.querySelector("#readed").checked;

        const book = new Book(title, author, pages, readed);
        myLibrary.push(book);
        book.createCard();
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
    // displayBooks(myLibrary);
    addBookButton();
    formButtons();
    createAndAddNewBook()
}



main();