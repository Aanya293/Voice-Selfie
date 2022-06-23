var Speechrecognition=window.webkitSpeechRecognition;
var recognition = new Speechrecognition;
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult = function(event){
     console.log(event);
     var content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML= content ;
     if(content== "take my selfie"){
        speak()
    
    
    }
  

}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data) ; 
    synth.speak(utterthis)

   Webcam.attach(Camera);
   setTimeout(function(){
    snap1();
    save();
   },5000);
  
}
Webcam.set({
    width: 350, 
    height: 250,
    image_format: "png",
    png_quality: 90
});
Camera= document.getElementById("camera");

function snap1(){
    Webcam.snap(
        function(image){
            document.getElementById("result").innerHTML='<img id="show" src="'+ image +'">';

        }
    );
}

function save(){
    link  = document.getElementById("link");
    image = document.getElementById("show").src ;
   link.href=image;
   link.click();
}