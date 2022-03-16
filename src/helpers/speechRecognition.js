const recogniseSpeech = (word, highScores, setHighScores) => {
        // new speech recognition object
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
    
        // This runs when the speech recognition service starts
        /* recognition.onstart = function() {
            
        }; */
        
        recognition.onspeechend = function() {
            recognition.stop();
        }
      
        // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            var confidence = event.results[0][0].confidence;
            if(transcript.toLowerCase()==word){
                    console.log('you said ', transcript,'word was ', word, 'GOOD!');
                    console.log('confidence',confidence);
                    setHighScores(highScores + 1);
                    //localStorage.setItem('learnENG', JSON.stringify(highScores.current));
                    
            } else {
                console.log('you said ', transcript,'word was ', word, 'TOO BAD!');
                console.log('confidence',confidence);
                
            }
            
        };
      
         // start recognition
         recognition.start();
}

export default recogniseSpeech;