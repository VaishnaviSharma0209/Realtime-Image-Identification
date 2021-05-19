function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3YnucW_XB/model.json',modelLoaded);
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResults);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotResults(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3)
    }
}