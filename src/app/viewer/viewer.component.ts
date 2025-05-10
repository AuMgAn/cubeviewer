import { Component, Input, OnInit } from '@angular/core';

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

@Component({
  selector: 'app-viewer',
  imports: [],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent implements OnInit {

  @Input() size = 3;
  @Input() face = "g";

  width = 3;

  material : THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial( {
    color: 0x808080,
    emissive: 0x0,
    specular: 0x111111,
    shininess: 15,
    reflectivity: 0.1,
    refractionRatio: 0.1,
    combine: THREE.MultiplyOperation,
    vertexColors: true,
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
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 500);
    pointLight.position.x = 2;
    pointLight.position.y = this.size*this.width*2
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
    camera.position.z = 15
    scene.add(camera);

    
    const light = new THREE.PointLight(0xffffff, 100)
    light.position.set(camera.position.x, camera.position.y, camera.position.z)
    scene.add(light)
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setClearColor(0xe202020, 1);
    renderer.setSize(canvasSizes.width, canvasSizes.height);
    
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.minDistance = this.size/2*1.732*this.width + this.width/2

    window.addEventListener('resize', () => {
      canvasSizes.width = canvas.clientWidth;
      canvasSizes.height = canvas.clientHeight;
  
      camera.aspect = canvasSizes.width / canvasSizes.height;
      camera.updateProjectionMatrix();
  
      renderer.setSize(canvasSizes.width, canvasSizes.height);
      renderer.render(scene, camera);
    });

    const slider = document.getElementById("size-slider")
    slider!.addEventListener("change", () => {
      if (boxes.length != this.size) {
        scene.clear()
        scene.add(camera, light, pointLight, ambientLight)
        boxes = this.generateCube(this.size, scene)
        controls.minDistance = this.size/2*1.732*this.width + this.width/2
      }
    })

    //const clock = new THREE.Clock();

    const animateGeometry = () => {

      light.position.set(camera.position.x, camera.position.y, camera.position.z)
      
      // Render
      renderer.render(scene, camera);

      // Call animateGeometry again on the next frame
      window.requestAnimationFrame(animateGeometry);
    };

    animateGeometry();
  }

  generateCube(size: number, scene: THREE.Scene) {

    const idCubes : THREE.Mesh[][][] = []
    const padding = this.width/50

    for (var i = 0; i < size; i++) {
      let intermediateArray1  : THREE.Mesh[][] = []
      const zOffset = (this.width + padding) * (i - (size -1)/2)

      for (var j = 0; j < size; j++) {
        let intermediateArray2  : THREE.Mesh[] = []
        const yOffset = (this.width + padding) * (j - (size -1)/2)
        
        for (var k = 0; k < size; k++) {
          if (i!=0 && j != 0 && k !=0 && i!=size-1 && j != size-1 && k !=size-1) {
            continue
          }
          const xOffset = (this.width + padding) * (k - (size -1)/2)
          let geom = new THREE.BoxGeometry(this.width, this.width, this.width).toNonIndexed()
          const positionAttribute = geom.getAttribute("position")
          const colors = [];
		      const color = new THREE.Color();

          for ( let m = 0; m < positionAttribute.count; m += 3 ) {
            const vectAB = new THREE.Vector3(
              positionAttribute.getX(m+1) - positionAttribute.getX(m), 
              positionAttribute.getY(m+1) - positionAttribute.getY(m), 
              positionAttribute.getZ(m+1) - positionAttribute.getZ(m), 
            )
            const vectAC = new THREE.Vector3(
              positionAttribute.getX(m+2) - positionAttribute.getX(m), 
              positionAttribute.getY(m+2) - positionAttribute.getY(m), 
              positionAttribute.getZ(m+2) - positionAttribute.getZ(m), 
            )
            const normal = vectAB.cross(vectAC)//.normalize()
            
            if (normal.x > 0 && k == size-1) {
              color.setRGB(1,0,0)
            } else if (normal.x < 0 && k == 0) {
              color.setRGB(1,0.3,0)
            } else if (normal.y > 0 && j == size -1) {
              color.setRGB(1,1,1)
            } else if (normal.y < 0 && j==0) {
              color.setRGB(1,1,0)
            } else if (normal.z > 0 && i == size - 1) {
              color.setRGB(0,1,0)
            } else if (normal.z < 0 && i == 0) {
              color.setRGB(0,0,1)
            } else {
              color.setRGB(0, 0, 0)
            }
            
            // define the same color for each vertex of a triangle
            
            colors.push( color.r, color.g, color.b );
            colors.push( color.r, color.g, color.b );
            colors.push( color.r, color.g, color.b );
          
          }
          
          // define the new attribute
          
          geom.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

          let cube = new THREE.Mesh(
            geom, 
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

  rotateSlice(boxes: THREE.Mesh[][][], axis: string) {

  }

}
