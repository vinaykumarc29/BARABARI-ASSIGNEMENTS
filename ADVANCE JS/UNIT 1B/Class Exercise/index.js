const axios = require("axios");
const readlinesync = require("readline-sync");

let username = readlinesync.question("Enter Username :");

axios
  .get(`https://api.github.com/users/${username}`)
  .then((res) => {
    // console.log(res.data);
    console.log(
      `\nName: ${res.data.name} \n Username: ${res.data.login} \n Followers: ${res.data.followers} \n Account Created On: ${res.data.created_at}`,
    );
  })
  .catch((error) => {
    console.log(`Something went wrong ${error}`);
  });
