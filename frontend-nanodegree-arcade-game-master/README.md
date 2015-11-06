Ben Thomas' frontend-nanodegree-arcade-game
===============================

# **Save the Penguin!**

This project is a arcade game clone to demonstrate a knowledge of object oriented programming. 
Included in this projects are examples of function objects, psuedoclasses, use of constructors, and 
several other uses of javascript. 

All of this is built upon a HTML5 Canvas game engine provided by Udacity for the purposes of 
completing this project. 

## How to "Run"

To run this project simply open the "index.html" file in a browser of your choice

## How to "Play the Application"

Once you have the game running in your browser (see above), use the "Up", "Down", "Left", and "Right" arrow keys to navigate the penguin past the sharks and beyond!

### Use of "this" keyword Example and pseudoclassical patterns

'''javascript
	var PlayerObj = function(){
	    //sprite that represents player
	    this.sprite = "images/penguin.png";
	    //default starting position for player
	    this.x = 200;
	    this.y = 385;

	};
'''

### Prototypal Classes Example 

'''javascript
Enemy.prototype.update = function(dt) {
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
'''

#### Directory Structure

the index.html fild contains the game. The css folder holds the stylesheet. The images folder holds 
the sprite assets used in the game. The javascript (js) folder holds the game engine (engine.js), the games resource structure (resources.js), and the logic for the game itself (app.js)

#### Contributing

Anyone is welcome to re-use the code used in this project.

#### References

* [Udacity Object Oriented Javascript Class](https://www.udacity.com/course/object-oriented-javascript--ud015)
* [Udacity HTML5 Canvas Class](https://www.udacity.com/course/html5-canvas--ud292)

#### Contact Me

For any questions please email me at _bthomas2622@gmail.com_

#### License

The content of this repository is not licensed. 