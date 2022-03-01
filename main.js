it="";
Status="";
function setup(){
    canvas=createCanvas(500,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(500,350);
}
function draw(){
    image(video,0,0,500,350);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    it=document.getElementById("input").value;
}
function modelLoaded(){
    console.log("loaded");
    Status=true;
}