// Task 1

// const fs = require('fs');

// const data = fs.readFileSync('/home/vinaykumar/Desktop/Main Projects/BARABARI-ASSIGNEMENTS/Backend Module 1/Unit 2/Class Exercise/input.txt','utf-8');

// fs.writeFileSync('/home/vinaykumar/Desktop/Main Projects/BARABARI-ASSIGNEMENTS/Backend Module 1/Unit 2/Class Exercise/output.txt',`${data} \ncreated at : ${new Date()}`);

// console.log(data);

// Task 2

const { error } = require('console');
const fs = require('fs');


fs.readFile('/home/vinaykumar/Desktop/Main Projects/BARABARI-ASSIGNEMENTS/Backend Module 1/Unit 2/Class Exercise/starter.txt', 'utf-8',(error,data)=>{
    console.log(data);

    fs.readFile(`/home/vinaykumar/Desktop/Main Projects/BARABARI-ASSIGNEMENTS/Backend Module 1/Unit 2/Class Exercise/${data}`,'utf-8',(error,data1)=>{
        console.log(data1);
        fs.readFile('/home/vinaykumar/Desktop/Main Projects/BARABARI-ASSIGNEMENTS/Backend Module 1/Unit 2/Class Exercise/append.txt','utf-8',(error,data2)=>{
            console.log(data2);

            fs.writeFile('/home/vinaykumar/Desktop/Main Projects/BARABARI-ASSIGNEMENTS/Backend Module 1/Unit 2/Class Exercise/output1.txt', `${data1}\n${data2}\n${new Date()}`,()=>{
                console.log(`data is appended to output1.txt`);
            });
        })
    })
})

