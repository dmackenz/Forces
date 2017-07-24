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
