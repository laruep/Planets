//     OVERVIEW
// - This will probably be entirely 2D (ie. camera will just look into z axis)
// - This will simplify math and everything
// - Althought come to think of it this would be cool AF if it wa 3D and looked ellipitcal and shit
// ---------------------------------------------------------------------------------------------------------
//     TO DO 
// [X] Create center sun
// [] Implement clicking to create a new planet
// [] Implement physics for second planet
// [] Create orbit "trails" or predicted path lines
// ---------------------------------------------------------------------------------------------------------
//     FURTHER TO DO
// [] Add click-and-hold feature for adding planets to make a variable mass that affects phsyics
// [] Have planets rotate about their own axes while rotating around the sun
// [] Randomize chance of planet having a ring
// [] Add pause button
// [] Allow planets to have moons
// [] Allow zoom with mouse wheel?


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
renderScene();

function init() {
// Createss a camera object
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
// This wil change the camera to be slightly above the normal plane to make scene appear really 3D, may not need this
    camera.position.set( 0 , 0 , 10);
// Creates a scene object
    scene = new THREE.Scene();

// Create renderer and set its size
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(new THREE.Color(0x000000));

// Create sphere mesh from geometry and Lambert (light-reactive) material
    geometry = new THREE.SphereGeometry( .5 , sphereComplexity, sphereComplexity);
    material = new THREE.MeshBasicMaterial( { color: 0xdddd00 } );
    centerPlanet = new THREE.Mesh( geometry, material );

// Create point representing sun
    var Sun = new THREE.PointLight( 0xffffff , 1 , 0 );
    Sun.position.set( 0 , 0 , 0 );
    scene.add( Sun );

// Create planet that will orbit sun
    var planetG = new THREE.SphereGeometry(.3, sphereComplexity, sphereComplexity);
    var planetM = new THREE.MeshLambertMaterial( { color: 0xaa22cc } );
    var planet = new THREE.Mesh(planetG,planetM);

    planet.position.set( 0 , 6.5 , 0 );
    scene.add( planet );

// Adds the center planet to the scene and center camera on it
    scene.add( centerPlanet );
    camera.lookAt(centerPlanet.position);

// Tells the script where to output the WebGL output and then renders the output
    document.getElementById("output").appendChild(renderer.domElement);
    //renderer.render( scene , camera);
    step = 0;
    renderScene();

    function renderScene() {

        var dist = Math.sqrt(Math.pow(planet.position.x,2) + Math.pow(planet.position.y,2));

        step += .04;
        planet.position.x = dist * Math.cos(step);
        planet.position.y = dist * Math.sin(step);



        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    }


    document.addEventListener('click', prepPlanet);

    function prepPlanet(event){
        var width, height;
        width = window.innerWidth;
        height = window.innerHeight;
        var reverseRatio = height/width;

        //Print non-converted coords
        var coords = [event.clientX,event.clientY];
        //console.log("X is: " + coords[0] + " , Y is: " + coords[1]);

        coords[0] = (coords[0] - width/2)/(camera.fov * reverseRatio);
        coords[1] = (coords[1] - height/2)/(camera.fov);

        //Print converted coords
        //console.log("X is: " + coords[0] + " , Y is: " + coords[1]);
        spawnPlanet(coords);
    }

}



