// class Pet {
//     constructor(name, age, type, breed, colour, time) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed
//         this.colour = colour;
//         this.lastFed = time;
        
//     }
// get petInfo () {
//     return `${this.name} is a ${this.type}, ${this.age} year(s) old`;
// }

//     lastFed (time) {
//         this.lastFed = time;
//         return `Last feed: ${this.lastFed} for ${this.name}`;

//     }
//     if (time - this.lastFed > 4){
//             return `I'm hungry`
//         } else {
//             return `I'll eat later`
//         }
    
//     class food extends Pet {
//         constructor(name, age, type, breed, colour, time, happiness, food)
//         super(name, age, type, breed, colour, time, happiness);
//     }
//     giveFood(){
//         score += 20
//         return `Happiness: ${score}`
//     }

// }


// // class PetMeds extends Pet {
// //     constructor(name, age, type, breed, colour, time, mtime) {
// //         super(name, age, type, breed, colour, time);
// //         this.lastMeds = mtime;
// //     }
// //     giveMeds (time) {
// //         this.lastMeds = time;
// //         return `Last meds updated to: ${this.lastMeds} for ${this.name}`

// //     }
// // }

// const bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
// bella.fullName = "Bella Crompton"
// console.log(bella)

// //const barney = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&G", "10:00", "13:00");
// //const betty = new Pet("Betty", 4, "Dog", "SH", "White", "10:00")


// //console.log(betty)


// //console.log(bella)
// //console.log(bella.feedPet("15:00"))
// //console.log(bella)

const input = document.getElementById("input");
const button = document.getElementById("button");
const peth1 = document.getElementById("peth1");
const hide = document.getElementById("hide");
const image = document.getElementById("image");
const happyCat = document.getElementById("happyCat");
const sadCat = document.getElementById("sadCat");
const sleepingCat = document.getElementById("sleepingCat");
const lovedCat = document.getElementById("lovedCat");
const angryCat = document.getElementById("angryCat");
const cryingCat = document.getElementById("cryingCat");

const gameOver = document.getElementById("gameOver");


const health = document.getElementById("health");
const thirst = document.getElementById("thirst");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const cleanliness = document.getElementById("cleanliness");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const givedrink = document.getElementById("drink");
const clean = document.getElementById("clean");
//const image = document.getElementById("petimg");

//let score = document.getElementById.innerHTML("score");


//giveFood(){
    //         score += 20
    //         return `Happiness: ${score}`

let pet = {
    hunger: 20,
    thirst: 20,
    happiness: 50,
    cleanliness: 50,
    health: 100,
    feedPet() {
        // con
        score -= 10;
        score -= 10;
        
        
        // pro
        this.happiness += 10
        this.thirst += 10;
        this.health += 10;

        return `Happiness: ${score}`;
    },
    giveDrink() {
        // con
        this.hunger -= 10;
        this.cleanliness -= 10;
        this.thirst -= 10;
        // pro
        this.happiness += 5;
        this.health += 10;
    },
    clean() {
        // con
        this.cleanliness += 20;
        this.happiness += 10;
        this.health += 10;
        this.hunger += 5;
    },
    play() {
        this.hunger += 10;
        this.cleanliness -= 10;
        this.thirst -= 10;
        this.happiness += 5;
        this.health += 10;
    },
}

function checkCondition() {
    if (pet.health >= 100){
        pet.health = 100;
        image.src = "loved-cat.jpg"
    } 
    if (pet.hunger <= 0){
        pet.hunger = 0;
    } 
    if (pet.cleanliness <= 0) {
        pet.cleanliness = 0;
        pet.gameOver = true
    }
    if (pet.thirst >= 30){
      image.src = "crying-cat.jpg"
    }
    if (pet.thirst >= 50){
        pet.gameOver = true;
      }
    
    if (pet.hunger > 20){
        image.src = "angry-cat.jpg";
        } 
    if (pet.hunger > 20){
        image.src = "angry-cat.jpg";
        pet.gameOver = true;    
    }
    
    if (pet.happiness <= 30) {
        image.src = "sad-cat.jpg";
    }
    if (pet.cleanliness >= 10) {
        image.src = "loved-cat.jpg";
    }
    if (pet.happiness >= 50) {
        image.src = "loved-cat.jpg";
    }

    if (pet.health <= 20) {
        image.src = "sad-cat.jpg"
    } 
    if (pet.gameOver = true) {
        alert("GAME OVER")
    }
    else {
        image.src = "happy-cat.jpg";
    }
}

// function petData() {
//     health.textContent = `health: ${pet.health}`;
//     thirst.textContent = `thirst: ${pet.thirst}`;
//     hunger.textContent = `hunger: ${pet.hunger}`;
//     happiness.textContent = `happiness: ${pet.happiness}`;
//     cleanliness.textContent = `cleanliness: ${pet.cleanliness}`;
// }
button.addEventListener("click", () => {
    peth1.textContent = input.value
    hide.style.display = "none"
})

feed.addEventListener("click", () => {
    pet.feedPet();
    checkCondition();
    flag = true;
    // petData();
});

givedrink.addEventListener("click", () => {
    pet.giveDrink();
    checkCondition();
    // petData();
    countdown();
});

clean.addEventListener("click", () => {
    pet.clean();
    checkCondition();
    // petData();
});


//COUNTDOWN TIMER
const timeH = document.querySelector("h2");
const timeSeconds = 120;
displayTime(timeSeconds);


const countdown = setInterval(()=>{
   // timeSeconds--;
    displayTime(timeSeconds);
    if(timeSeconds <= 0 || timeSeconds < 1){
        endTime();
        clearInterval(countdown)
    }
},1000)

function endTime(){
    timeH.innerHTML = 'TIME OUT'
}

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10 ? '0':''}${sec}`
}





// petData();

//document.write(window.prompt("What is your Pet's name?"))

// let person = prompt("Please enter your name");

//     if (person != null) {
//     document.getElementById("demo").innerHTML =
//     "Hello " + person + "! How are you today?";
//     }

// const startTimeoutFunction = setTimeout(doSomething, 2000);

// function doSomething() {
//     // do stuff
// }

// function stopTimeoutFunction() {
//     clearTimeout(startTimeoutFunction);
// }
