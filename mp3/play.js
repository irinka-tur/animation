var dir = document.querySelector("img");
var audio = document.querySelectorAll("audio");
dir.onclick =  function(){
        for (var i=0; i<audio.length; i++)
        {
            if (audio[i].paused)
            {
                audio[i].play();
                this.innerHTML = "Выключить музыку";
            }
            else
            {	
                audio[i].pause();
                this.innerHTML = "Включить музыку";
            }
        }
}   