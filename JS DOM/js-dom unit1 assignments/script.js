// personal greetings

const greetings = document.querySelector("#greeting");
const para = document.querySelector("#intro");

greetings.textContent = 'Hi , I am Vinay';
greetings.style.color = 'red';
para.style.fontSize = '18px';

// style your TODO (2nd Assignment)

const tasks = document.querySelectorAll('.task');

tasks.forEach((task)=>{
    task.style.fontStyle = 'italic';
});

tasks[1].style.color = 'lightBlue';


// Image Gallery Caption Switch Assignment 3

const pict = document.querySelector('#picture');
const desc = document.querySelector("#description");
pict.src = 'img2.png';
desc.textContent = `The image of lion is changed to cheetah using javascript dom`


// Assignment 4: List of Favorite Books 

let list = document.querySelector('#bookList');
let books = ["Book A", "Book B", "Book C", "Book D", "Book E"];

books.forEach((book)=>{
    const listItem = document.createElement('li');
    listItem.textContent = book;
    list.appendChild(listItem);
})

//  Assignment 5 multiplication table  

const mulTable = document.querySelector("#multiplicationTable");

const headerRow = document.createElement("tr");

const num = document.createElement('th');
num.innerText = "Number"
const result = document.createElement('th');
result.innerText= "x5 Result";

headerRow.appendChild(num)
headerRow.appendChild(result)

mulTable.appendChild(headerRow)
for(let i =1 ; i<=10;i++){
    const row = document.createElement('tr');
    const col1 = document.createElement('td');
    const col2= document.createElement('td');
    col1.textContent = i;
    col2.textContent = i*5;

    row.appendChild(col1)
    row.appendChild(col2)

    mulTable.appendChild(row)
    
  
}



    



