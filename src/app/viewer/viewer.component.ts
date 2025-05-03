import { Component, OnInit } from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-viewer',
  imports: [],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css'
})
export class ViewerComponent implements OnInit {
  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    const canvas = document.getElementById('canvas-box');

    if (!canvas) {
      return;
    }

    const scene = new THREE.Scene();

    
    const texture = new THREE.CubeTextureLoader().load(["textures/plast.png"])
    texture.mapping = THREE.CubeReflectionMapping
    
    const material = new THREE.MeshPhongMaterial( {
      color: 0x808080,
      emissive: 0x0,
      specular: 0x111111,
      shininess: 15,
      reflectivity: 0.1,
      refractionRatio: 0.1,
      combine: THREE.MultiplyOperation,
      envMap: texture,
    } );
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.x = 2;
    pointLight.position.y = 2;
    pointLight.position.z = 2;
    scene.add(pointLight);
    
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(15, 15, 15), 
      material
    );
    
    scene.add(box);

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
    camera.position.z = 25;
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

    const clock = new THREE.Clock();

    const animateGeometry = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update animation objects
      box.rotation.x = elapsedTime/3;
      box.rotation.y = elapsedTime/3;
      box.rotation.z = elapsedTime/3;
      
      // Render
      renderer.render(scene, camera);

      // Call animateGeometry again on the next frame
      window.requestAnimationFrame(animateGeometry);
    };

    animateGeometry();
  }

}
