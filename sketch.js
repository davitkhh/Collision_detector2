var bullet, wall;
var speed, weight, thickness, damage;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83)
  bullet = createSprite(50, 200, 65, 10);
  bullet.velocityX = speed / 5;
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, height/2);
  textSize(20);
  fill(255, 255, 255);
}

function draw() {
  background(0, 0, 0);  
  drawSprites();
  text("Speed: " + Math.round(speed), 80, 20);                           
  text("Weight: " + Math.round(weight), 80, 40);                        
  if (has_collided(bullet, wall)) {
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    text("Damage: " + Math.round(damage), 80, 60);             
  //   bullet.x = wall.x - wall.width / 2 - bullet.width / 2 + deformation / 8;
    
    if (damage <= 20) {
      wall.shapeColor = "green"
    }
    
    else if (damage > 20) {
      wall.shapeColor = "red"
  
    }
  }
}

function has_collided(lbullet, lwall) {
  var bullet_right = lbullet.x + lbullet.width / 2;
  var wall_left = lwall.x - lwall.width / 2;
  if (bullet_right >= wall_left) {
    return true;
  }
  else {
    return false;
  }
}