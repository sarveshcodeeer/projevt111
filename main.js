Webcam.set({

    width: 250 , height : 250 , image_format  : "png" , png_quality : 90
    
    })
    
    camera = document.getElementById("camera") ; 
    Webcam.attach(camera) ; 

    function cg() {

        Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='pic1'src="+data_uri+">" ; 
        
        })
        
        }
        
        console.log('hi this is ml5' , ml5.version)
        
        classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/w6JCf4Lqu/model.json" , modelLoaded)
        
        function modelLoaded(){
            console.log("model has loaded commander") ; 
        }