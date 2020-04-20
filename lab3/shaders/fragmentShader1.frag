
varying vec3 vUv;

uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 colorC;
uniform vec3 colorD;

void main() {
	gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0)+vec4(mix(colorB, colorC, vUv.x), 1.0)+vec4(mix(colorB, colorD, vUv.y), 1.0); //rgba, return blue
}
