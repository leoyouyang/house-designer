var state = -1;
var wallState = 0;
var wallSX, wallSY, wallEX, wallEY;
var wallpaperStyle;
var floorStyle;
var furnitureState = 0;
var putFurniture;
var putFurnitureRot = 0;
var furnitureIconArray;
var myFurnitureArray = [];
var myFurniturePosXArray = [];
var myFurniturePosYArray = [];
var myFurnitureRotArray = [];
var i;

function preload() {
  bg_start = loadImage('images/1 - start.jpg');
  bg_btw1 = loadImage('images/2 - build_the_wall_1.jpg');
  bg_btw2 = loadImage('images/2 - build_the_wall_2.jpg');
  bg_wallpaper1 = loadImage('images/2.1 - wallpaper1.jpg');
  bg_wallpaper2 = loadImage('images/2.1 - wallpaper2.png');
  bg_floor1 = loadImage('images/2.2 - floor1.jpg');
  bg_floor2 = loadImage('images/2.2 - floor2.png');
  bg_furniture1 = loadImage('images/3 - furniture1.jpg');
  bg_furniture2 = loadImage('images/3 - furniture2.png');
  bg_furniture3_up = loadImage('images/3 - furniture3_up.png');
  bg_furniture3_down = loadImage('images/3 - furniture3_down.png');
  bg_finish = loadImage('images/4 - finish.jpg');
  img_checkmark = loadImage('images/checkmark.png');
  
  icon_chair = loadImage('images/furniture_icon/chair.png');
  icon_desk = loadImage('images/furniture_icon/desk.png');
  icon_door = loadImage('images/furniture_icon/door.png');
  icon_fridge = loadImage('images/furniture_icon/fridge.png');
  icon_lamp = loadImage('images/furniture_icon/lamp.png');
  icon_sofa1 = loadImage('images/furniture_icon/sofa1.png');
  icon_sofa2 = loadImage('images/furniture_icon/sofa2.png');
  icon_table1 = loadImage('images/furniture_icon/table1.png');
  icon_table2 = loadImage('images/furniture_icon/table2.png');
  icon_tv = loadImage('images/furniture_icon/tv.png');
}

function setup() {
  var myCanvas = createCanvas(500, 500);
  myCanvas.parent('twoD');
  imageMode(CENTER);
  furnitureIconArray = [icon_sofa1, icon_sofa2, icon_table1, icon_table2, icon_tv, icon_desk, icon_door, icon_fridge, icon_lamp, icon_chair, icon_chair];
}


function draw() {
  if (state == -1) {
    startScreen();
  }
  
  if (state == 0) {
    buildWall();
  }
  
  if (state == 1) {
    chooseWallpaper();
  }
  
  if (state == 1.5) {
    chooseFloor();
  }
  
  if (state == 2) {
    addFurniture();
  }
  
  if (state == 3) {
    finish();
  }
}

function startScreen() {
  image(bg_start, 250, 250, 500, 500);
}


function buildWall() {
  fill(0);
  
  if (wallState == 0) {
    image(bg_btw1, 250, 250, 500, 500);
    fill(255, 216, 0);
    ellipse(mouseX, mouseY, 10, 10);
  }
  
  if (wallState == 1) {
    image(bg_btw2, 250, 250, 500, 500);
    fill(255, 255, 255, 120);
    rect(wallSX, wallSY, (mouseX - wallSX), (mouseY - wallSY));
    fill(255, 216, 0);
    ellipse(mouseX, mouseY, 10, 10);
  }
}


function chooseWallpaper() {
  image(bg_wallpaper1, 250, 250, 500, 500);
  fill(0);
  fill(255, 255, 255, 120);
  rect(wallSX, wallSY, (wallEX - wallSX), (wallEY - wallSY));
  image(bg_wallpaper2, 250, 250, 500, 500);
  
  //display the checkmark
  if (mouseX > 154 && mouseX < 237)
  {
    if (mouseY > 200 && mouseY < 284)
    {
      image(img_checkmark, 194, 242, 70, 70);
    }
  }
    
  if (mouseX > 271 && mouseX < 354)
  {
    if (mouseY > 200 && mouseY < 284)
    {
      image(img_checkmark, 311, 242, 70, 70);
    }
  }
    
  if (mouseX > 154 && mouseX < 237)
  {
    if (mouseY > 305 && mouseY < 389)
    {
      image(img_checkmark, 194, 347, 70, 70);
    }
  }
    
  if (mouseX > 271 && mouseX < 354)
  {
    if (mouseY > 305 && mouseY < 389)
    {
      image(img_checkmark, 311, 347, 70, 70);
    }
  }
}


