let xScaleElem = document.GetElementById("xScale");
let xSlider = document.GetElementById("xSlider");
xSlider.AddEventListener("input", function() {
 xScaleElem.innerHTML = xSlider.value;
 drawSun();
});
let yScaleElem = document.GetElementById("yScale");
let ySlider = document.GetElementById("ySlider");
ySlider.AddEventListener("input", function() {
 yScaleElem.innerHTML = ySlider.value;
 drawSun();
});
let canvas = document.GetElementById("myCanvas");
let context = canvas.getContext("2d");
drawSun();
function drawtheun() {
 context.clearRect(0, 0, canvas.width, canvas.height);
 context.save();
 context.beginPath();
 context.translate(130,30)
 context.translate(70, 70);
 context.scale(xSlider.value, ySlider.value);
 context.translate(-70, -70);
 for (let i = 0; i < 4; i++) {
 context.translate(70, 70);
 context.rotate(Math.PI / 8);
 context.translate(-70, -70);
 context.fillStyle = "orange";
 context.fillRect(20, 20, 100, 100);
 }
 context.arc(70, 70, 50, 0, 2 * Math.PI);
 context.fillStyle = "yellow";
 context.fill();
 context.restore();
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
