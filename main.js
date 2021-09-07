function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    var Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0tt0CbqdI/",modelReady);
}
function modelReady(){
   Classifier.Classify(gotResults)
}
function gotResults(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result)
       var random_number_r = Math.floor(Math.random()*255)+1;
       var random_number_g = Math.floor(Math.random()*255)+1;
       var random_number_b = Math.floor(Math.random()*255)+1;

       document.getElementById("hearing").innerHTML = "I Can Hear - " + result[0].label;
       document.getElementById( "accuracy").innerHTML = 'Accuracy - ' + (result[0].confidence*100).toFixed(2) + "%";
       document.getElementById("hearing").style.color = "rgb(" +random_number_r+"," +random_number_g+"," +random_number_b+ ")";
       document.getElementById("accuracy").style.color = "rgb(" +random_number_r+"," +random_number_g+"," +random_number_b+ ")";
    }
    img = document.getElementById("aliens-01.png");
    img2 = document.getElementById("aliens-02.png");
    img3 = document.getElementById("aliens-03.png");
    
    if(result[0].label == "clap")
    {
        img = "aliens-01.gif";
        img2 = "aliens-02.png";
        img3 = "aliens-03.png";

    }
    else if(result[0].label == "plate sound"){
        img = "aliens-01.png";
        img2 = "aliens-02.gif";
        img3 = "aliens-03.png";
    }
    else{
        img = "aliens-01.png";
        img2 = "aliens-02.png";
        img3 = "aliens-03.gif";
    }

}