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
		this.color = new THREE.Color(color);
		this.material = new THREE.MeshLambertMaterial( {color: this.color} );
		this.mesh = new THREE.Mesh(this.geometry,this.material);
		this.mass = mass;

		this.mesh.position.set(coords[0] , coords[1], 0);

		this.vecPos = new THREE.Vector3(coords[0] , coords[1], 0);
		this.angle = this.vecPos.angleTo( XAxis );
	}
}