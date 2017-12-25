var planets = [];
//var garbage = [];

var lastTime, deltaTime;

function orbits(){


}


function spawnPlanet(coords){
// Create new Planet object, add to scene, and add to planets array 
	var newPlanet = new Planet(sphereComplexity , randColors() , 1 , coords);
	scene.add(newPlanet.mesh);
	planets.push(newPlanet);


}


function deletePlanet(index){
// Delete Planet object from scene and array
	scene.remove(planets[index].mesh);
	planets.splice(index,1);


}


