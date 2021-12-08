our = "";
cat = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
our = loadSound("our anthem.mp3");
cat = loadSound("cat vibing.mp3");
}
function setup(){
    canvas = createCanvas(800,500);
    canvas.position(900,300);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
image(video,0,0,1000,500);
}

function modelLoaded(){
console.log("model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}