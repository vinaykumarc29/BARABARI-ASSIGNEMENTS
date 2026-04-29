const exactTime = document.querySelector('#time');
const exactDate = document.querySelector('#date');
const changeFormat = document.querySelector('#btn');
let format12 = true ;


const updateTime = (()=>{ 
    let date = new Date();
    exactTime.textContent = date.toLocaleTimeString('en-IN',{hour12:format12});
    console.log(date.toLocaleTimeString('en-IN',{hour12:format12}));
});

changeFormat.addEventListener('click',()=>{
    console.log('button clicked!!')
    format12 = format12 ? false :true ;
    if(format12){
        changeFormat.innerText ='Switch To 24-Hour Format';
    }else{
        changeFormat.innerText ='Switch To 12-Hour Format';
    }
})

const date = new Date()
let curr_date = String(date.getDate()).padStart(2,0);

let curr_mon = String(date.getMonth() + 1).padStart(2,0);

let curr_year = String(date.getFullYear());

let formatedDate = `${curr_date}-${curr_mon}-${curr_year}`;

exactDate.textContent = formatedDate;


setInterval(updateTime,1000);

