//Books Lists
let isbnL = document.querySelector('.isbn-list');
let authorL = document.querySelector('.author-list');
let bookL = document.querySelector('.book-list');
let actionL = document.querySelector('.action-list');

let bookArray = [];
let idecko = null;
(localStorage.getItem('ID') == null) ? idecko = 1 : idecko = Number(localStorage.getItem('ID'));



function loadData() {
    // let zero = localStorage.getItem('book0');
    let first = localStorage.getItem('book-1');
    let second = localStorage.getItem('book-2');
    let third = localStorage.getItem('book-3');
    
}
// let how = JSON.parse(localStorage.getItem('book-1'));
// console.log(how)
// console.log(typeof how)  // How to return original object from that string ==> JSON.parse
// console.log(how[Object.keys(how)[0]])  //How to save normal object to localStorage?





class Book {
    constructor(author, book, isbn) {
        this.author = author;
        this.book = book;
        this.isbn = isbn;
    }

    create() {
        const rows = document.querySelector('.rows');
    //chill way ->    
        let bigLi = `
        <ul class="bigLi">
            <p>${this.isbn}</p>
            <p>${this.author}</p>
            <p>${this.book}</p>
            <i class="li-close"><button class="li-close-btn">Delete</button></i>
        </ul>`;
        
        rows.innerHTML += bigLi;
    //pain way ->
        // bigLi.classList.add('bigLi');
        // let liIsbn = document.createElement('p');
        // let liAuthor = document.createElement('p');
        // let liBook = document.createElement('p');
        // let liAction = document.createElement('i');
        // bigLi.appendChild(liIsbn);
        // bigLi.appendChild(liAuthor);
        // bigLi.appendChild(liBook);
        // bigLi.appendChild(liAction);
        // liIsbn.innerHTML = this.isbn;
        // liAuthor.innerHTML = this.author;
        // liBook.innerHTML = this.book;
        // liAction.innerHTML = '<button>Delete</button>';
        // liAction.classList.add('li-close');
        // let myBtn = liAction.firstChild
    //->    
    Book.createBtn();
        // createBtnCall()
        // let myBtn = document.querySelector('.li-close-btn');
        // myBtn.addEventListener('click', (e)=> Book.deleteLi(e.target));
    }

    static createBtn() {
        let myBtn = document.querySelectorAll('.li-close-btn');
        myBtn.forEach(el=> el.addEventListener('click', (e)=> Book.deleteLi(e.target)));
    }

    static clear() {
        document.querySelector('#isbn').value = '';
        document.querySelector('#auth').value = '';
        document.querySelector('.form-book').value = '';
    }
    static deleteLi(element) {
        if (element.parentElement.classList.contains('li-close')) {
            element.parentElement.parentElement.remove()
        }
    }
    static likes = 0;

    static oldLocale() {
        let books = JSON.parse(localStorage.getItem('objekty'));
        return books;
    }

    newLocale(id) { 
        id = idecko;
        let objBook = {
            isb: `${this.isbn}`,
            author: `${this.author}`,
            book: `${this.book}`
        }
        // let booksFromLocale = Book.oldLocale();
        // bookArray.push(booksFromLocale);
        // bookArray.push(objBook);
        localStorage.setItem(`book-${id}`, JSON.stringify(objBook));
        // console.log(bookArray)
        Store.plusId()
        Store.saveId()
    }
}

class UI {
    constructor(liI, liAu, liB, liAc) {
        liI,
        liAu,
        liB,
        liAc
    }

    static oldCreate() {
        // let value;
        // for (let val =1; val<4; val++) {
            
        //     value = JSON.parse(localStorage.getItem(`book-${val}`));
        // }
        let value1 = JSON.parse(localStorage.getItem('book-1'));
        let value2 = JSON.parse(localStorage.getItem('book-2'));
        let value3 = JSON.parse(localStorage.getItem('book-3'));

        (value1 === null & value2 === null & value3 === null) ? 
            ()=>{value1=1; value2=2; value3=3} :
        ()=>{
            let first = value1[Object.keys(value1)[0]];
            let second = value1[Object.keys(value1)[1]];
            let third = value1[Object.keys(value1)[2]];
            console.log(value1)
            // console.log(first, second, third);
            const rows = document.querySelector('.rows');   
            let bigLi = `
            <ul class="bigLi">
                <p>${first}</p>
                <p>${second}</p>
                <p>${third}</p>
                <i class="li-close"><button class="li-close-btn">Delete</button></i>
            </ul>`;
            rows.innerHTML += bigLi;
        }
        Book.createBtn();
    }
}
UI.oldCreate()

class Store {
    static getStored() {
        let books;
        if (localStorage.getItem('saved') == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('book'))
        }
        return books;
    }
    static setStored(obj) {
        let booksFromLocal = Store.getStored();
        booksFromLocal.push(obj);
        localStorage.setItem('book', JSON.stringify(booksFromLocal));  
    }

    static plusId() {
        idecko +=1;
    }

    static saveId() {
        localStorage.setItem('ID', idecko)
    }

}

function inputValue() {
    //increment
    //Form inputs
 let inputAuthor = document.querySelector('#auth').value;
 let inputBook = document.querySelector('.form-book').value;
 let inputIsbn = document.querySelector('.form-isbn').value;
 myBook = new Book(inputAuthor, inputBook, inputIsbn);
 myBook.create();
 myBook.newLocale();
 Book.clear();
//  consoleLocal()
}

const saveBtn = document.querySelector('.save-btn');
saveBtn.addEventListener('click', inputValue);

// function consoleLocal() {
//     console.log(localStorage)
// }
// function createBtnCall() {
//     let myBtn = document.querySelector('.li-close-btn');
//     myBtn.addEventListener('click', (e)=> Book.deleteLi(e.target));
// }
