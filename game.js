
var gameCanvas = document.getElementById("gameScreen");
var ctx = gameCanvas.getContext("2d");

gameCanvas.style.position = "absolute";
gameCanvas.style.left = 0;
gameCanvas.style.top = 0;
gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight;
gameCanvas.style.width = window.innerWidth + "px";
gameCanvas.style.height = window.innerHeight + "px";

var circle1 = {
    radius: 25,
    xPos: 33,
    yPos: 33,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    draw: function() {
        ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#efa7ed";
        ctx.fill();
    },
    update: function() {
        if(circle1.goLeft && circle1.xPos > 30) {
            circle1.xPos = circle1.xPos - 5;
        }
        if(circle1.goRight && circle1.xPos + 30 < gameScreen.width) {
            circle1.xPos += 5;
        }
        if(circle1.goDown && circle1.yPos + 30 < gameScreen.height) {
            circle1.yPos += 5;
        }
        if(circle1.goUp && circle1.yPos > 35) {
            circle1.yPos = circle1.yPos - 5;
        }
       

        //collision detection
        
        var dx = circle1.xPos - circle2.xPos;
        var dy = circle1.yPos - circle2.yPos;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < circle1.radius + circle2.radius) {
            ctx.clearRect(0, 0, gameScreen.width, gameScreen.height);
            circle1.xPos = 0 + 33;
            circle1.yPos = 0 + 33;
            circle2.xPos = gameScreen.width - circle2.radius;
            circle2.yPos = gameScreen.height - circle2.radius;
        }
    }
}
var circle2 = {
    radius: 25,
    xPos: gameCanvas.width - 40,
    yPos: gameCanvas.height - 40,
    draw: function() {
        ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#99f7f7";
        ctx.fill();

    },
    update: function() {
        if(circle2.goLeft && circle2.xPos > 29) {
            circle2.xPos = circle2.xPos - 5;
        }
        if(circle2.goUp && circle2.yPos > 35) {
            circle2.yPos -= 5;
        }
        if(circle2.goDown && circle2.yPos + 25 < gameScreen.height) {
            circle2.yPos += 5;
        }
        if(circle2.goRight && circle2.xPos + 28 < gameScreen.width) {
            circle2.xPos = circle2.xPos + 5;
        }
       
    }
}
document.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 189) {
        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    }
    if(evt.keyCode === 37) {
        circle2.goLeft = true;
    }
    if(evt.keyCode === 38) {
        circle2.goUp = true;
    }
    if(evt.keyCode === 39) {
        circle2.goRight = true;
    }
    if(evt.keyCode === 40) {
        circle2.goDown = true;
    }
    if(evt.keyCode === 87) {
        circle1.goUp = true;
    }
    if(evt.keyCode === 83) {
        circle1.goDown = true;
    }
    if(evt.keyCode === 65) {
        circle1.goLeft = true;
    }
    //s key
    if(evt.keyCode === 68) {
        circle1.goRight = true;
    }
    if(evt.keyCode === 32) {
        circle1.jump = true;
    }
    if(evt.keyCode === 191) {
        circle2.jump = true;
    }
    if(evt.keyCode == 81) {}
})
document.addEventListener("keyup", function(evt) {
    if(evt.keyCode === 37) {
        circle2.goLeft = false;
    }
    if(evt.keyCode === 38) {
        circle2.goUp = false;
    }
    if(evt.keyCode === 39) {
        circle2.goRight = false;
    }
    if(evt.keyCode === 40) {
        circle2.goDown = false;
    }
    //W key
    if(evt.keyCode === 87) {
        circle1.goUp = false;
    }
    //A key
    if(evt.keyCode === 65) {
        circle1.goLeft = false;
    }
    //D key
    if(evt.keyCode === 68) {
        circle1.goRight = false;
    }
    if(evt.keyCode === 83) {
        circle1.goDown = false;
    }
    if(evt.keyCode === 32) {
        circle1.jump = false;
    }
    if(evt.keyCode === 191) {
        circle2.jump = false;
    }
})

//begins game
function beginGame() {  
    document.body.removeChild(document.getElementById("wrapper"));
    gameLoop();
}


function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, gameScreen.width, gameScreen.height);
 
    circle1.update();
    circle2.update();
    circle2.draw();
    ctx.beginPath();
    circle1.draw();
    window.requestAnimationFrame(gameLoop);
}

// shows instructions





