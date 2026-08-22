// Exercise 1

// const heading = document.getElementById("mainHeading");
// const para = document.getElementById("para")

// console.log(heading)

// heading.innerHTML = "<p style='color:green'><strong>This is bold text now!</strong> </p>"


//Exercise 2

// const notes = document.querySelectorAll(".notes");


// notes.forEach((note)=>{

//     note.innerHTML = `<p style='font-style:italic;'>${note.innerText}</p>`
//     console.log(note.innerText)
// }
// )

//Exercise 3

// const container = document.querySelector(".container");
// const para2 = document.createElement('p');
// para2.id='para2';
// para2.textContent="this para was added by java script !!";

// container.appendChild(para2);

//Exercise 4

// const photo = document.querySelector("#photo");

// photo.setAttribute("src","img2.png");

// console.log(photo);
// photo.src = 'img2.png';





//Exercise 5

// const heading = document.querySelector("#main-heading");
// const desc = document.getElementsByClassName("description")[0];
// const btns = document.querySelectorAll('button');
// const para = document.querySelector('span');
// console.log(heading.innerText);
// heading.innerHTML = ` Welcome <span>Student</span>`;
// desc.textContent='Dom is powerful';
// desc.style = 'color:red';
// btns[1].innerText = 'clicked';
// console.log(`inner text is "${para.innerText}" and Text content is "${para.textContent}"`);

//Exercise 6
// const box = document.querySelector("#box");
// let count = 1;
// for(let i=0;i<5;i++){
//     const row = document.createElement('tr');
//     for(let j=0;j<5;j++){
//         const col = document.createElement('td');
//         col.textContent = count;
//         row.appendChild(col);
//         count++;
//     }
//     box.appendChild(row);
// }



