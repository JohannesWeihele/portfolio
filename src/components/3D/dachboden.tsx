import React, { useRef } from 'react';
import { Color } from 'three';
import {Canvas, useFrame, useLoader, useThree} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Dachboden: React.FC = () => {
    const { scene } = useGLTF('/models/dachboden/dachboden.gltf');

    const { camera } = useThree();
    // Setze den Zoomwert
    if (window.innerWidth <= 768) {

        camera.zoom = 0.4;

        camera.updateProjectionMatrix();
    } else {
        camera.zoom = 1.0;

        camera.updateProjectionMatrix();
    }

    return (
        <group position={[0,-1.5,0.1]}>
            {/* Füge den Inhalt der GLTF-Szene hinzu */}
            <ambientLight intensity={0.5} color="white" />
            <primitive object={scene}/>
            {/* Füge die OrbitControls hinzu, um das Modell zu steuern */}
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                zoomSpeed={0.5}
                target={[0, 15, -45]} // Setze den Kameraziel-Punkt auf den Ursprung der Szene
                minDistance={0} // Minimale Zoom-Entfernung
                maxDistance={7} // Maximale Zoom-Entfernung
            />
            <directionalLight castShadow position={[0, 10, 0]} intensity={0.5} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        </group>
    );
};

export default Dachboden;