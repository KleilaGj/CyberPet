class Pet {
    constructor(name, age, type, breed, colour, time, happiness) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed
        this.colour = colour;
        this.lastFed = time;
        this.happiness = score;
        
    }
get petInfo () {
    return `${this.name} is a ${this.type}, ${this.age} year(s) old`;
}

    lastFed (time) {
        this.lastFed = time;
        return `Last feed: ${this.lastFed} for ${this.name}`;

    }
    if (time - this.lastFed > 4){
            return `I'm hungry`
        } else {
            return `I'll eat later`
        }
    
    class food extends Pet {
        constructor(name, age, type, breed, colour, time, happiness, food)
        super(name, age, type, breed, colour, time, happiness);
    }
    giveFood(){
        score += 20
        return `Happiness: ${score}`
    }

}



// class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, mtime) {
//         super(name, age, type, breed, colour, time);
//         this.lastMeds = mtime;
//     }
//     giveMeds (time) {
//         this.lastMeds = time;
//         return `Last meds updated to: ${this.lastMeds} for ${this.name}`

//     }
// }

const bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
bella.fullName = "Bella Crompton"
console.log(bella)

//const barney = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&G", "10:00", "13:00");
//const betty = new Pet("Betty", 4, "Dog", "SH", "White", "10:00")


//console.log(betty)


//console.log(bella)
//console.log(bella.feedPet("15:00"))
//console.log(bella)