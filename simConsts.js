var pi = Math.PI;
var d90 = pi/2;
var d45 = pi/4;
var d30 = pi/6;
var d15 = pi/12;
const sphereComplexity = 20;

function randColors(){   
    var min = 0;
    var max = 255;

// Get random colors in RGB values 0 to 255
    var colors = [Math.floor(Math.random() * (max - min + 1)) + min , Math.floor(Math.random() * (max - min + 1)) + min , Math.floor(Math.random() * (max - min + 1)) + min];
// Convert to 0 to 1 float RGB
    colors = [1/colors[0],1/colors[1],1/colors[2]];

    return colors;
}