
/**
 * Forces
 *
 * This object holds the mechanical interactions of an object.
 */
function Forces(x, y) {
    // inital position given
    if (x && y) {
        this.pos = createVector(x, y);
    
    // no position set
    } else {
        this.pos = createVector();
    }

    // velocity
    this.vel = createVector();

    // acceleration
    this.acc = createVector();

    // array of global forces
    this.globals = [];
}


/**
 * getPos 
 *
 * Get position of object
 */
Forces.prototype.getPos = function() {
    return this.pos;
};

/**
 * getVel 
 *
 * Get velocity of object
 */
Forces.prototype.getVel = function() {
    return this.vel;
};

/**
 * getAcc 
 *
 * Get acceleration of object
 */
Forces.prototype.getAcc = function() {
    return this.acc;
};

/**
 * setPos 
 *
 * Set position of object
 */
Forces.prototype.setPos = function(x, y) {
    this.pos = createVector(x, y);
}

/**
 * setVel 
 *
 * Set velocity of object
 */
Forces.prototype.setVel = function(x, y) {
    this.vel = createVector(x, y);
}

/**
 * setAcc 
 *
 * Set acceleration of object
 */
Forces.prototype.setAcc = function(x, y) {
    this.acc = createVector(x, y);
}

/**
 * setGlobalForce 
 *
 * Set a global force to the object. This force will act on
 * the object for every frame.
 */
Forces.prototype.setGlobalForce = function(x, y) {
    this.globals.push(createVector(x, y));
}

/**
 * applyForce 
 *
 * Apply a force to the object
 */
Forces.prototype.applyForce = function(x, y) {
    this.acc.add(createVector(x, y));
}

/**
 * update 
 *
 * Main frame by frame updating
 */
Forces.prototype.update = function() {
    // Apply global force to object each frame
    for (var i = 0; i < this.globals.length; i++) {
        this.applyForce(this.globals[i].x, this.globals[i].y);
    }

    // perfrom f = ma
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // reset acceleration
    this.acc.mult(0);
}

/**
 * edges 
 *
 * Prevent the object from leaving the screen
 */
Forces.prototype.edges = function() {
    // leaving left window
    if (this.pos.x < 0) {
        this.pos.x = 0;

    // leaving right window
    } else if (this.pos.x > width) {
        this.pos.x = width;
    }

    // leaving top window
    if (this.pos.y < 0) {
        this.pos.y = 0;

    // leaving bottom window
    } else if (this.pos.y > height) {
        this.pos.y = height;
    }
}

/**
 * edges_bounce 
 *
 * Prvent the object from leaving the screen
 * Bounce the object back into view
 */
Forces.prototype.edges_bounce = function() {
    // bounce on vertical walls
    if (this.pos.x < 0 || this.pos.x > width) {
        this.vel.x *= -1;
    }

    // bounce on horizontal walls
    if (this.pos.y < 0 || this.pos.y > height) {
        this.vel.y *= -1;
    }
}

/**
 * edges_wrap
 *
 * Prevent the object from leaving the screen
 * Object wraps around to other side of window
 */
Forces.prototype.edges_wrap = function() {
    // leaving left window
    if (this.pos.x < 0) {
        this.pos.x = width;

    // leaving right window
    } else if (this.pos.x > width) {
        this.pos.x = 0;
    }

    // leaving top window
    if (this.pos.y < 0) {
        this.pos.y = height;

    // leaving bottom window
    } else if (this.pos.y > height) {
        this.pos.y = 0;
    }
}
