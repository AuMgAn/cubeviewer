import { Component, Input, type OnInit, inject } from "@angular/core";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { type KeyEvent, KeyService } from "../key-service.service";

@Component({
	selector: "app-viewer",
	imports: [],
	templateUrl: "./viewer.component.html",
	styleUrl: "./viewer.component.scss",
})
export class ViewerComponent implements OnInit {
	@Input() size = 3;
	@Input() face = "g";
	@Input() inputSpeed = 0.1; //s
	@Input() algorithm: KeyEvent[] = [];

	rotationSpeed = 0.1;
	width = 3;
	keys: KeyService = inject(KeyService);
	currentEvent: KeyEvent | undefined = undefined;
	internClock = new THREE.Clock(false);
	rotatingBoxes: THREE.Mesh[] = [];

	material: THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({
		color: 0x808080,
		emissive: 0x0,
		specular: 0x111111,
		shininess: 15,
		reflectivity: 0.1,
		refractionRatio: 0.1,
		combine: THREE.MultiplyOperation,
		vertexColors: true,
	});

	boxes: THREE.Mesh[][][] = [];

	ngOnInit(): void {
		document.addEventListener("keypress", (ev) => {
			if (
				["u", "d", "f", "b", "r", "l", "m", "s", "e"].indexOf(
					ev.key.toLowerCase(),
					0,
				) !== -1
			) {
				this.keys.updateKeypress(ev);
			}
		});

		this.createThreeJsBox();
	}

