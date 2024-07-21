// Basic setup for Three.js
let scene, camera, renderer;
let planets = [];
let planetData = [
    { name: "Mercury", color: 0xaaaaaa, distance: 10, radius: 0.4 },
    { name: "Venus", color: 0xffff00, distance: 20, radius: 0.9 },
    { name: "Earth", color: 0x0000ff, distance: 30, radius: 1.0 },
    { name: "Mars", color: 0xff0000, distance: 40, radius: 0.5 },
    { name: "Jupiter", color: 0xffa500, distance: 50, radius: 11 },
    { name: "Saturn", color: 0xffff33, distance: 60, radius: 9 },
    { name: "Uranus", color: 0x00ffff, distance: 70, radius: 4 },
    { name: "Neptune", color: 0x0000ff, distance: 80, radius: 4 }
];

init();
animate();

function init() {
    // Create scene
    scene = new THREE.Scene();

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;

    // Create renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add a light
    const light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(0, 0, 0);
    scene.add(light);

    // Create planets
    planetData.forEach(data => {
        let geometry = new THREE.SphereGeometry(data.radius, 32, 32);
        let material = new THREE.MeshBasicMaterial({ color: data.color });
        let planet = new THREE.Mesh(geometry, material);
        planet.userData = { distance: data.distance, angle: 0, speed: Math.random() * 0.02 + 0.01 };
        planet.position.x = data.distance;
        planets.push(planet);
        scene.add(planet);
    });

    // Resize event
    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    requestAnimationFrame(animate);

    // Update planet positions
    planets.forEach(planet => {
        planet.userData.angle += planet.userData.speed;
        planet.position.x = planet.userData.distance * Math.cos(planet.userData.angle);
        planet.position.z = planet.userData.distance * Math.sin(planet.userData.angle);
    });

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

