import * as THREE from 'three';

let container: HTMLDivElement;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;

function initialize(con: HTMLDivElement) {
	container = con;

	// Sets: scene, camera, renderer, light, grid
	setFoundation();
	addStars(scene);

	// Create a wireframe donut
	// const geometry = new THREE.TorusGeometry(3, 1, 12, 40);
	// const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
	// const donut = new THREE.Mesh(geometry, material);
	// scene.add(donut);

	// Animate
	const animate = function () {
		requestAnimationFrame(animate);
		// donut.rotation.x += 0.01;
		// donut.rotation.y += 0.01;
		renderer.render(scene, camera);
	};
	animate();
	setCameraMovement();
}

function setCameraMovement() {
	function set() {
		let t = document.body.getBoundingClientRect().top;
		if (t === 0) t = -0.0001;

		const y = t * -0.005;

		const x = -t * 0.005 * Math.sin(t * -0.001);
		const z = -t * 0.005 * Math.cos(t * -0.001);

		camera.position.set(x, y, z);
		camera.lookAt(0, 0, 0);
	}
	document.body.onscroll = set;
	set();
}

function setFoundation() {
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 1000);

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x000814, 1);
	container.appendChild(renderer.domElement);

	const ambientLight = new THREE.AmbientLight(0xffffff);
	scene.add(ambientLight);
}

function addStars(scene: THREE.Scene) {
	for (let i = 0; i < 200; i++) {
		const geometry = new THREE.SphereGeometry(0.25, 24, 24);
		const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
		const star = new THREE.Mesh(geometry, material);

		const r = THREE.MathUtils.randFloatSpread;
		star.position.set(r(100), r(100), r(100));
		scene.add(star);
	}
}

function onResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

export { initialize, onResize };
