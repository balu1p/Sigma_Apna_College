class Mamals {
    constructor(name) {
        this.name = name
        this.type = "Warm blooded"
    }
    eat() {
        console.log('All eats foood!@')
    }
}

class Dog extends Mamals {
    constructor(name) {
        super(name)
    }
    bark () {
        console.log("BOOF???")
    }
}


class Cat extends Mamals {
    constructor(name) {
        super(name)
    }
    meow () {
        console.log("MEOWW???")
    }
}

const d1 = new Dog("tuffee");
const c1 = new Cat("billie")
