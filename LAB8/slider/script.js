var slider_img = document.querySelector("#slider");//select the image
images = ['pic1.jpg', 'pic2.jpeg', 'pic3.jpg', 'pic4.jpeg'];//array of images
var i = 0;
var x;
function prev() {//back moves backward in the array -1
    if (i <= 0) {
        i = images.length
    }
    i--;
    return setimg();
}

function next() {//next moves forward in the array +1
    if (i >= images.length - 1) {
        i = -1
    }
    i++;
    return setimg();
}
function setimg() {
    return slider_img.setAttribute('src', 'images/' + images[i], 'alt'); //changes the attribute of the image 
}
function start() {
    if (!x) {
        x = setInterval(next, 1000);//every two seconds will call next() method
    }
}

function stop() {
    clearInterval(x); //clear interval to remove the setinterval 
    x = null;
}