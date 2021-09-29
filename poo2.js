class Warrior {
    constructor(life, power){
        this.life = life;
        this.power = power;
    }
    attack(){
        this.power;
    }
    defend(damage) {
        this.life -= damage;
        console.log(this.life);
    }
}

class Maya extends Warrior {
    constructor(life, power){
        super(life, power);
    }
    drinkColaCao() {
        this.power += 10;
    }
}

let maya = new Maya(20, 4)

class Aztec extends Warrior {
    constructor(life, power){
        super(life, power);
    }
    drinkNesquik() {
        this.life += 10;
    }
}

let azteca = new Aztec(15, 6)

console.log(`Azteca bebe nesquik ${azteca.drinkNesquik()}, entonces el Maya ${maya.drinkColaCao()}, el Maya ataca a Azteca ${maya.attack()}`);




// Azteca bebe nesquik----> azteca.drinkNesquik()
    
// Maya bebe Cola Cao----> maya.drinkColaCao()

// Maya ataca a azteca. Azteca defiende. -----> maya.attack()    azteca.defend()

// Azteca ataca a maya. Maya defiende. -----> azteca.attack()    maya.defend()
