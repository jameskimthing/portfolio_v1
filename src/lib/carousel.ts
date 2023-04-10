import * as THREE from 'three';
import { getRatioDoneOnScroll, scroll } from './screenUnits';
import { showProject } from './projectPopup';

const projects: { [name: string]: { link: string; description: string; github?: string } } = {
	'aws-icons': {
		link: 'https://jameskimthing.github.io/aws-icons',
		description: 'My AWS Icons'
	},
	'tab-container': {
		link: 'https://jameskimthing.github.io/tab-container/?title=null&favicon=',
		description: 'My tab container'
	},
	tables: {
		link: 'https://james-tables.vercel.app',
		description: 'tables'
	},
	'obsidian-aws': {
		link: 'https://jameskimthing.github.io/obsidian-aws',
		description: 'AWS notes'
	},
	'password-manager': {
		link: 'https://jameskimthing.github.io/my-utilities/pwds',
		description: 'Password manager',
		github: 'https://github.com/jameskimthing/my-utilities'
	},
	'l-systems': {
		link: 'https://jameskimthing.github.io/my-utilities/algo/l-systems',
		description: 'l-systems',
		github: 'https://github.com/jameskimthing/my-utilities'
	}
};

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();

const radius = 5;
const angleStep: number = (Math.PI * 2) / 6;
const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.PlaneGeometry(4, 4);
const projectEntries = Object.entries(projects);

let container: HTMLDivElement;
let continueAnimation: boolean = true;
let camera: THREE.PerspectiveCamera | null;

function initializeCarousel(con: HTMLDivElement) {
	container = con;

	const r = container.clientWidth / container.clientHeight;
	camera = new THREE.PerspectiveCamera(75, r, 0.1, 1000);
	camera.position.z = radius * 2;
	camera.position.set(-0.5, 0, 0);
	camera.lookAt(0, 0, 0);

	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor(0x000814, 1);
	container.appendChild(renderer.domElement);

	for (let i = 0; i < 6; i++) {
		const angle = i * angleStep;
		const x = Math.cos(angle) * radius;
		const z = Math.sin(angle) * radius;

		const [projectName, project] = projectEntries[i];
		const material = new THREE.MeshBasicMaterial({
			map: textureLoader.load(`/projects/${projectName}.png`),
			side: THREE.FrontSide
		});

		const mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x, 0, z);
		mesh.lookAt(0, 0, 0);
		mesh.userData.name = projectName;
		scene.add(mesh);
	}

	let prevIntersect: THREE.Mesh;
	const targetScale = new THREE.Vector3(1.2, 1.2, 1.2);
	const originalScale = new THREE.Vector3(1, 1, 1);

	function animate() {
		if (!continueAnimation) return (continueAnimation = true);
		requestAnimationFrame(animate);
		renderer.render(scene, camera!);

		raycaster.setFromCamera(mouse, camera!);
		const intersects = raycaster.intersectObjects(scene.children);
		if (intersects.length > 0) {
			container.style.cursor = 'pointer';

			const intersect = intersects[0].object as THREE.Mesh;
			if (intersect !== prevIntersect) {
				if (prevIntersect) prevIntersect.scale.set(1, 1, 1);
				prevIntersect = intersect;
			}
			prevIntersect.scale.lerp(targetScale, 0.1);

			if (isClick) {
				console.log('Click: ' + prevIntersect.userData.name);
				showProject.set(prevIntersect.userData.name);
				isClick = false;
			}
		} else {
			if (prevIntersect) {
				prevIntersect.scale.lerp(originalScale, 0.1);
				if (prevIntersect.scale.distanceTo(originalScale) < 0.01) {
					prevIntersect.scale.copy(originalScale);
				}
			}

			container.style.cursor = 'default';
			isClick = false;
		}
	}
	animate();
}

async function removeCarousel() {
	if (!camera) return;

	mouse.x = -10;
	mouse.y = -10;
	continueAnimation = false;

	while (!continueAnimation) await new Promise((res) => setTimeout(res, 10));

	scene.children.forEach((object) => {
		scene.remove(object);
		if (object instanceof THREE.Mesh) {
			if (object.geometry) object.geometry.dispose();
			if (object.material) object.material.dispose();
			// @ts-ignore: Unreachable code error
			object = undefined;
		}
	});
	scene.children = [];

	scene.remove(camera);
	camera = null;
}

scroll.subscribe((scrollY) => {
	if (!scene) return;

	const ratioScrolledOnCarousel = getRatioDoneOnScroll(scrollY);
	const angle = ratioScrolledOnCarousel * (2 * Math.PI);
	scene.rotation.y = angle;
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-10, -10);

let isClick: boolean = false;
function carouselMouseMove(e: any) {
	const rect = container.getBoundingClientRect();
	mouse.x = ((e.x - rect.left) / rect.width) * 2 - 1;
	mouse.y = ((e.y - rect.top) / rect.height) * 2 - 1;
}

function carouselMouseLeave() {
	mouse.x = -10;
	mouse.y = -10;
}

function carouselClick(e: any) {
	const rect = container.getBoundingClientRect();
	mouse.x = ((e.x - rect.left) / rect.width) * 2 - 1;
	mouse.y = ((e.y - rect.top) / rect.height) * 2 - 1;
	isClick = true;
}

export {
	initializeCarousel,
	carouselMouseMove,
	carouselClick,
	removeCarousel,
	carouselMouseLeave,
	projects
};
