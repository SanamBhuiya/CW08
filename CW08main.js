let ball = {
    x: 10,
    y: 10,
    xInc: 3,
    yInc: 3,
    scale: 1,
    img: document.GetElementById("Basketball"),
    rotation: 0,
    draw: function() {
    const centerX= (this.x + this.img.width) / 2
    const centerY= (this.y + this.img.height) / 2
    this.rotation+=0.01;
    context.translate(centerX, centerY);
    context.rotate(this.rotation*Math.PI/180)
    context.scale(this.scale, this.scale)
    context.rotate(this.rotation)
    context.translate(-centerX, -centerY);
    context.drawImage(this.img, this.x, this.y);
    },
    move: function() {
    this.y += this.yInc;
    this.x += this.xInc;
    if (this.x < 0 || this.x + this.img.width > canvas.width) {
    this.xInc *= -1;
    if (this.scale<1.5){
        this.scale +=0.1;  
    }
    else{
        this.scale=1;
    }

    }

    if (this.y<0 || this.y+this.img.height > canvas.height){
        this.yInc *=-1;
        if (this.scale<1.5){
            this.scale +=0.1;  
        }
        else{
            this.scale=1;
        }
    }
    }
};
   let canvas = document.GetElementById("myCanvas");
   let context = canvas.getContext("2d");
   context.save();
   ball.draw();
   context.restore();
   let animFrameId;
   canvas.addEventListener("mouseover", function(e) {
    animFrameId = window.RequestAnimationFrame(drawFrame);
   });
   canvas.addEventListener("mouseout", function(e) {
    window.cancelAnimationFrame(animFrameId);
   });
function drawFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    ball.draw();
    ball.move();
    context.restore();
    animFrameId = window.RequestAnimationFrame(drawFrame);
   }
Privacy
Terms
Status
Security
About
Blog
Pricing
API
Training