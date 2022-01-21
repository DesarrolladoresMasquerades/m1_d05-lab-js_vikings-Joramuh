// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength    // argument = property
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){       // method, function inside class
    (this.health -= damage)
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength ) {
    super(health, strength)
    this.name = name
     }  

  receiveDamage(damage){
    if( (this.health -= damage )> 0){ return `${this.name} has received ${damage} points of damage`}
    else {return `${this.name} has died in act of combat`}
  } // missing if viking DIES!!

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage){
    if( (this.health -= damage )> 0){ return `A Saxon has received ${damage} points of damage`}
    else return "A Saxon has died in combat" } 
}

// War
class War {
  constructor(){
    this.vikingArmy= []
    this.saxonArmy= []
  }

  addViking(viking){    
    this.vikingArmy.push(viking) // missing call 10 times
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    const randomSaxon = Math.floor(Math.random()) * this.saxonArmy.length
  }
  saxonAttack(){

  }
  showStatus(){}
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
