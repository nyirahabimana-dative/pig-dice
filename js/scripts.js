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
  Turn.prototype.endTurn = function(player1, player2) {
    this.player.score += this.total;
    this.total = 0;
    this.randNumber = 0;
    if (this.player == player1) {
        this.player = player2;
        $("#player2").toggleClass("active");
        $("#player1").toggleClass("active");
    } else if (this.player == player2) {
        this.player = player1;
        $("#player2").toggleClass("active");
        $("#player1").toggleClass("active");
    };
  };
  $(document).ready(function() {
    var player1 = new Player("Player 1");
    var player2 = new Player("Player 2");
    var currentTurn = new Turn(player1);
  
    var total = currentTurn.total;
  });