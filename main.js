var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
document.getElementById("textbox").innerHTML=""
recognition.start()
} 
recognition.onresult=function(event)
{
    console.log(event)
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content
console.log(content)
speak()
}
function speak()
{
    var synth=window.speechSynthesis
speakdata=document.getElementById("textbox").value
var udderthis=new SpeechSynthesisUtterance(speakdata)
synth.speak(udderthis)
Webcam.attach(camera)
take_selfie()
save()
}
var camera=document.getElementById("camera")
Webcam.set({
    width:360, height:250, image_format:'jpeg', jpeg_quality:90
})
function take_selfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+ data_uri +'" id="selfieimage"/>';

    })
}
function save()
{
    link=document.getElementById("link")
    img=document.getElementById("selfieimage").src 
    link.href=Image;
    link.click()
}