const axios = require('axios');
const Url = `https://gist.githubusercontent.com/Shadid12/18642d735214920921f4f470300be11e/raw/6dcf7b456c40f110c313bbb1678474b01756bc1a/restaurants.json`;

let data = [];

axios.get(Url).then((res)=>{
    // console.log(res);
    data = res.data;
    // console.log(data);
    
    let filteredData = data.map((ele)=>{
        let totalGrade = ele.grades.reduce((prev,curr)=>{
            return prev + curr
        },0);

        let averageGrade =totalGrade/ ele.grades.length;

        return {
            Name:ele.name,
            Grade:averageGrade
        }
    });

    console.log(filteredData);

}).catch((error)=>{
    console.log(error);
    return;
});


