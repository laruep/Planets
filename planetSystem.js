var planets = [];
var isPlanets = 0;

function spawnPlanet(coords){
// Create new Planet object, add to scene, and add to planets array 
	//var colors = randColors();
	colors = [255,0,0];
	var newPlanet = new Planet(.3, colors  , 1 , coords);
	scene.add(newPlanet.mesh);
	planets.push(newPlanet);
	isPlanets = 1;


}


function deletePlanet(index){
// Delete Planet object from scene and array
	scene.remove(planets[index].mesh);
	planets.splice(index,1);

}
/*
function orbit(){
	var step = 0;
    for (var i = 0; i < planets.length; i++){
        var dist = Math.sqrt(Math.pow(planets[i].mesh.position.x,2) + Math.pow(planet[i].mesh.position.y,2));
        planets[i].mesh.position.x = dist * Math.cos(step);
        planets[i].mesh.position.y = dist * Math.sin(step);
    }
    step += .04;
}
*/
