const { stdin, stdout } = require("process");
const readline = require("readline");

const ql = readline.createInterface({
  input: stdin,
  output: stdout,
});
const user = {};
ql.question("What is your name :", (name) => {
  user.name = name;
  ql.question("What is your age :", (age) => {
    user.age = age;
    ql.question("What is your city :", (city) => {
      user.city = city;

      ql.close();
      console.log(`User Details`);

      console.log(
        `Name : ${user.name}\nAge : ${user.age}\ncity : ${user.city}`,
      );
    });
  });
});
