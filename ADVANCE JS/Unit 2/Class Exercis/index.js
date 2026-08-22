//task -1

// try {
//   let result = num + 2; // reference  error
// } catch (error) {
//   console.log(error);
// }

// try {
//   let str = null;
//   console.log(str.length); // typeError
// } catch (error) {
//   console.log(error);
// }
// try {
//   let arr = new Array(-5); //range error
// } catch (error) {
//   console.log(error);
// }

// try {
//   decodeURIComponent("%");
// } catch (error) {
//   console.log(error);
// }

// console.log(`end of program`);

//Task-2

// class validateError extends Error{
//     submitForm = (data)=>{
//         if(!data.name){
//             throw new Error(`Name cannot be empty!`);
//         }
//         if(data.age <=0){
//             throw new Error(`Age Cant be zero or less than zero`);
//         }

//         console.log(`data is verified no errors !!`)
//     }
// }

// try{
//     let obj = new validateError();
//     obj.submitForm({name:`vinay`,age:0});
// }catch(err){
//     console.log(err);
// }

//Task -3

// In this task u can edit the data.json and make some mistake in it to check if error handling is working or not !

// const fs = require("fs");

// function loadConfig(path) {
//   try {
//     const data = fs.readFileSync(path, "utf8");

//     try {
//     JSON.parse(data);


//     } catch (error) {
//       console.log(`Invalid Json`);
//       return {
//         "theme":"dark",
//         "lang":"en"
//       }
//     }

//     return data
//   } catch (error) {
//     console.log(`incorrect file path!`);
//   }
// }

// let result = loadConfig(
//   "/home/vinaykumarc/Desktop/BARABARI-ASSIGNEMENTS/ADVANCE JS/Unit 2/Class Exercis/data.json",
// );

// console.log(result)


//Task -4 

const readlineasync = require("readline-sync");

try{
    const input = readlineasync.question('What is Your Age? :');
    const age = Number(input);

    if(isNaN(age) || age<0 || input.trim() ===""){
        throw new Error('Invalid Age !!');
        
    }
    console.log(`Thankyou Your Age IS :${age}`);

}catch(error){
    console.log(error);

}





