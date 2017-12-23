//     OVERVIEW
// - This will probably be entirely 2D (ie. camera will just look into z axis)
// - This will simplify math and everything
// - Althought come to think of it this would be cool AF if it wa 3D and looked ellipitcal and shit
// ---------------------------------------------------------------------------------------------------------
//     TO DO 
// - Create center planet
// - Create placeholder buttons for adding planets/clicking to add a planet
// - Implement physics for second planet
// - Create orbit "trails" or predicted path lines
// ---------------------------------------------------------------------------------------------------------
//     FURTHER TO DO
// - Add click-and-hold feature for adding planets to make a variable mass that affects phsyics
//


//Math contants and such
var pi = Math.PI;


var camera, scene, renderer;
var geometry, material, player;


var XAxis, YAxis, ZAxis;
XAxis = new THREE.Vector3(1,0,0).normalize();
YAxis = new THREE.Vector3(-0,1,0).normalize();
ZAxis = new THREE.Vector3(0,0,1).normalize();


var RED = new THREE.Color( 0xff0000 );
var GREEN = new THREE.Color( 0x00ff00 );
var BLUE = new THREE.Color( 0x0000ff );

var cubeColors = [ RED, GREEN, BLUE ];

init();

function init() {
    // Createss a camera object
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    // This wil change the camera to be slightly above the normal plane to make scene appear really 3D, may not need this
    camera.position.set(1,1,1);
    // Creates a scene object
    scene = new THREE.Scene();

    // Create renderer and set its size
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );

    // Create sphere mesh from geometry and wireframe material
    geometry = new THREE.SphereGeometry( .5 , 20, 20);
    material = new THREE.MeshBasicMaterial( { color: 0xff0000 , wireframe: true} );
    centerPlanet = new THREE.Mesh( geometry, material );



    scene.add( centerPlanet );
    camera.lookAt(centerPlanet.position);

    document.getElementById("output").appendChild(renderer.domElement);
    renderer.render(scene, camera);

}

/*
function animate() {

    // Need function to get physics for planets calculated for translations and rotations etc.
                // add the output of the renderer to the html element
    document.getElementById("gl-canvas").appendChild(renderer.domElement);

        // render the scene
    renderer.render(scene, camera);
    }

// Click to add planet ... 
// Later: Figure out click and hold functionality
//document.addEventListener('click', addPlanet);

// @function: adds a planet where the user clicks
// @parameters:
//      - event: Key down event, contains pressed key

/*
function addPlanet(event){

    // Start Game
//    if (document.getElementById("start").innerHTML != ""){
//        document.getElementById("start").innerHTML = "";
//        return;
//   }

    xSpeed = Math.PI/2
    ySpeed = Math.PI/2

    switch(event.key) {
        case 'ArrowUp':
            lerpAxis = XAxis;
            lerpTime = lerpTotalTime;
            lerpDistance = -xSpeed;
            break;
        case 'ArrowDown':
            lerpAxis = XAxis;
            lerpTime = lerpTotalTime;
            lerpDistance = xSpeed;
            break;
        case 'ArrowLeft':
            lerpAxis = YAxis;
            lerpTime = lerpTotalTime;
            lerpDistance = -ySpeed;
            break;
        case 'ArrowRight':
            lerpAxis = YAxis;
            lerpTime = lerpTotalTime;
            lerpDistance = ySpeed;
            break;
        case ' ':   //Spacebar -> Reset Cube OrientationWorld
            player.lookAt(0,0,0);
            break;
    }
    event.preventDefault();
}
*/



