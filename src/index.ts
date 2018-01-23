// add styles
// import './style.css'
// three.js
import * as THREE from 'three'
// import { OrbitControls } from 'three-orbitcontrols-ts'
import './orbitcontrol.js'

// create the scene
let scene = new THREE.Scene()

// create the camera
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)
// camera.position.set( -600, 550, 1300 )

let renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.gammaInput = true;
renderer.gammaOutput = true;

// set size
renderer.setSize(window.innerWidth, window.innerHeight)

// add canvas to dom
document.body.appendChild(renderer.domElement)

// CONTROLS
console.log(THREE.OrbitControls)
let cameraControls = new THREE.OrbitControls( camera, renderer.domElement )
cameraControls.addEventListener( 'change', render )

// add axis to the scene
let axis = new THREE.AxisHelper(10)

scene.add(axis)

// add lights
let light = new THREE.DirectionalLight(0xffffff, 1.0)

light.position.set(100, 100, 100)

scene.add(light)

let light2 = new THREE.DirectionalLight(0xffffff, 1.0)

light2.position.set(-100, 100, -100)

scene.add(light2)

let material = new THREE.MeshBasicMaterial({
	color: 0xaaaaaa,
	wireframe: true
})

// create a box and add it to the scene
let box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material)

scene.add(box)

box.position.x = 0.5
box.rotation.y = 0.5

camera.position.x = 5
camera.position.y = 5
camera.position.z = 5

camera.lookAt(scene.position)

function animate(): void {
	requestAnimationFrame(animate)
	render()
}

function render(): void {
	let timer = 0.002 * Date.now()
	box.position.y = 0.5 + 0.5 * Math.sin(timer)
	box.rotation.x += 0.1
	renderer.render(scene, camera)
}

function onWindowResize():void {
	var canvasWidth = window.innerWidth;
	var canvasHeight = window.innerHeight;
	renderer.setSize( canvasWidth, canvasHeight );
	camera.aspect = canvasWidth / canvasHeight;
	camera.updateProjectionMatrix();
	render();
}
// EVENTS
window.addEventListener( 'resize', onWindowResize, false );

animate()