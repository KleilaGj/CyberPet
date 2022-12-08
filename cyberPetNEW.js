button.addEventListener("click", () => {
    peth1.textContent = input.value
    hide.style.display = "none"
})

class pet {
    constructor(age, type, breed, colour, hunger, thirst, cleanliness) {
        this.age = age;
        this.type = type;
        this.breed = breed
        this.colour = colour;
        this.hunger = hunger;
        this.thirst = thirst;
        this.cleanliness = cleanliness;
    }
}
      

    class happiness extends pet {
        constructor(age, type, breed, colour, hunger, thirst, cleanliness, happiness) 
    super(age, type, breed, colour, hunger, thirst, cleanliness){
        this.happiness = happiness;
            }
        };

const animal1 = new Pet(3, "Cat", "Ginger", "Orange", "08:00");

    // get petInfo () {
    //     return `${input.value} is a ${this.type}, ${this.age} year(s) old`;
    // } 
function petData() {
    health.textContent = `health: ${pet.health}`;
    thirst.textContent = `thirst: ${pet.thirst}`;
    hunger.textContent = `hunger: ${pet.hunger}`;
    happiness.textContent = `happiness: ${pet.happiness}`;
    cleanliness.textContent = `cleanliness: ${pet.cleanliness}`;
};

//variables
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

    //const gameOver = document.getElementById("gameOver");

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

    let score = document.getElementById.innerHTML("score");


//buttons
    feed.addEventListener("click", () => {
        pet.feedPet();
        checkCondition();
        flag = true;
        score += 10;
        return `Happiness: ${score}`;
        // petData();
    });

    givedrink.addEventListener("click", () => {
        pet.giveDrink();
        checkCondition();
        // petData();
        //countdown();
        score += 10;
        return `Happiness: ${score}`;
    });

    clean.addEventListener("click", () => {
        pet.clean();
        checkCondition();
        // petData();
        score += 10;
        return `Happiness: ${score}`;
    });

//conditional statements
    function checkCondition() {
        if (pet.health >= 50){
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