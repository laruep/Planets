var planets = [];
//var garbage = [];

var lastTime, deltaTime;


function spawnPlanet(coords){
// Create new Planet object, add to scene, and add to planets array 
	//var colors = randColors();
	colors = [255,0,0];
	var newPlanet = new Planet(.3, colors  , 1 , coords);
	scene.add(newPlanet.mesh);
	planets.push(newPlanet);


}


function deletePlanet(index){
// Delete Planet object from scene and array
	scene.remove(planets[index].mesh);
	planets.splice(index,1);


}


