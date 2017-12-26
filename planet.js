/*

		This file will contain planet object constructor plus its methods for math
		Need variables for:
		-Color
		-Mass
		-Size

		-Geometry (sphere)
		-Matrial (Lambert?)
	------------------------------
		Need methods for:
		-Rotation About Sun
		-Ya

*/
//=====================================================================================================



class Planet{
	constructor(radius, color, mass, coords){
		this.geometry = new THREE.SphereGeometry(radius, sphereComplexity, sphereComplexity);
		this.color = new THREE.Color(color[0], color[1], color[2]);
		this.material = new THREE.MeshLambertMaterial( {color: this.color} );
		this.mesh = new THREE.Mesh(this.geometry,this.material);
		this.mass = mass;

		this.mesh.position.x = coords[0];
		this.mesh.position.y = coords[1];

		this.angle = Math.atan(coords[1] / coords[0]);
	}
}