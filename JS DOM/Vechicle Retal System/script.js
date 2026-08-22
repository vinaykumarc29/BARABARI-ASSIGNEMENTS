class vehicle {
    constructor(name,type, price){
        this.name = name ;
        this.type = type ;
        this.price = price ;
        this.id = Math.floor(Math.random()*30000);
    }

    getCost = (days)=>{
        return this.price * days;
    }
}

class Car extends vehicle {
    constructor(name,type, price,seats){
        super(name,type, price);
        this.seats = seats ;
    }

    getCost = (days)=>{
        return `Rented a ${this.name} car with ${this.seats} seats for ${days} days. Total cost: $${this.price * days}`
    }
}

class Bike extends vehicle{
    constructor(name,type,price,desc){
        super(name,type,price);
        this.description = desc
    }

    getCost = (days)=>{
        return `Rented a ${this.name} bike.${this.description} for ${days} days. Total cost: $${this.price * days}`
    }
}



class vehiclesList {
    constructor(){
        this.vehicles = [];
    }

    addVehicle(vech){
        this.vehicles.push(vech);
        displayVehicles(this.vehicles);
    }
}




const vehicleContainer = document.querySelector('.vehicles-container');
const vehicleSelector = document.querySelector('#vehicle-select');
const noOfDays = document.querySelector('#days');
const submitBtn = document.querySelector('#rent-btn');
const resultContainer = document.querySelector('.result')


const displayVehicles = (vehicles)=>{
    

    // let vehicles = new vehiclesList.vehicles;

    if(vehicles.length == 0){
        vehicleContainer.innerHTML=``
        return ;
    }

    vehicleContainer.innerHTML=``;

    let vechicleCard = ``;
    vehicles.forEach((vech)=>{

    vechicleCard += `
      <div class="vehicle-card ${vech.type}">
      <h3>${vech.name}</h3>
      <p>Type: ${vech.type}</p>
      <p>Price: $${vech.price} per day</p>
      <p>${vech.type == 'car' ? `Seats:${vech.seats}`:`Helmet Included`}</p>
    </div>`
    });

    vehicleContainer.innerHTML= vechicleCard;
}

const vehicleListObj = new vehiclesList();

vehicleListObj.addVehicle(new Car('Honda Civic', 'car', 50, 5));
vehicleListObj.addVehicle(new Bike('Royal Enfield','bike',50,`Helmet Included`));
vehicleListObj.addVehicle(new Bike(`Hero Honda`,`bike`,15,`Helmet Not Included`));




const updateOptions =()=>{
    // vehicleSelector.innerHTML = `<option value="" disabled selected>Choose a vehicle</option>`;

    let optionHtml =``;
    
    console.log(vehicleListObj.vehicles);
    vehicleListObj.vehicles.forEach((vech)=>{

        optionHtml += `<option value=${vech.id}>${vech.name} -- ${vech.type} , $${vech.price}/day ${vech.type == `car`?`${vech.seats} seats`:`${vech.description}`}</option>`
    });
    vehicleSelector.innerHTML+=optionHtml;
}

//submit button event listener

submitBtn.addEventListener('click',()=>{
    console.log(vehicleSelector.value);
    if(vehicleSelector.value == ``){
        alert("Please Select A Vechicle");
        return;
    }

    vehicleListObj.vehicles.forEach((vech)=>{
        if(vehicleSelector.value == vech.id){
            let days = noOfDays.value;
            resultContainer.textContent = vech.getCost(days);
            resultContainer.classList.add('success');

        }
    });

});


updateOptions();