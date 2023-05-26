import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Car: React.FC = () => {
    const { scene } = useGLTF('/models/car/porsche.gltf');
    const carRef = useRef<THREE.Object3D>();

    useFrame((state, delta) => {
        // Aktualisiere die Rotation des Autos
        if (carRef.current) {
            carRef.current.rotation.y += delta * 0.5; // Ändere die Geschwindigkeit des Drehens hier anpassen
        }
    });

    return (
        <group>
            {/* Füge den Inhalt der GLTF-Szene hinzu */}
            <ambientLight intensity={0.5} color="white" />
            <primitive object={scene} ref={carRef} castShadow receiveShadow />
            {/* Füge die OrbitControls hinzu, um das Modell zu steuern */}
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={false}
                zoomSpeed={0.5}
                target={[0, 0, 0]} // Setze den Kameraziel-Punkt auf den Ursprung der Szene
                minDistance={13} // Minimale Zoom-Entfernung
                maxDistance={100} // Maximale Zoom-Entfernung
            />
            <perspectiveCamera fov={60} aspect={16 / 9} near={0.1} far={1000} />
            <directionalLight castShadow position={[0, 10, 0]} intensity={0.5} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        </group>
    );
};

export default Car;