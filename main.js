it = "";
Status = "";
objects = [];

function setup() {
    canvas = createCanvas(500, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(500, 350);
}

function draw() {
    image(video, 0, 0, 500, 350);
    if (Status != "") {
        objectDetector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected.";
            fill('blue');
            confidence = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + confidence + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("blue");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            if (it == objects[i].label) {
                video.stop();
                objectDetector.detect(modelLoaded);
                document.getElementById("no-of-obj").innerHTML = it + " Found";
            } else {
                document.getElementById("no-of-obj").innerHTML = it + " Not Found";
            }
        }
    }
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    it = document.getElementById("input").value;

}

function modelLoaded() {
    console.log("loaded");
    Status = true;
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;
    }
}