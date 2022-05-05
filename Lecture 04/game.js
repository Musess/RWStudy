var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


class player{
    constructor(pos_x,pos_y,radius,color){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.radius = radius;
        this.color = color;
    }

    draw()
    {
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius,0,2*Math.PI);
        context.fillStyle = this.color;
        context.fill();

    }
}
class square{
    constructor(x,y,width,height,c){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.c = c;

    }

    draw()
    {
        context.beginPath();
        context.rect(this.x,this.y,this.width,this.height);
        context.fillStyle = this.c;
        context.fill();

    }
}
var char_player = new player(150,150,20,"blue");
char_player.draw();


canvas.addEventListener("click", function(event){
    var rect = canvas.getBoundingClientRect();
    var X = event.clientX-rect.left;
    var Y = event.clientY-rect.top;

    char_square = new square(X, Y, 20, 20, "red");
    char_square.draw();
})