	createThreeJsBox(): void {
		const canvas = document.getElementById("canvas-box");

		if (!canvas) {
			return;
		}

		const scene = new THREE.Scene();

		const ambientLight = new THREE.AmbientLight(0xffffff, 2);
		scene.add(ambientLight);

		const pointLight = new THREE.PointLight(0xffffff, 500);
		pointLight.position.x = 2;
		pointLight.position.y = this.size * this.width * 2;
		pointLight.position.z = 2;
		scene.add(pointLight);

		this.boxes = this.generateCube(this.size, scene);

		const canvasSizes = {
			width: canvas.clientWidth,
			height: canvas.clientHeight,
		};

		const camera = new THREE.PerspectiveCamera(
			75,
			canvasSizes.width / canvasSizes.height,
			0.001,
			1000,
		);
		camera.position.z = 15;
		scene.add(camera);

		const light = new THREE.PointLight(0xffffff, 100);
		light.position.set(camera.position.x, camera.position.y, camera.position.z);
		scene.add(light);

		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
		});
		renderer.setClearColor(0xe202020, 1);
		renderer.setSize(canvasSizes.width, canvasSizes.height);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.minDistance =
			(this.size / 2) * 1.732 * this.width + this.width / 2;
		controls.maxPolarAngle = Math.PI * 2;
		controls.minPolarAngle = -Math.PI * 2;
		controls.saveState();

		const reset = () => {
			this.keys.reset();
			scene.clear();
			scene.add(camera, light, pointLight, ambientLight);
			this.boxes = this.generateCube(this.size, scene);
			controls.minDistance =
				(this.size / 2) * 1.732 * this.width + this.width / 2;
		};

		document.getElementById("reset-button")?.addEventListener("click", () => {
			reset();
		});

		const slider = document.getElementById("size-slider");
		slider?.addEventListener("change", () => {
			if (this.boxes.length !== this.size) {
				reset();
			}
		});

		window.addEventListener("resize", () => {
			canvasSizes.width = window.innerWidth - 200;
			canvasSizes.height = window.innerHeight - 100;

			camera.aspect = canvasSizes.width / canvasSizes.height;
			camera.updateProjectionMatrix();

			renderer.setSize(canvasSizes.width, canvasSizes.height);
			renderer.render(scene, camera);
		});

		const animateGeometry = () => {
			light.position.set(
				camera.position.x,
				camera.position.y,
				camera.position.z,
			);

			this.animateRotation();

			// Render
			renderer.render(scene, camera);

			// Call animateGeometry again on the next frame
			window.requestAnimationFrame(animateGeometry);
		};

		animateGeometry();
	}

	generateCube(size: number, scene: THREE.Scene) {
		const idCubes: THREE.Mesh[][][] = [];
		const padding = this.width / 50;

		for (let i = 0; i < size; i++) {
			const intermediateArray1: THREE.Mesh[][] = [];
			const zOffset = (this.width + padding) * (i - (size - 1) / 2);

			for (let j = 0; j < size; j++) {
				const intermediateArray2: THREE.Mesh[] = [];
				const yOffset = (this.width + padding) * (j - (size - 1) / 2);

				for (let k = 0; k < size; k++) {
					if (
						i !== 0 &&
						j !== 0 &&
						k !== 0 &&
						i !== size - 1 &&
						j !== size - 1 &&
						k !== size - 1
					) {
						intermediateArray2.push(new THREE.Mesh());
						continue;
					}
					const xOffset = (this.width + padding) * (k - (size - 1) / 2);
					const geom = new THREE.BoxGeometry(
						this.width,
						this.width,
						this.width,
					).toNonIndexed();
					const positionAttribute = geom.getAttribute("position");
					const colors = [];
					const color = new THREE.Color();

					for (let m = 0; m < positionAttribute.count; m += 3) {
						const vectAB = new THREE.Vector3(
							positionAttribute.getX(m + 1) - positionAttribute.getX(m),
							positionAttribute.getY(m + 1) - positionAttribute.getY(m),
							positionAttribute.getZ(m + 1) - positionAttribute.getZ(m),
						);
						const vectAC = new THREE.Vector3(
							positionAttribute.getX(m + 2) - positionAttribute.getX(m),
							positionAttribute.getY(m + 2) - positionAttribute.getY(m),
							positionAttribute.getZ(m + 2) - positionAttribute.getZ(m),
						);
						const normal = vectAB.cross(vectAC); //.normalize()

						if (normal.x > 0 && k === size - 1) {
							color.setRGB(1, 0, 0);
						} else if (normal.x < 0 && k === 0) {
							color.setRGB(1, 0.3, 0);
						} else if (normal.y > 0 && j === size - 1) {
							color.setRGB(1, 1, 1);
						} else if (normal.y < 0 && j === 0) {
							color.setRGB(1, 1, 0);
						} else if (normal.z > 0 && i === size - 1) {
							color.setRGB(0, 1, 0);
						} else if (normal.z < 0 && i === 0) {
							color.setRGB(0, 0, 1);
						} else {
							color.setRGB(0, 0, 0);
						}

						// define the same color for each vertex of a triangle

						colors.push(color.r, color.g, color.b);
						colors.push(color.r, color.g, color.b);
						colors.push(color.r, color.g, color.b);
					}

					// define the new attribute

					geom.setAttribute(
						"color",
						new THREE.Float32BufferAttribute(colors, 3),
					);

					const cube = new THREE.Mesh(geom, this.material);
					cube.position.x = xOffset;
					cube.position.y = yOffset;
					cube.position.z = zOffset;

					intermediateArray2.push(cube);
					scene.add(cube);
				}
				intermediateArray1.push(intermediateArray2);
			}
			idCubes.push(intermediateArray1);
		}
		return idCubes;
	}

	rotateSlice(time = 1) {
		const [rotMat, angle] = this.getRotationMat(time);
		for (const box of this.rotatingBoxes) {
			box.position.applyMatrix4(rotMat);
			if (rotMat.elements[0] !== 1 && rotMat.elements[10] === 1) {
				box.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), angle);
			} else if (rotMat.elements[5] !== 1) {
				box.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), angle);
			} else if (rotMat.elements[10] !== 1) {
				box.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), angle);
			}
		}
	}

	private getSlice(): number[][] {
		switch (this.currentEvent?.key) {
			case "F":
				return this.currentEvent.wide
					? [[this.size - 1, this.size - 2], [], []]
					: [[this.size - 1], [], []];
			case "B":
				return this.currentEvent.wide ? [[0, 1], [], []] : [[0], [], []];
			case "U":
				return this.currentEvent.wide
					? [[], [this.size - 1, this.size - 2], []]
					: [[], [this.size - 1], []];
			case "D":
				return this.currentEvent.wide ? [[], [0, 1], []] : [[], [0], []];
			case "R":
				return this.currentEvent.wide
					? [[], [], [this.size - 1, this.size - 2]]
					: [[], [], [this.size - 1]];
			case "L":
				return this.currentEvent.wide ? [[], [], [0, 1]] : [[], [], [0]];
			case "M":
				return [[], [], [1]];
			case "E":
				return [[], [1], []];
			case "S":
				return [[1], [], []];
		}
		return [[], [], []];
	}

	private getRotationMat(time = 1): [THREE.Matrix4, number] {
		const mat = new THREE.Matrix4();
		let angle = 0;
		const factor = this.currentEvent?.shift ? -1 : 1;
		switch (this.currentEvent?.key) {
			case "F":
				angle = (-Math.PI / 2) * factor * time;
				mat.makeRotationZ(angle);
				break;
			case "B":
				angle = (Math.PI / 2) * factor * time;
				mat.makeRotationZ(angle);
				break;
			case "U":
				angle = (-Math.PI / 2) * factor * time;
				mat.makeRotationY(angle);
				break;
			case "D":
				angle = (Math.PI / 2) * factor * time;
				mat.makeRotationY(angle);
				break;
			case "R":
				angle = (-Math.PI / 2) * factor * time;
				mat.makeRotationX(angle);
				break;
			case "L":
				angle = (Math.PI / 2) * factor * time;
				mat.makeRotationX(angle);
				break;
			case "M":
				angle = (Math.PI / 2) * factor * time;
				mat.makeRotationX(angle);
				break;
			case "E":
				angle = (Math.PI / 2) * factor * time;
				mat.makeRotationY(angle);
				break;
			case "S":
				angle = (-Math.PI / 2) * factor * time;
				mat.makeRotationZ(angle);
				break;
		}
		return [mat, angle];
	}

	private idsToBoxes(ids: number[][]): THREE.Mesh[] {
		const boxBuffer: THREE.Mesh[] = [];
		if (ids[0].length > 0) {
			for (const id of ids[0]) {
				boxBuffer.push(...this.boxes[id].flat());
			}
		} else if (ids[1].length > 0) {
			for (const slice of this.boxes) {
				for (const id of ids[1]) {
					boxBuffer.push(...slice[id]);
				}
			}
		} else if (ids[2].length > 0) {
			for (const slice of this.boxes) {
				for (const row of slice) {
					for (const id of ids[2]) {
						boxBuffer.push(row[id]);
					}
				}
			}
		}

		return boxBuffer;
	}

	private clampVec3(vec3: THREE.Vector3) {
		const offsets: number[] = [];
		for (let i = 0; i < this.size; i++) {
			offsets.push((this.width + this.width / 50) * (i - (this.size - 1) / 2));
		}
		const closer = [9999999, 9999999, 9999999];
		for (const off of offsets) {
			if (Math.abs(vec3.x - off) < Math.abs(vec3.x - closer[0])) {
				closer[0] = off;
			}
			if (Math.abs(vec3.y - off) < Math.abs(vec3.y - closer[1])) {
				closer[1] = off;
			}
			if (Math.abs(vec3.z - off) < Math.abs(vec3.z - closer[2])) {
				closer[2] = off;
			}
		}
		vec3.x = closer[0];
		vec3.y = closer[1];
		vec3.z = closer[2];
	}

	private clampRotation(rot: THREE.Euler) {
		const closer = [9999999, 9999999, 9999999];
		for (const cardinal of [0, Math.PI / 2, Math.PI, -Math.PI / 2, -Math.PI]) {
			if (Math.abs(rot.x - cardinal) < Math.abs(rot.x - closer[0])) {
				closer[0] = cardinal;
			}
			if (Math.abs(rot.y - cardinal) < Math.abs(rot.y - closer[1])) {
				closer[1] = cardinal;
			}
			if (Math.abs(rot.z - cardinal) < Math.abs(rot.z - closer[2])) {
				closer[2] = cardinal;
			}
		}
		rot.x = closer[0];
		rot.y = closer[1];
		rot.z = closer[2];
	}

	private sortBoxes() {
		const flatBoxes = this.boxes.flat().flat();
		for (const box of flatBoxes) {
			this.clampVec3(box.position);
			this.clampRotation(box.rotation);
		}
		flatBoxes.sort((a: THREE.Mesh, b: THREE.Mesh): number => {
			//1st -z -y -x
			return (
				10000 * (a.position.z - b.position.z) +
				100 * (a.position.y - b.position.y) +
				(a.position.x - b.position.x)
			);
		});
		for (let i = 0; i < this.size; i++) {
			for (let j = 0; j < this.size; j++) {
				for (let k = 0; k < this.size; k++) {
					this.boxes[i][j][k] =
						flatBoxes[i * this.size * this.size + j * this.size + k];
				}
			}
		}
	}

	private animateRotation() {
		if (this.keys.isEmpty() && !this.currentEvent) {
			return;
		}
		if (this.internClock.elapsedTime / this.rotationSpeed > 1) {
			this.internClock.stop();
			this.internClock.running = false;
			this.internClock.elapsedTime = 0;
			this.sortBoxes();
			this.rotationSpeed = this.inputSpeed;
			return;
		}
		if (!this.internClock.running) {
			this.internClock.start();
			this.currentEvent = this.keys.pop();
			this.rotatingBoxes = this.idsToBoxes(this.getSlice());
		}

		this.rotateSlice(this.internClock.getDelta() / this.rotationSpeed);
	}
}
