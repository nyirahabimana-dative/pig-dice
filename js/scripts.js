function Player(userName) {
    this.userName = userName;
    this.score = 0;
 };
 function Turn(player) {
    this.total = 0;
    this.randNumber = 0;
    this.player = player;
  };
  Turn.prototype.diceRoller = function(player1, player2) {
    var randNumber = Math.floor(Math.random() * 6) + 1;
    this.total += randNumber;
  
    if (randNumber == 1) {
        this.total = 0;
        this.endTurn(player1, player2);
        return randNumber;
    } else {
        this.randNumber += randNumber;
        return randNumber;
    };
  };
  