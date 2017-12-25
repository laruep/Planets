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
	constructor(radius, color, mass){
		this.geometry = new THREE.SphereGeometry(radius, sphereComplexity, sphereComplexity);
		this.color = new THREE.color("rgb")
		this.material = new THREE.MeshLambertMaterial( {color: this.c} );
		this.mesh = new THREE.Mesh(this.geometry,this.material);
		this.mass = mass;

		//this.mesh.position.x = click X position
		//this.mesh.position.y = click Y position
	}

	get mass(){
		return this.mass;
	}
}