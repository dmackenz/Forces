## Forces

https://dmackenz.github.io/Forces/

This is a force engine built in p5.js. Simply add this object to a preexisting class and forces can be applied to that object.

### Usage
```JavaScript
function Ball(x, y) {
    // add mechanics to ball
    this.forces = new Forces(x, y);
}
```
```JavaScript
// ball object
var b;

// global force
var gravity = {
    x: 0,
    y: 0.1
};

function setup() {
    createCanvas(windowWidth, windowHeight);

    // create ball
    b = new Ball();
    b.forces.setPos(width / 2, height / 2);

    // set gravity
    b.forces.setGlobalForce(gravity.x, gravity.y);
}

function draw() {
    // clear
    background(51);

    // display
    b.show();

    // update by frame
    b.forces.update();

    // bounce on edges
    b.forces.edges_bounce();
    // other possibilities
    // b.forces.edges();
    // b.forces.edges_wrap();
}
```

### API
```JavaScript
/**
 * Forces
 *
 * This object holds the mechanical interactions of an object.
 */
function Forces(x, y) {}
function Forces() {}

/**
 * getPos 
 *
 * Get position of object
 */
Forces.prototype.getPos = function() {}

/**
 * getVel 
 *
 * Get velocity of object
 */
Forces.prototype.getVel = function() {}

/**
 * getAcc 
 *
 * Get acceleration of object
 */
Forces.prototype.getAcc = function() {}

/**
 * setPos 
 *
 * Set position of object
 */
Forces.prototype.setPos = function(x, y) {}

/**
 * setVel 
 *
 * Set velocity of object
 */
Forces.prototype.setVel = function(x, y) {}

/**
 * setAcc 
 *
 * Set acceleration of object
 */
Forces.prototype.setAcc = function(x, y) {}

/**
 * setGlobalForce 
 *
 * Set a global force to the object.
 * This force will act on the object for every frame.
 */
Forces.prototype.setGlobalForce = function(x, y) {}

/**
 * applyForce 
 *
 * Apply a force to the object
 */
Forces.prototype.applyForce = function(x, y) {}

/**
 * update 
 *
 * Main frame by frame updating
 */
Forces.prototype.update = function() {}

/**
 * edges 
 *
 * Prevent the object from leaving the screen
 */
Forces.prototype.edges = function() {}

/**
 * edges_bounce 
 *
 * Prvent the object from leaving the screen
 * Bounce the object back into view
 */
Forces.prototype.edges_bounce = function() {}

/**
 * edges_wrap
 *
 * Prevent the object from leaving the screen
 * Object wraps around to other side of window
 */
Forces.prototype.edges_wrap = function() {}
```
