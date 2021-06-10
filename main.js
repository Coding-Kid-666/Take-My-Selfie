//Adding some variables
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
//Wow just 2 vars this time :D

//Function startrec for when Start clicked
function start(){
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}

//On result
recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML = content;
    //Making sure if people are saying "Take my selfie"
    if(content == "take my selfie"){
        console.log("Taking selfie");
        speak();
    }
}

//Function speak()
function speak(){
    var synth = window.speechSynthesis;
    var speakData = "Taking your selfie in 5 seconds.";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    
    //Turning on webcam
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        alert("If you want to download the image click ok. If not close this tab.");
        save();
        
    },5000)
}

//Webcam settings
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

//Function take_snapshot so we can take our selfie.
function take_snapshot(){
    Webcam.snap(function (data_url){
      document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_url + '">';
      console.log("Hello world."); 
    });
}

//Function save so we can share our selfies
function save(){
    link = document.getElementById("link");
    img = document.getElementById("selfie_image").src;
    link.href = img;
    link.click();
}