var planets = [];
//var garbage = [];

var lastTime, deltaTime;






function orbits(){


}

function spawnPlanet(){
// Create new Planet object, add to scene, and add to planets array 
	var newPlanet = new Planet(sphereComplexity, randColors(), 1);
	scene.add(newPlanet);
	planets.push(newPlanet);


}


function deletePlanet(index){
// Delete Planet object from scene and array
	scene.remove(planets[index].mesh);
	planets.splice(index,1);


}


