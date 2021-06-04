//Variables
var c = 0;
var q = 0;
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let size = 50;
var pacmanImg = document.getElementById("Pacman");
var wallImg = document.getElementById("Block");
var Ghost1Img = document.getElementById("Ghost1");
var Ghost2Img = document.getElementById("Ghost2");
var bGround = document.getElementById("Black");
var coinImg = document.getElementById("coin");
var Ghost3Img = document.getElementById("Ghost3");
var start = false;
//Starter Arrays
var myArray = [];
	let map = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,2,2,2,2,2,1,2,2,2,2,2,1],
		[1,2,1,1,1,2,1,2,1,1,1,2,1],
		[1,2,1,6,2,2,2,2,2,2,1,2,1],
		[1,2,2,2,1,1,5,1,1,2,2,2,1],
		[1,2,1,2,2,2,2,2,2,2,1,2,1],
		[1,2,1,1,1,7,1,4,1,1,1,2,1],
		[1,2,2,2,2,2,1,2,2,2,2,2,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

	let pacman = {
		x: 6,
		y: 4
	}

	let ghost1 = {
		a: 7,
		b: 6
	}
	
	let ghost2 = {
		f: 3,
		g: 3
	}
    let ghost3 = {
        j: 5,
        k: 6
    }

	let score = 0;
//Function sg(StartGame)//
  function sg(){
      start = true;
      document.getElementById("myCanvas").style.display = "block";
      if(start){
          document.getElementById("world").style.display = "none";
        document.getElementById("myButton").style.display = "none";
        var games = setInterval(gameUpdate, 200);
        var gamed = setInterval(drawCanvas, 16.67)
          c = Math.floor(Math.random()*4.5);
          q = Math.floor(Math.random()*4.5);
          p = Math.floor(Math.random()*4.5);
      }
      canvas.width = 13 * size;
      canvas.height = 9 * size;
  }
//creating classes in html for individual icons 

function drawCanvas() {
    for(let y = 0; y < map.length; y++) {
        for(let x = 0; x < map[y].length; x++){
            if(map[y][x] == 1){
                ctx.drawImage(wallImg, x*size, y*size);
            }
            else if(map[y][x] == 2){
                ctx.drawImage(coinImg, x*size, y*size);
            }
            else if(map[y][x] == 3){
                ctx.drawImage(bGround, x*size, y*size);
            }
            else if(map[y][x] == 4){
                ctx.drawImage(Ghost1Img, x*size, y*size);
            }
            else if(map[y][x] == 5){
                ctx.drawImage(pacmanImg, x*size, y*size);
            }
            else if(map[y][x] == 6){
                ctx.drawImage(Ghost2Img, x*size, y*size);
            }
            else if(map[y][x] == 7){
                ctx.drawImage(Ghost3Img, x*size, y*size);
            }
        }
    }
    
}


	//key controls - adds score for coins and checks for boundaries
	document.onkeydown = function(e){
      c = Math.floor(Math.random()*4.5);
	console.log(e.keyCode);
		//left key
		if(e.keyCode == 37){
			if(map[pacman.y][pacman.x - 1] != 1)
			{
				if(map[pacman.y][pacman.x - 1] == 2)
				{
					score += 10;
                }
				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x - 1;
				map[pacman.y][pacman.x] = 5;
			}
		}
		//up key
		else if(e.keyCode == 38){
			if(map[pacman.y - 1][pacman.x] != 1)
				{
					if(map[pacman.y - 1][pacman.x] == 2)
					{
						score += 10;
					}
					map[pacman.y][pacman.x] = 3;
					pacman.y = pacman.y - 1;
					map[pacman.y][pacman.x] = 5;
				}

		}
		//right key
		else if(e.keyCode == 39){
			if(map[pacman.y][pacman.x + 1] != 1)
			{
				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x + 1;
				map[pacman.y][pacman.x] = 5;
			}
		}
		//down key
		else if(e.keyCode == 40){

			if(map[pacman.y + 1][pacman.x] != 1)
			{
				if(map[pacman.y + 1][pacman.x] == 2)
				{
					score += 10;
				}
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y + 1;
				map[pacman.y][pacman.x] = 5;
			}
		}
		//score
		document.getElementById("gameScore").innerHTML = "score: " + score + " coins";
        ghostHit();
        
    }
    

	
//GHOSTCODE
//Ghost Hit
function ghostHit() {
    if(map[pacman.y][pacman.x] != 5){
        gameOver();
    }
}
//randomized ghost movement
//left boundary check
function gameUpdate() {
    if(c != 1,2,3,4) {
        var myArray = [1, 2, 3, 4]
        c = myArray[Math.floor(Math.random() * myArray.length)];
       
       }
    if(q != 1,2,3,4) {
        var myArray = [1, 2, 3, 4]
        q = myArray[Math.floor(Math.random() * myArray.length)];
       
       }
    if(p != 1,2,3,4) {
        var myArray = [1, 2, 3, 4]
        p = myArray[Math.floor(Math.random() * myArray.length)];
       
       }
    drawCanvas();
    ghostHit();    
    if(c == 1){
      if(map[ghost1.b][ghost1.a - 1] != 1) {
        if(map[ghost1.b][ghost1.a - 1] == 5) {
          gameOver();
      }
        map[ghost1.b][ghost1.a] = 2;
        ghost1.a = ghost1.a - 1;
        map[ghost1.b][ghost1.a] = 4;
      } else {
        var myArray = [2, 3, 4]
        c = myArray[Math.floor(Math.random() * myArray.length)];
      }	
    }
    //top boundary check
    else if(c == 2){
      if(map[ghost1.b - 1][ghost1.a] != 1)
        {
            if(map[ghost1.b - 1][ghost1.a] == 5){
                gameOver();
            }
          map[ghost1.b][ghost1.a] = 2;
          ghost1.b = ghost1.b - 1;
          map[ghost1.b][ghost1.a] = 4;
        } else {
          var myArray = [1, 3, 4]
          c = myArray[Math.floor(Math.random() * myArray.length)];
        }
    }

    //right boundary check
    else if(c == 3){

      if(map[ghost1.b][ghost1.a + 1] != 1) {
          if(map[ghost1.b][ghost1.a + 1] == 5) {
              gameOver();
          }
        map[ghost1.b][ghost1.a] = 2;
        ghost1.a = ghost1.a + 1;
        map[ghost1.b][ghost1.a] = 4;
      } else {
        var myArray =[1, 2, 4]
        c = myArray[Math.floor(Math.random() * myArray.length)];
      }
    }

    //bottom boundary check
    else if(c == 4){

      if(map[ghost1.b + 1][ghost1.a] != 1)
      {
          if(map[ghost1.b + 1][ghost1.a] == 5){
              gameOver();
          }
        map[ghost1.b][ghost1.a] = 2;
        ghost1.b = ghost1.b + 1;
        map[ghost1.b][ghost1.a] = 4;
      } else {
        var myArray = [1, 2, 3]
        c = myArray[Math.floor(Math.random() * myArray.length)];
      }	
    }


    if(q == 1){

    //ghost 2
     if(map[ghost2.g][ghost2.f - 1] != 1)
      {
           if(map[ghost2.g][ghost2.f - 1] == 5) {
               gameOver();
            }
        map[ghost2.g][ghost2.f] = 2;
        ghost2.f = ghost2.f - 1;
        map[ghost2.g][ghost2.f] = 6;
      } else {
        var myArray = [2, 3, 4]
        q = myArray[Math.floor(Math.random() * myArray.length)];
      }	
    }
    //top boundary check
    else if(q == 2){
        //ghost 2
        if(map[ghost2.g - 1][ghost2.f] != 1)
        {
            if(map[ghost2.g - 1][ghost2.f] == 5) {
                gameOver();
            }
          map[ghost2.g][ghost2.f] = 2;
          ghost2.g = ghost2.g - 1;
          map[ghost2.g][ghost2.f] = 6;
        }
        else {
          var myArray =[1, 3, 4]
          c = myArray[Math.floor(Math.random() * myArray.length)];
        }
    }

    //right boundary check
    else if(q == 3){
        //ghost 2
    if(map[ghost2.g][ghost2.f + 1] != 1)
      { 
          if(map[ghost2.g][ghost2.f + 1] == 5) {
              gameOver();
          }
        map[ghost2.g][ghost2.f] = 2;
        ghost2.f = ghost2.f + 1;
        map[ghost2.g][ghost2.f] = 6;
      } else {
        var myArray =[1, 2, 4]
        q = myArray[Math.floor(Math.random() * myArray.length)];
      }	
    }

    //bottom boundary check
    else if(q == 4){

        //ghost 2
      if(map[ghost2.g + 1][ghost2.f] != 1)
      { if(map[ghost2.g + 1][ghost2.f] == 5) {
          gameOver();
      }
        map[ghost2.g][ghost2.f] = 2;
        ghost2.g = ghost2.g + 1;
        map[ghost2.g][ghost2.f] = 6;
      } else {
        var myArray = [1, 2, 3]
        q = myArray[Math.floor(Math.random() * myArray.length)];
      }	
    }

        //ghost3 movement
    if(p == 1){
     if(map[ghost3.k][ghost3.j - 1] != 1)
      {
        if(map[ghost3.k][ghost3.j - 1] == 5){ 
            gameOver();
      }
        map[ghost3.k][ghost3.j] = 2;
        ghost3.j = ghost3.j - 1;
        map[ghost3.k][ghost3.j] = 7;
      } else {
           var myArray = [2, 3, 4]
           p = myArray[Math.floor(Math.random() * myArray.length)];
      }	
    }
    //top boundary check
    else if(p == 2){

        if(map[ghost3.k - 1][ghost3.j] != 1)
        {
            if(map[ghost3.k - 1][ghost3.j] == 5) { 
                gameOver();
        }
          map[ghost3.k][ghost3.j] = 2;
          ghost3.k = ghost3.k - 1;
          map[ghost3.k][ghost3.j] = 7;
        }
        else {
          var myArray =[1, 3, 4]
          p = myArray[Math.floor(Math.random() * myArray.length)];
        }
    }

    //right boundary check
    else if(p == 3){

    if(map[ghost3.k][ghost3.j + 1] != 1)
      { 
        if(map[ghost3.k][ghost3.j + 1] == 5)
      { 
          gameOver();
      }
        map[ghost3.k][ghost3.j] = 2;
        ghost3.j = ghost3.j + 1;
        map[ghost3.k][ghost3.j] = 7;
      } else {
        var myArray = [1, 2, 4]
        p = myArray[Math.floor(Math.random() * myArray.length)];
      }	
    }

    //bottom boundary check
    else if(p == 4){

      if(map[ghost3.k + 1][ghost3.j] != 1)
      { 
        if(map[ghost3.k + 1][ghost3.j] == 5) {
            gameOver();
        }
        map[ghost3.k][ghost3.j] = 2;
        ghost3.k = ghost3.k + 1;
        map[ghost3.k][ghost3.j] = 7;
      } else {
        var myArray = [1, 2, 3]
        p = myArray[Math.floor(Math.random() * myArray.length)];
      }	
     }   
    }

function gameOver(){
    location.reload();
    start = false;
    document.getElementById("myCanvas").style.display = "none";
    document.getElementById("world").style.display = "block";
    document.getElementById("myButton").style.display = "inline-block";
    document.getElementsById("GameOver").style.display = "block";
    clearInterval(drawCanvas);
    clearInterval(gameUpdate);
    
}

