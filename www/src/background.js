import * as THREE from "three";
import { OrbitControls } from 'src/js/OrbitControls.js';

export { canvas, renderer, cameras, mainCamera, cameraPole, scene, makeCamera };
let canvas, renderer, cameras, mainCamera, cameraPole, scene;

makeBackground();
function makeBackground() {

  canvas = document.querySelector('#c');
  renderer = new THREE.WebGLRenderer({canvas, alpha: true});

  mainCamera = makeCamera(80);
  mainCamera.position.set(0, 0, 150).multiplyScalar(5);
  mainCamera.lookAt(0, 0, 0);
  mainCamera.layers.enable(0);
  mainCamera.layers.enable(1);
  mainCamera.layers.enable(2);
  mainCamera.layers.enable(5);
  cameras = new WeakMap();
  cameras.set(mainCamera, 'main camera')

  // let control = new OrbitControls(mainCamera, renderer.domElement);
  // control.target.set(0, 0, 0);
  // control.update();

  scene = new THREE.Scene();

  cameraPole = new THREE.Object3D();
  scene.add(cameraPole);
  cameraPole.add(mainCamera);

}

function makeCamera(fov = 40) {
  const aspect = window.innerWidth / window.innerHeight;  // the canvas default
  const zNear = 0.1;
  const zFar = 3000;
  return new THREE.PerspectiveCamera(fov, aspect, zNear, zFar);
}
