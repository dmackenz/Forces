
// example object for ForceVector
function Ball(x, y) {
    // add mechanics to ball
    this.forces = new Forces(x, y);
}

// display
Ball.prototype.show = function() {
    fill(255);
    ellipse(this.forces.pos.x, this.forces.pos.y, 16, 16);
};