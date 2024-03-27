import * as THREE from 'three'
import {Canvas, extend} from '@react-three/fiber'
import {useGLTF, MeshPortalMaterial, CameraControls, Text, Sky, OrbitControls} from '@react-three/drei'
import {geometry} from 'maath'
import {suspend} from 'suspend-react'
import React from "react";

extend(geometry)
const GOLDENRATIO = 1.61803398875
const regular = import('@pmndrs/assets/fonts/inter_regular.woff')
const medium = import('@pmndrs/assets/fonts/inter_medium.woff')
const zPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
const yPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 1)

const App = () => (
    <Canvas gl={{localClippingEnabled: true}} camera={{fov: 75, position: [0, 0, 1.5]}}
            style={{height: '100vh', width: '25vw'}} eventPrefix="client">
        {/*<color attach="background" args={['#f0f0f0']}/>*/}
        <Frame id="01" name="Jesse" author="McCree">
            <Sky/>
            <Model position={[0, -2, 0]}/>
        </Frame>
        <Model clip position={[0, -2, 0]}/>
        <OrbitControls enableDamping={true} enableZoom={false} makeDefault minAzimuthAngle={-Math.PI / 2.5}
                       maxAzimuthAngle={Math.PI / 2.5} minPolarAngle={0.5}
                       maxPolarAngle={Math.PI / 2}/>
        {/*<CameraControls makeDefault minAzimuthAngle={-Math.PI / 2.5} maxAzimuthAngle={Math.PI / 2.5} minPolarAngle={0.5}*/}
        {/*                maxPolarAngle={Math.PI / 2}/>*/}
    </Canvas>
)

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 mccree.glb
Author: Seafoam (https://sketchfab.com/seafoam)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-mccree-38aedc02c0b2412babdc4d0eac7c6803
Title: Low poly McCree
*/
function Model({clip, ...props}) {
    const {nodes, materials} = useGLTF('/glb/low_poly_mccree-transformed.glb')
    return (
        <mesh geometry={nodes.base.geometry} {...props} dispose={null}>
            <meshBasicMaterial map={materials.PaletteMaterial001.map} side={THREE.DoubleSide}
                               clippingPlanes={clip ? [zPlane, yPlane] : null}/>
        </mesh>
    )
}

function Frame({id, name, author, bg, width = 1, height = GOLDENRATIO, children, ...props}) {
    return (
        <group {...props}>
            <Text font={suspend(medium).default} color="black" fontSize={0.25} letterSpacing={-0.025} anchorY="top"
                  anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]}>
                {name}
            </Text>
            <Text font={suspend(regular).default} color="black" fontSize={0.1} anchorX="right"
                  position={[0.4, -0.659, 0.01]}>
                /{id}
            </Text>
            <Text font={suspend(regular).default} color="black" fontSize={0.04} anchorX="left"
                  position={[0.0, -0.677, 0.01]}>
                {author}
            </Text>
            <mesh name={id}>
                <roundedPlaneGeometry args={[width, height, 0.1]}/>
                <MeshPortalMaterial>{children}</MeshPortalMaterial>
            </mesh>
            <mesh name={id} position={[0, 0, -0.001]}>
                <roundedPlaneGeometry args={[width + 0.05, height + 0.05, 0.12]}/>
                <meshBasicMaterial color="black"/>
            </mesh>
        </group>
    )
}

export default App
