function preload() {
}  

function setup() {
    canvas = createCanvas(640, 480,);
    canvas.position(280, 270);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 160, 120, 320, 240);
    tint(tint_color)
    stroke(100, 0, 0)
    fill(0, 0, 200)
    rect(50, 60 , 20, 340)
    rect(570, 60 , 20, 340)
    rect(65, 55 , 550, 20)
    rect(60, 415 , 550, 20)
    fill(200, 0, 0)
    circle(580, 420, 80)
    circle(60, 60, 80)
    circle(580, 60, 80)
    circle(60, 420, 80)
    
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
