const readline = require('readline');
const ql = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


ql.question('What is your name : ',(name)=>{
    console.log(`Welcome ${name}`);
    ql.close();
});