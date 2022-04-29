Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90

    
})
var camera = document.getElementById("camera")
Webcam.attach(camera)

function emtionpic(){
    Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML ="<img id='capture_image' src='"+data_uri+"'>"
    })
}

console.log('ml5.version',ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yidzt75zn/model.json",modelloaded)
function modelloaded(){
    console.log("Modelloaded")
}
function predictpic(){
    img=document.getElementById("capture_image")
    
    classifier.classify(img,gotresult)
    
}
function gotresult (result) {
    
    if (result) {
        console.log(result)
        document.getElementById("emotion1").innerHTML = result[0].label;
        document.getElementById("emotion2").innerHTML = result[1].label;
    }
}

if (results[0].label == "happy") {
     document.getElementById("update_emoji").innerHTML = "&#128522;"
}
if (results[0].label == "sad") {
    document.getElementById("update_emoji").innerHTML = "&#128546;"
}
if (results[0].label == "angry") {
    document.getElementById("update_emoji").innerHTML = "&#128546;"
}
if (results[0].label == "happy") {
    document.getElementById("update_emoji2").innerHTML = "&#128522;"
}
if (results[0].label == "sad") {
   document.getElementById("update_emoji2").innerHTML = "&#128546;"
}
if (results[0].label == "angry") {
   document.getElementById("update_emoji2").innerHTML = "&#128546;"
}
