var sketch = function(p) {
  var world;
  var allImages = ['#sky'];
  var allFloors = ['floor1', 'floor2', 'floor3', 'floor4'];
  var allWallpapers = ['wallpaper1', 'wallpaper2', 'wallpaper3', 'wallpaper4'];
  var count = 0;
  var countZ = 0;
  var j;
  
  p.setup = function() {
    p.noCanvas;
    world = new World('VRScene');
    //world.setUserPosition(0, 0.6, 0);
  }

  p.draw = function() {
    if (countZ == 0)
    {
      world.setUserPosition(0, 0.6, 1);
      countZ = 1;
    }
    
    world.setUserPosition(world.getUserPosition().x, 0.6, world.getUserPosition().z);
    //move the user
    if (mouseIsPressed || touchIsDown) {
		  world.moveUserForward(0.02);
	  }
	  
    if (state == 3 && count == 0) {
      
      //build the wall, floor, and ceiling
      var wall_f = new Plane({
        x:0, y:0.75, z:-((wallEY - wallSY) / 75)/2,
        width:(wallEX - wallSX) / 75, height:1.5,
        asset:allWallpapers[wallpaperStyle],
        repeatX: (wallEX - wallSX) / 75,
				repeatY: 2
      })
      world.add(wall_f);
      
      var wall_b = new Box({
        x:0, y:0.75, z:((wallEY - wallSY) / 75)/2,
        width:(wallEX - wallSX) / 75, height:1.5, depth:0.1,
        asset:allWallpapers[wallpaperStyle],
        repeatX: (wallEX - wallSX) / 75,
				repeatY: 2
      })
      world.add(wall_b);
      
      var wall_l = new Plane({
        x:-((wallEX - wallSX) / 75)/2, y:0.75, z:0,
        width:(wallEY - wallSY) / 75, height:1.5,
        rotationY:90, 
        asset:allWallpapers[wallpaperStyle],
        repeatX: (wallEY - wallSY) / 75,
				repeatY: 2
      })
      world.add(wall_l);
      
      var wall_r = new Plane({
        x:((wallEX - wallSX) / 75)/2, y:0.75, z:0,
        width:(wallEY - wallSY) / 75, height:1.5,
        rotationY:-90, 
        asset:allWallpapers[wallpaperStyle],
        repeatX: (wallEY - wallSY) / 75,
				repeatY: 2
      })
      world.add(wall_r);
      
      var floor = new Plane({
        x:0, y:0, z:0,
        width:(wallEX - wallSX) / 75, height:(wallEY - wallSY) / 75,
        rotationX:-90, 
        asset:allFloors[floorStyle],
        repeatX: (wallEX - wallSX) / 75,
				repeatY: (wallEY - wallSY) / 75
      })
      world.add(floor);
      
      var ceiling = new Box({
        x:0, y:1.5, z:0,
        width:(wallEX - wallSX) / 75, height:(wallEY - wallSY) / 75, depth:0.1,
        rotationX:-90, 
        red:255, green:255, blue:255
      })
      world.add(ceiling);
      
      
      //add furniture
      for (var j = 0; j < myFurnitureArray.length; j++)
      {
        if (myFurnitureArray[j] == 0)
        {
          var mysofa1 = new DAE({
		        asset: 'sofa1',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.5,
		        scaleY:0.5,
		        scaleZ:0.5,
		        rotationY:-myFurnitureRotArray[j]
	         });
	        world.add(mysofa1);
        }
        
        else if (myFurnitureArray[j] == 1)
        {
          var mysofa2 = new DAE({
		        asset: 'sofa2',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.5,
		        scaleY:0.5,
		        scaleZ:0.5,
		        rotationY:-myFurnitureRotArray[j]
	         });
	        world.add(mysofa2);
        }
        
        else if (myFurnitureArray[j] == 2)
        {
          var mytable1 = new DAE({
		        asset: 'table1',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.4,
		        scaleY:0.4,
		        scaleZ:0.4,
		        rotationY:-myFurnitureRotArray[j]-90
	         });
	        world.add(mytable1);
        }
        
        else if (myFurnitureArray[j] == 3)
        {
          var mytable2 = new DAE({
		        asset: 'table2',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.8,
		        scaleY:0.45,
		        scaleZ:0.35,
		        rotationY:-myFurnitureRotArray[j]
	         });
	        world.add(mytable2);
        }
        
        else if (myFurnitureArray[j] == 4)
        {
          var mytv = new DAE({
		        asset: 'tv',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0.4, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:1.5,
		        scaleY:1.5,
		        scaleZ:1.5,
		        rotationY:-myFurnitureRotArray[j]-90
	         });
	        world.add(mytv);
        }
        
        else if (myFurnitureArray[j] == 5)
        {
          var mydesk = new DAE({
		        asset: 'desk',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.5,
		        scaleY:0.5,
		        scaleZ:0.5,
		        rotationY:-myFurnitureRotArray[j]-180
	         });
	        world.add(mydesk);
        }
        
        else if (myFurnitureArray[j] == 6)
        {
          var mydoor = new DAE({
		        asset: 'door',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.5,
		        scaleY:0.5,
		        scaleZ:0.5,
		        rotationY:-myFurnitureRotArray[j]
	         });
	        world.add(mydoor);
        }
        
        else if (myFurnitureArray[j] == 7)
        {
          var myfridge = new DAE({
		        asset: 'fridge',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.3,
		        scaleY:0.3,
		        scaleZ:0.2,
		        rotationY:-myFurnitureRotArray[j]
	         });
	        world.add(myfridge);
        }
        
        else if (myFurnitureArray[j] == 8)
        {
          var mylamp = new DAE({
		        asset: 'lamp',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.5,
		        scaleY:0.5,
		        scaleZ:0.5,
		        rotationY:-myFurnitureRotArray[j]
	         });
	        world.add(mylamp);
        }
        
        else if (myFurnitureArray[j] == 9)
        {
          var mychair1 = new DAE({
		        asset: 'chair1',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.4,
		        scaleY:0.4,
		        scaleZ:0.4,
		        rotationY:-myFurnitureRotArray[j]
	         });
	        world.add(mychair1);
        }
        
        else if (myFurnitureArray[j] == 10)
        {
          var mychair2 = new DAE({
		        asset: 'chair2',
		        x:((myFurniturePosXArray[j] - wallSX) / 75 + (-((wallEX - wallSX) / 75)/2)), y:0, z:((myFurniturePosYArray[j] - wallSY) / 75 + (-((wallEY - wallSY) / 75)/2)),
		        scaleX:0.5,
		        scaleY:0.5,
		        scaleZ:0.5,
		        rotationY:-myFurnitureRotArray[j]
	         });
	        world.add(mychair2);
        }
      }
      
      count = 1;
    }
    
    
    var sky = select('#theSky');
	  sky.attribute('src', allImages[0]);
  }
};

new p5(sketch, 'threeD');