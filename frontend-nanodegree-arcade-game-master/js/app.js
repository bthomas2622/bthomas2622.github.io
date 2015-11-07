// Enemy object that our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;
    // speed of enemy adjustment
    this.speed = 200;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = "images/shark.png";

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (dt*this.speed) + this.x;

    //if statement that checks to see if the enemy has run into a player any time its position changes (dt)
    if (player.x < this.x + 100 && player.x > this.x - 50){
        if (player.y > this.y - 50 && player.y < this.y + 50){
            player.reset();
        }
    }

    //if statement that returns the enemy to the start of the track when it goes off screen
    //Math.random() returns a "random" value between 0 and 1 that I use to stagger start of enemy
    if (this.x > 600) {
        this.x = (-400)*Math.random();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//player object function. Used "PlayerObj" for easy distinction from "player" instance of "PlayerObj"
var PlayerObj = function(){
    //sprite that represents player
    this.sprite = "images/penguin.png";
    //default starting position for player
    this.x = 200;
    this.y = 385;

};

//created a function that returns x position of player so i could print to console for bug checking
//realized later could be done in much easier ways 
PlayerObj.prototype.xgetter = function() {
    return this.x;
};

//I chose to update the players position in the handleinput function
PlayerObj.prototype.update = function() {
    //no op
};

//method to update player position with arrow keys
PlayerObj.prototype.handleInput = function(input){
    //switch statement to determine key pressed is more efficient than many if statements
    switch(input) {
        case "down":
            //only lets player go down if not at bottom of screen
            if (this.y < 385){
                this.y = this.y + 80;
            }
            break;
        case "up":
            this.y = this.y - 80;
            //if statement resents the player once they reach the end of road
            //clear the text from the winning run
            ctx.clearRect(0, 0, 200, 200);
            if (this.y <= -20){
                this.reset();
                //tell player they saved the penguin!
                ctx.font = "20pt Arial";
                ctx.fillStyle = "red";
                ctx.fillText("Nice Work!", 0, 30);
            }
            break;
        case "right":
            //moves player to right if they are not at edge of grid
            if (this.x < 380){
                this.x = this.x + 90;
            }
            break;
        case "left":
            //moves player to left if they are not at edge of grid
            if (this.x > 100){
                this.x = this.x - 90;
            }
            break;
    }
    //printing coordinates of player helps me adjust code from playing the game feedback
    console.log("x" + this.x);
    console.log("y" + this.y);
};

//draws the player on the screen
PlayerObj.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//function to "restart" game when player hits an enemy or finishes 
PlayerObj.prototype.reset = function() {
    this.x = 200;
    this.y = 385;
};

// Instantiation of player and enemy objects
// enemy objects are within an array since multiple  
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
