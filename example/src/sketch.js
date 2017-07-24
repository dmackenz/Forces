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