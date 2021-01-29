class  Villager {
    constructor(x, y, width,height){
        var options={
        isStatic:true
        
        }
     this.body=Bodies.rectangle(x,y,width,height);
     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
      this.image = loadImage("sprites/enemy.png");
      this.Visiblity = 255;
    }
  
  
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
      }
  
  
  }