function chooseFloor() {
  image(bg_floor1, 250, 250, 500, 500);
  fill(0);
  fill(255, 255, 255, 120);
  rect(wallSX, wallSY, (wallEX - wallSX), (wallEY - wallSY));
  image(bg_floor2, 250, 250, 500, 500);
  
  //display the checkmark
  if (mouseX > 154 && mouseX < 237)
  {
    if (mouseY > 200 && mouseY < 284)
    {
      image(img_checkmark, 194, 242, 70, 70);
    }
  }
    
  if (mouseX > 271 && mouseX < 354)
  {
    if (mouseY > 200 && mouseY < 284)
    {
      image(img_checkmark, 311, 242, 70, 70);
    }
  }
    
  if (mouseX > 154 && mouseX < 237)
  {
    if (mouseY > 305 && mouseY < 389)
    {
      image(img_checkmark, 194, 347, 70, 70);
    }
  }
    
  if (mouseX > 271 && mouseX < 354)
  {
    if (mouseY > 305 && mouseY < 389)
    {
      image(img_checkmark, 311, 347, 70, 70);
    }
  }
}


function addFurniture() {
  image(bg_furniture1, 250, 250, 500, 500);
  fill(255, 255, 255, 120);
  rect(wallSX, wallSY, (wallEX - wallSX), (wallEY - wallSY));
  
  
  //display the user's furniture in the room
  for (i = 0; i < myFurnitureArray.length; i++) {
    push();
    translate(myFurniturePosXArray[i], myFurniturePosYArray[i]);
    rotate( radians(myFurnitureRotArray[i]) );
    image(furnitureIconArray[myFurnitureArray[i]], 0, 0, 60, 60);
    pop();
  }
  
  
  //display the furniture list
  if (furnitureState == 0) {
    image(bg_furniture2, 250, 250, 500, 500);
  
  //display the checkmark
    if (mouseX > 73 && mouseX < 172)
    {
      if (mouseY > 160 && mouseY < 215)
      {
        image(img_checkmark, 122, 192, 60, 60);
      }
    }
    
    if (mouseX > 200 && mouseX < 289)
    {
      if (mouseY > 160 && mouseY < 215)
      {
        image(img_checkmark, 244, 192, 60, 60);
      }
    }
    
    if (mouseX > 326 && mouseX < 415)
    {
      if (mouseY > 160 && mouseY < 215)
      {
        image(img_checkmark, 370, 192, 60, 60);
      }
    }
    
    //------------
    
    if (mouseX > 73 && mouseX < 172)
    {
      if (mouseY > 246 && mouseY < 292)
      {
        image(img_checkmark, 122, 272, 60, 60);
      }
    }
    
    if (mouseX > 200 && mouseX < 289)
    {
      if (mouseY > 246 && mouseY < 292)
      {
        image(img_checkmark, 244, 272, 60, 60);
      }
    }
    
    if (mouseX > 326 && mouseX < 415)
    {
      if (mouseY > 246 && mouseY < 292)
      {
        image(img_checkmark, 370, 272, 60, 60);
      }
    }
    
    //------------
    
    if (mouseX > 73 && mouseX < 172)
    {
      if (mouseY > 312 && mouseY < 378)
      {
        image(img_checkmark, 122, 346, 60, 60);
      }
    }
    
    if (mouseX > 200 && mouseX < 289)
    {
      if (mouseY > 312 && mouseY < 378)
      {
        image(img_checkmark, 244, 346, 60, 60);
      }
    }
    
    if (mouseX > 326 && mouseX < 415)
    {
      if (mouseY > 312 && mouseY < 378)
      {
        image(img_checkmark, 370, 346, 60, 60);
      }
    }
    
    //------------
    
    if (mouseX > 73 && mouseX < 172)
    {
      if (mouseY > 397 && mouseY < 454)
      {
        image(img_checkmark, 122, 429, 60, 60);
      }
    }
    
    if (mouseX > 200 && mouseX < 289)
    {
      if (mouseY > 397 && mouseY < 454)
      {
        image(img_checkmark, 244, 429, 60, 60);
      }
    }
    
    if (mouseX > 326 && mouseX < 415)
    {
      if (mouseY > 397 && mouseY < 454)
      {
        image(img_checkmark, 370, 429, 60, 60);
      }
    }
  }
  
  else {
    if (mouseY < 350)
    {
      image(bg_furniture3_down, 250, 250, 500, 500);
    }
    
    else
    {
      image(bg_furniture3_up, 250, 250, 500, 500);
    }
    
    push();
    translate(mouseX, mouseY);
    rotate( radians(putFurnitureRot) );
    image(furnitureIconArray[putFurniture], 0, 0, 60, 60);
    pop();
  }
}


function finish() {
  image(bg_finish, 250, 250, 500, 500);
  fill(255, 255, 255, 120);
  rect(wallSX, wallSY, (wallEX - wallSX), (wallEY - wallSY));
  
  for (i = 0; i < myFurnitureArray.length; i++) {
    push();
    translate(myFurniturePosXArray[i], myFurniturePosYArray[i]);
    rotate( radians(myFurnitureRotArray[i]) );
    image(furnitureIconArray[myFurnitureArray[i]], 0, 0, 60, 60);
    pop();
  }
  
  if (wallSX > wallEX) {
    var tempWallX = wallSX;
    wallSX = wallEX;
    wallEX = tempWallX;
  }
  
  if (wallSY > wallEY) {
    var tempWallY = wallSY;
    wallSY = wallEY;
    wallEY = tempWallY;
  }
  
}


