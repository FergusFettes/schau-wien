import * as THREE from "three";
export { loader, loadManager, materials, createMaterial, imageMap };

let imageMap, materials, loadManager, loader;

loadManager = new THREE.LoadingManager();
loader = new THREE.TextureLoader(loadManager);
loader.crossOrigin = '';

const imageDict = {
  "https://storage.googleapis.com/schau-wien-images/media/sope2.jpg": "sophie",
  "https://storage.googleapis.com/schau-wien-images/media/kiki1.jpg": "kiki",
  "https://storage.googleapis.com/schau-wien-images/media/fergus.jpeg": "fergus",
  "https://storage.googleapis.com/schau-wien-images/media/reeks2.jpg": "enrique",
  "https://storage.googleapis.com/schau-wien-images/media/alexandru.jpg": "alexandru",
  "https://storage.googleapis.com/schau-wien-images/media/annar.jpg": "annar",
  "https://storage.googleapis.com/schau-wien-images/media/luise.jpg": "luise",
  "https://storage.googleapis.com/schau-wien-images/media/paula.jpg": "paula",
}

imageMap = new WeakMap();

materials = [];
for (const [key, value] of Object.entries(imageDict)) {
  const material = new THREE.MeshPhongMaterial({
    map: loader.load(key),
    side: THREE.DoubleSide,
  });
  material.flatShading = true;
  materials.push(material);
  imageMap.set(material, value);
}

function createMaterial() {
  const material = new THREE.MeshPhongMaterial();
  const hue = Math.random();
  const saturation = 1;
  const luminance = .5;
  material.color.setHSL(hue, saturation, luminance);
  material.flatShading = true;
  return material;
}

function randomColor() {
  return `hsl(${rand(360) | 0}, ${rand(50, 100) | 0}%, 50%)`;
}
