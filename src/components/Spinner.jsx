import React from 'react';
import "./Spinner.css";

const Spinner = () => {

    const startSpinner = () => { // Final page transition code
 
        var animation = false,
        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
        elm = document.createElement('div');
         
        if( elm.style.animationName !== undefined ) { animation = true; } 
         
        if( animation === false ) {
            for( var i = 0; i < domPrefixes.length; i++ ) {
                if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
                    animation = true;
                    break;
                }
            }
        }
         
        var minloadingtime = 2900
        var maxloadingtime = 3000
         
        var startTime = new Date()
        var elapsedTime
        var dismissonloadfunc, maxloadingtimer
         
        if (animation && document.documentElement && document.documentElement.classList){
            document.documentElement.classList.add('hidescrollbar')
             
            window.addEventListener('load', dismissonloadfunc = function(){ // when page loads
                clearTimeout(maxloadingtimer) // cancel dismissal of transition after maxloadingtime time
                elapsedTime = new Date() - startTime // get time elapsed once page has loaded
                var hidepageloadertimer = (elapsedTime > minloadingtime)? 0 : minloadingtime - elapsedTime
                 
                setTimeout(function(){
                    document.getElementById('pageloader').classList.add('dimissloader') // dismiss transition
                }, hidepageloadertimer)
                 
                setTimeout(function(){
                    document.documentElement.classList.remove('hidescrollbar')
                }, hidepageloadertimer + 100) // 100 is the duration of the fade out effect
             
            }, false)
             
            maxloadingtimer = setTimeout(function(){ // force dismissal of page transition after maxloadingtime time
                window.removeEventListener('load', dismissonloadfunc, false) // cancel onload event function call
                    document.getElementById('pageloader').classList.add('dimissloader') // dismiss transition
                 
                setTimeout(function(){
                    document.documentElement.classList.remove('hidescrollbar')
                }, 100) // 100 is the duration of the fade out effect
            }, maxloadingtime)
         
         
        }
        else{
            document.getElementById('pageloader').style.display = 'none'
        }
    }

    startSpinner();

    return (
        <div id="pageloader">
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div> 
     );
}
 
export default Spinner
;