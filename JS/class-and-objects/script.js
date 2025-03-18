class Animal{
    constructor(name){
        this.name = name
        console.log("object is created")
    }

    eats(){
        console.log('animal is eating')
    }

    running(){
        console.log('animal is running')
    }
}

class lion extends Animal {
    constructor(name){
        super(name)                    // it will first call the constructor of the parent class i.e Animal.
        console.log("he is a lion")
    }

    eats(){                           // method overriding
        super.eats()
        console.log('lion is eating')
    }
}

let a = new Animal("Jack");
console.log(a)

let l = new lion("sher");
console.log(l);
