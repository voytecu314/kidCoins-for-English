const recogniseSpeech = (word) => {
    
        // get output div reference
        //var output = document.getElementById("output");
        // get action element reference
        //var action = document.getElementById("action");
        // new speech recognition object
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
    
        // This runs when the speech recognition service starts
        /* recognition.onstart = function() {
            action.innerHTML = "<small>listening, please speak...</small>";
        }; */
        
        recognition.onspeechend = function() {
            //action.innerHTML = "<small>stopped listening, hope you are done...</small>";
            recognition.stop();
        }
      
        // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            var confidence = event.results[0][0].confidence;
            if(transcript==word){
                    //output.innerHTML = "<b>Text:</b> " + transcript + " OK<br/> <b>Confidence:</b> ";
                    console.log('you said ', transcript,'word was ', word, 'GOOD!');
                    console.log('confidence',confidence);
            } else {
                //output.innerHTML = "<b>Text:</b> NOOOOOO OK<br/> <b>Confidence:</b> ";
                console.log('you said ', transcript,'word was ', word, 'TOO BAD!');
                console.log('confidence',confidence);
            }
            //output.classList.remove("hide");
        };
      
         // start recognition
         recognition.start();
    
}

export default recogniseSpeech;