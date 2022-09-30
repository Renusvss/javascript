//objects& classes
const onAttack = (lives) => {
  console.log("attack on this", lives);
};
const onLive = (lives) => {
  console.log("remaining Lives:", lives);
};
class Gaming {
  constructor(lives, onAttack, onLive) {
    this.lives = lives;
    //this.onAttack = onAttack;
    //this.onLive = onLive;
  }
  attack() {
    this.lives = this.lives - 1;
    onAttack(this.lives);
  }
  getMylive() {
    onLive(this.lives);
    return this.lives;
  }
}
var player = new Gaming(4, onAttack);
var player1 = new Gaming();
player.attack();
//player1.attack();
console.log(player.getMylive());
//console.log(player1.getMylive());
