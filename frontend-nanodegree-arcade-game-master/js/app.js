// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = "images/enemy-bug.png";
    this.x = x;
    this.y = y;
    this.speed = 200;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (dt*this.speed) + this.x;

    if (player.x < this.x + 100 & player.x > this.x - 50){
        if (player.y > this.y - 50 & player.y < this.y + 50){
            player.reset();
        };
    };

    if (this.x > 600) {
        this.x = (-400)*Math.random();
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var PlayerObj = function(){
    this.sprite = "images/enemy-bug.png";
    this.x = 200;
    this.y = 385;

};

PlayerObj.prototype.xgetter = function() {
    return this.x;
};

//player methods run off player prototype 
PlayerObj.prototype.update = function() {
};

//method to update player position with arrow keys
PlayerObj.prototype.handleInput = function(input){
    switch(input) {
        case "down":
            if (this.y < 385){
                this.y = this.y + 80;
            }
            break;
        case "up": 
            this.y = this.y - 80;
            if (this.y <= -20){
                this.reset();
            }
            break;
        case "right":
            if (this.x < 380){
                this.x = this.x + 90;
            }
            break;
        case "left":
            if (this.x > 100){
                this.x = this.x - 90;
            }
            break;
    }

    // for (enemy in allEnemies){
    //     console.log(allEnemies[enemy].x);
    //     if (this.x < allEnemies[enemy].x + 50 & this.x > allEnemies[enemy].x - 50){
    //         if (this.y > allEnemies[enemy].y - 50 * this.y < allEnemies[enemy].y + 50){
    //             this.reset();
    //         };
    //     };
    // };

    console.log("x" + this.x);
    console.log("y" + this.y);
};

PlayerObj.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


PlayerObj.prototype.reset = function() {
    this.x = 200;
    this.y = 385;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new PlayerObj();
var allEnemies = [new Enemy(-500*Math.random(), 225), new Enemy(-500*Math.random(), 150), new Enemy(-500*Math.random(), 50)];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
