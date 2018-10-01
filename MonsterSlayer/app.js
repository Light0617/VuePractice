new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    resetGame: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    startGame: function() {
      this.resetGame();
      this.gameIsRunning = true;
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      });
      if(this.checkWin()) return ;

      this.monsterAttack();
    }, 
    specialAttack: function() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text:'Player special hits Monster for ' + damage
      });

      if(this.checkWin()) return ;

      this.monsterAttack();
    },
    heal: function() {
      var heal = Math.min(10, 100 - this.playerHealth);
      this.playerHealth += heal;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heal for ' + heal
      });
      this.monsterAttack();
    },
    giveup: function() {
      this.resetGame();
      this.gameIsRunning = false;
    },
    monsterAttack: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
      });
      this.checkWin();
    },
    calculateDamage: function(min, max){
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if(this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        if(confirm('You won! New Game?')){
          this.startGame();
        } else{
          this.gameIsRunning = false;
        }
        return true;
      } else if(this.playerHealth <= 0) {
        this.playerHealth = 0;
        if(confirm('You lost! New Game?')){
          this.startGame();
        } else{
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
})