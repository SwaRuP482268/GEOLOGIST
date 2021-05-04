class Stone{
	constructor(x,y)
	{
	var options = {
		'density':3,
		'friction': 30,
		'restitution':0.8


	}
    this.body = Bodies.rectangle(x, y, 100, 100, options);
    this.width = 150;
    this.height =150;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('black')
    fill('black')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
