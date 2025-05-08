import { Component, Input, OnInit } from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-viewer',
  imports: [],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css'
})
export class ViewerComponent implements OnInit {

  @Input() size = 3;

  width = 15;

  material : THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial( {
    color: 0x808080,
    emissive: 0x0,
    specular: 0x111111,
    shininess: 15,
    reflectivity: 0.1,
    refractionRatio: 0.1,
    combine: THREE.MultiplyOperation,
  } );

  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    const canvas = document.getElementById('canvas-box');
    
    if (!canvas) {
      return;
    }

    const scene = new THREE.Scene();

    
    const texture = new THREE.CubeTextureLoader().load(["textures/plast.png"]);
    texture.mapping = THREE.CubeReflectionMapping;
    this.material.envMap = texture;
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.x = 2;
    pointLight.position.y = 2;
    pointLight.position.z = 2;
    scene.add(pointLight);
    
    let boxes = this.generateCube(this.size, scene)
  

    const canvasSizes = {
      width: canvas.clientWidth,
      height: canvas.clientHeight,
    };
    
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasSizes.width / canvasSizes.height,
      0.001,
      1000
    );
    camera.position.z = 50;
    scene.add(camera);
    
    const light = new THREE.PointLight(0xffffff, 2500)
    light.position.set(camera.position.x, camera.position.y, camera.position.z)
    scene.add(light)
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setClearColor(0xe202020, 1);
    renderer.setSize(canvasSizes.width, canvasSizes.height);

    window.addEventListener('resize', () => {
      canvasSizes.width = canvas.clientWidth;
      canvasSizes.height = canvas.clientHeight;
  
      camera.aspect = canvasSizes.width / canvasSizes.height;
      camera.updateProjectionMatrix();
  
      renderer.setSize(canvasSizes.width, canvasSizes.height);
      renderer.render(scene, camera);
    });

    window.addEventListener("mouseover", () => {
      if (boxes.length != this.size) {
        boxes = this.generateCube(this.size, scene)
      }
    })

    const clock = new THREE.Clock();

    const animateGeometry = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update animation objects
      //camera.rotation.x = elapsedTime/3
      //camera.rotation.y = elapsedTime/3
      //camera.rotation.z = elapsedTime/3
      //for (let slice of boxes) {
      //  for (let row of slice) {
      //    for (let box of row) {
      //      box.rotation.x = elapsedTime/3
      //      box.rotation.y = elapsedTime/3
      //      box.rotation.z = elapsedTime/3
      //    }
      //  }
      //}
      camera.position.x = Math.sin(elapsedTime/3)*50;
      camera.position.y = Math.cos(elapsedTime/3)*50;
      camera.position.z = Math.sin(elapsedTime/3)*50;
      camera.lookAt(new THREE.Vector3(0,0,0))

      light.position.set(camera.position.x, camera.position.y, camera.position.z)
      
      // Render
      renderer.render(scene, camera);

      // Call animateGeometry again on the next frame
      window.requestAnimationFrame(animateGeometry);
    };

    animateGeometry();
  }

  generateCube(size: number, scene: THREE.Scene) {

    const idCubes : THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial, THREE.Object3DEventMap>[][][] = []
    const padding = 0.3

    for (var i = 0; i < size; i++) {
      let intermediateArray1  : THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial, THREE.Object3DEventMap>[][] = []
      const zOffset = (this.width + padding) * (i - (size -1)/2)

      for (var j = 0; j < size; j++) {
        let intermediateArray2  : THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial, THREE.Object3DEventMap>[] = []
        const yOffset = (this.width + padding) * (j - (size -1)/2)
        
        for (var k = 0; k < size; k++) {
          if (i!=0 && j != 0 && k !=0 && i!=size-1 && j != size-1 && k !=size-1) {
            continue
          }
          const xOffset = (this.width + padding) * (k - (size -1)/2)
          let cube = new THREE.Mesh(
            new THREE.BoxGeometry(this.width, this.width, this.width), 
            this.material,
          )
          cube.position.x = xOffset
          cube.position.y = yOffset
          cube.position.z = zOffset

          intermediateArray2.push(cube)
          scene.add(cube)
        }
        intermediateArray1.push(intermediateArray2)
      }
      idCubes.push(intermediateArray1)
    }
  return idCubes
  }

}
