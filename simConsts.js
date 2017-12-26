var pi = Math.PI;
var d90 = pi/2;
var d45 = pi/4;
var d30 = pi/6;
var d15 = pi/12;
const sphereComplexity = 20;
var step = 0;

var XAxis, YAxis, ZAxis;
XAxis = new THREE.Vector3(1,0,0).normalize();
YAxis = new THREE.Vector3(-0,1,0).normalize();
ZAxis = new THREE.Vector3(0,0,1).normalize();


function randColors(){   
    var min = 0;
    var max = 255;

// Get random colors in RGB values 0 to 255
    var colors = [Math.floor(Math.random() * (max - min + 1)) + min , Math.floor(Math.random() * (max - min + 1)) + min , Math.floor(Math.random() * (max - min + 1)) + min];

    var colorstring = "rgb(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")";
    return colorstring;
}