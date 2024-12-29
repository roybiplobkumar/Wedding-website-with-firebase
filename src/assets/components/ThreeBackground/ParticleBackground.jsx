import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const particles = new THREE.BufferGeometry();
        const particleCount = 5000;
        const positions = [];

        for (let i = 0; i < particleCount; i++) {
            positions.push((Math.random() - 0.5) * 10);
            positions.push((Math.random() - 0.5) * 10);
            positions.push((Math.random() - 0.5) * 10);
        }

        particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.05,
        });

        const particleSystem = new THREE.Points(particles, material);
        scene.add(particleSystem);

        const animate = () => {
            particleSystem.rotation.y += 0.002;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        return () => mountRef.current.removeChild(renderer.domElement);
    }, []);

    return (
        <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10"></div>
    );
};

export default ParticleBackground;
