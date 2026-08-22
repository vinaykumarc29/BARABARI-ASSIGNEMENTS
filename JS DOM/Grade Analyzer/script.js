const inputField =document.querySelector("#input-grade");
const addGradeBtn = document.querySelector('.add-grade');
const analyzeGradeBtn = document.querySelector('.analyze-grade');
const resetBtn = document.querySelector('.reset');
const currentGradesContainer = document.querySelector('.current-grades-container');
const analysisContainer = document.querySelector('.analysis-container');
const sortingConatiner = document.querySelector('.sorted-grades');
const passingGradesContainer = document.querySelector('.passing-grades')

//grades statistics
const totalGrades = document.querySelector('.total-grades');
const highestGrade = document.querySelector('.highest-grade');
const lowestGrade = document.querySelector('.lowest-grade');
const averageGrade = document.querySelector('.average-grade');
const passingRate = document.querySelector('.passing-rate');
const averagePassingRate = document.querySelector('.average-passing-rate');

let grades = [];


//shows the current grades 
const renderGrades = ()=>{
    currentGradesContainer.innerHTML = `<h2>Current Grades</h2>`;
    if(grades.length == 0){
        let p = document.createElement('p');
        p.innerText = 'NO Grades Added Yet!!';
        currentGradesContainer.append(p);
        return
    }

    for(let i=0; i<grades.length ; i++){
        let div = document.createElement('div');
        let span = document.createElement('span');
        span.setAttribute('class',`marks`);

        if(grades[i]>=40 && grades[i] < 60){
            span.classList.add('border-pass');
        }else if(grades[i]>=60 && grades[i] <80){
            span.classList.add('average');
        }else if(grades[i] >= 80){
            span.classList.add('distinction');
        }

        span.innerText = grades[i];
        div.innerText = `Student ${i+1}` ;
        div.append(span);

        currentGradesContainer.append(div);

    }
}

const calcHighestGrade = (arr)=>{
    let highest = arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i] > highest){
            highest = arr[i];
        }
    }
    return highest;
} 

const calcLowestGrade = (arr)=>{
    let lowest = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]<lowest){
            lowest = arr[i];
        }
    }
    return lowest;
}
const calcAverageGrade = (arr)=>{
    let average = 0;
    console.log(`array is `,arr)
    let sum = arr.reduce((prev,curr)=>{
    return prev + curr;
    },0);
    

    average = sum / arr.length
    console.log(sum);
    return Math.floor(average)

}

const gradesStatistics = ()=>{
    if(grades.length == 0){
        return
    }
    totalGrades.innerText = grades.length;
    highestGrade.innerText = calcHighestGrade(grades);
    lowestGrade.innerText = calcLowestGrade(grades);
    averageGrade.innerText = calcAverageGrade(grades);
}

//sorts grades 
const gradeSorting = (arr)=>{
    let sortedArray = arr.sort((a,b)=>a-b);
    console.log(`sorted array ${sortedArray}`);
    renderAnalysisContainer(sortedArray , sortingConatiner);
  
}

//passing grades generater  func 
const passingGrades = (arr)=>{
    let array = arr.filter((ele)=>ele>=40);
    console.log(array);
    renderAnalysisContainer(array,passingGradesContainer);
    passingRate.innerText = (array.length/ grades.length *100) + `%`;
    averagePassingRate.innerText = array.length== 0 ? 0: calcAverageGrade(array);
}


//render analysis of grades


const renderAnalysisContainer = (arr , container)=>{

    console.log(container);

    if(arr.length == 0){
        return ;
    }

for(let i=0; i<arr.length ; i++){
        let div = document.createElement('div');
        let span = document.createElement('span');
        span.setAttribute('class',`marks`);

        if(arr[i]>=40 && arr[i] < 60){
            span.classList.add('border-pass');
        }else if(arr[i]>=60 && arr[i] <80){
            span.classList.add('average');
        }else if(arr[i] > 80){
            span.classList.add('distinction');
        }

        span.innerText = arr[i];
        div.innerText = `Student ${i+1}` ;
        div.append(span);

        container.append(div);

    }

    
}

//reset analysis container 

const resetAnaysisContainer = ()=>{
    console.log('reset is done ')
    analysisContainer.classList.add('hidden');
    sortingConatiner.innerHTML = `<h2>Sorted Grades (low to high)</h2>`;
    passingGradesContainer.innerHTML = ``;
    passingRate.innerText = ``;
    averagePassingRate.innerText = ``;

}



// adds the grades

const addGrade = ()=>{
    let grade = Number(inputField.value);
    if(grade >100 || grade==""){
        alert('Enter Value less that 100 and field should not be Empty !!');
        inputField.value = ``;
        return;
    }
    grades.push(grade);
    inputField.value = ``;
    console.log(grades);
    renderGrades()
}

addGradeBtn.addEventListener('click',addGrade);

inputField.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        addGrade();
    }
});

resetBtn.addEventListener('click',()=>{
    grades.length = 0;
    resetAnaysisContainer();
    renderGrades();
});

analyzeGradeBtn.addEventListener('click',()=>{
    if(grades.length == 0){
        return;
    }
    analysisContainer.classList.remove('hidden');
    gradesStatistics();
    gradeSorting(grades);
    passingGrades(grades);
});

renderGrades();

