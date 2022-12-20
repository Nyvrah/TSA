const modelViewer = document.querySelector("#spaceship");
var x = 1;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
window.addEventListener('scroll', function(){
    var value = window.scrollY;
    var yScroll = value/vh;
    if (yScroll <= 2){
        modelViewer.style.left = "25%";
        if (yScroll <= 0){
            modelViewer.cameraOrbit = `35deg 70deg 100%`;
        }
        else if (yScroll <= 1){
            modelViewer.cameraOrbit = `90deg 0deg 100%`;
        }
        else if (yScroll <= 2){
            modelViewer.cameraOrbit = `90deg 70deg 100%`;
        }
        else if (yScroll <= 3){
            modelViewer.style.left = "25%";
            modelViewer.cameraOrbit = `0deg 70deg 100%`;
        }
    }
    else {
        modelViewer.style.left = "0%";
        modelViewer.cameraOrbit = `0deg 60deg 80%`;
        
    }
    document.getElementById('scrollCount').innerHTML= value + " " + x +" " + vh + " " + yScroll;
    
    x+=1;
})