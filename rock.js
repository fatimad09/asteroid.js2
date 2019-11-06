class Rock {
 constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    
    this.dx = (7 * Math.random ()) - 4
    this.dy = (7 * Math.random ()) - 4
    
    this.size = 100
 }
 step(){
   this.x += this.dx
   this.y += this.dy 
   
   // check if out of bound, to wrap to the other side
   // this is for the rocks to go from left to right 
    if (this.x > canvas.width + this.size) {
      this.x = 0
    }
    if (this.x < 0 - this.size) {
      this.x = canvas.width
    }
    if (this.y > canvas.height + this.size){
      this.y = 0
    }
    if (this.y < 0 - this.size) {
      this.y = canvas.height
    }
 }	
 draw(){
 	ctx.drawImage(
	rockSprite.image, 
	this.x - (this.size/2),
	this.y - (this.size/2),
	this.size,
	this.size
   )
 }
}