function mousePressed() {
  //press to start
  if (state == -1)
  {
    state = 0;
  }
  
  
  //draw the wall
  else if (state == 0 && wallState == 0)
  {
    wallState = 1;
    wallSX = mouseX;
    wallSY = mouseY;
  }
    
  else if (state == 0 && wallState == 1)
  {
    state = 1;
    wallEX = mouseX;
    wallEY = mouseY;
  }
  
  
  //select the wallpaper style
  else if (state == 1)
  {
    if (mouseX > 154 && mouseX < 237)
    {
      if (mouseY > 200 && mouseY < 284)
      {
        wallpaperStyle = 0;
        state = 1.5;
      }
    }
    
    if (mouseX > 271 && mouseX < 354)
    {
      if (mouseY > 200 && mouseY < 284)
      {
        wallpaperStyle = 1;
        state = 1.5;
      }
    }
    
    if (mouseX > 154 && mouseX < 237)
    {
      if (mouseY > 305 && mouseY < 389)
      {
        wallpaperStyle = 2;
        state = 1.5;
      }
    }
    
    if (mouseX > 271 && mouseX < 354)
    {
      if (mouseY > 305 && mouseY < 389)
      {
        wallpaperStyle = 3;
        state = 1.5;
      }
    }
  }
  
  
  //select the floor style
  else if (state == 1.5)
  {
    if (mouseX > 154 && mouseX < 237)
    {
      if (mouseY > 200 && mouseY < 284)
      {
        floorStyle = 0;
        state = 2;
      }
    }
    
    if (mouseX > 271 && mouseX < 354)
    {
      if (mouseY > 200 && mouseY < 284)
      {
        floorStyle = 1;
        state = 2;
      }
    }
    
    if (mouseX > 154 && mouseX < 237)
    {
      if (mouseY > 305 && mouseY < 389)
      {
        floorStyle = 2;
        state = 2;
      }
    }
    
    if (mouseX > 271 && mouseX < 354)
    {
      if (mouseY > 305 && mouseY < 389)
      {
        floorStyle = 3;
        state = 2;
      }
    }
  }
  
  
  //select a furniture
  else if (state == 2 && furnitureState == 0) 
  {
    if (mouseX > 73 && mouseX < 172)
    {
      if (mouseY > 160 && mouseY < 215)
      {
        furnitureState = 1;
        putFurniture = 0;
      }
    }
    
    if (mouseX > 200 && mouseX < 289)
    {
      if (mouseY > 160 && mouseY < 215)
      {
        furnitureState = 1;
        putFurniture = 1;
      }
    }
    
    if (mouseX > 326 && mouseX < 415)
    {
      if (mouseY > 160 && mouseY < 215)
      {
        furnitureState = 1;
        putFurniture = 2;
      }
    }
    
    //------------
    
    if (mouseX > 73 && mouseX < 172)
    {
      if (mouseY > 246 && mouseY < 292)
      {
        furnitureState = 1;
        putFurniture = 3;
      }
    }
    
    if (mouseX > 200 && mouseX < 289)
    {
      if (mouseY > 246 && mouseY < 292)
      {
        furnitureState = 1;
        putFurniture = 4;
      }
    }
    
    if (mouseX > 326 && mouseX < 415)
    {
      if (mouseY > 246 && mouseY < 292)
      {
        furnitureState = 1;
        putFurniture = 5;
      }
    }
    
    //------------
    
    if (mouseX > 73 && mouseX < 172)
    {
      if (mouseY > 312 && mouseY < 378)
      {
        furnitureState = 1;
        putFurniture = 6;
      }
    }
    
    if (mouseX > 200 && mouseX < 289)
    {
      if (mouseY > 312 && mouseY < 378)
      {
        furnitureState = 1;
        putFurniture = 7;
      }
    }
    
    if (mouseX > 326 && mouseX < 415)
    {
      if (mouseY > 312 && mouseY < 378)
      {
        furnitureState = 1;
        putFurniture = 8;
      }
    }
    
    //------------
    
    if (mouseX > 73 && mouseX < 172)
    {
      if (mouseY > 397 && mouseY < 454)
      {
        furnitureState = 1;
        putFurniture = 9;
      }
    }
    
    if (mouseX > 200 && mouseX < 289)
    {
      if (mouseY > 397 && mouseY < 454)
      {
        furnitureState = 1;
        putFurniture = 10;
      }
    }
    
    if (mouseX > 326 && mouseX < 415)
    {
      if (mouseY > 397 && mouseY < 454)
      {
        state = 3;
      }
    }
  }
  
  
  //add the furniture into the space
  else if (state == 2 && furnitureState == 1)
  {
    furnitureState = 0;
    myFurnitureArray.push(putFurniture);
    myFurniturePosXArray.push(mouseX);
    myFurniturePosYArray.push(mouseY);
    myFurnitureRotArray.push(putFurnitureRot);
    putFurnitureRot = 0;
  }
    
  
}


//rotate the furniture
function keyPressed() {
  if (state == 2 && furnitureState == 1)
  {
    if (keyIsDown(82))
    {
      putFurnitureRot += 90;
    }
  }
}