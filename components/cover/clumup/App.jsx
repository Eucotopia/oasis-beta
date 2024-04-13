import * as THREE from "three"
import {Canvas, useFrame, useThree} from "@react-three/fiber"
import {Outlines, Environment, useTexture} from "@react-three/drei"
import {Physics, useSphere} from "@react-three/cannon"
import {EffectComposer, N8AO, SMAA} from "@react-three/postprocessing"
import {tv} from "tailwind-variants";

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const baubleMaterial = new THREE.MeshStandardMaterial({color: "white", roughness: 0, envMapIntensity: 1})

const App = () => (
    <div className={"relative h-screen w-screen"}>
        {/*TODO 这里的样式需要改*/}
        <div className="absolute top-60 left-128 z-50 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-7xl font-bold p-4 font-cover bg-gradient-to-br from-primary-500 via-secondary-500 to-success-200 bg-clip-text text-transparent"
                style={{display: 'flex', flexDirection: 'column'}}>
                <span>Your time is limited,</span>
                <span>so don&apos;t waste it living someone else&apos;s life</span>
            </h1>
        </div>
        <div className={"absolute top-0 left-52"}>
            <Canvas shadows gl={{antialias: false}} dpr={[1, 1.5]}
                    camera={{position: [0, 0, 20], fov: 35, near: 1, far: 40}}
                    style={{height: '100vh', width: '100vw'}}>
                <ambientLight intensity={0.5}/>
                {/*<color attach="background" args={["#dfdfdf"]}/>*/}
                <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow
                           shadow-mapSize={[512, 512]}/>
                <Physics gravity={[0, 2, 0]} iterations={10}>
                    <Pointer/>
                    <Clump/>
                </Physics>
                <Environment files="/adamsbridge.hdr"/>
                <EffectComposer disableNormalPass multisampling={0}>
                    <N8AO halfRes color="black" aoRadius={2} intensity={1} aoSamples={6} denoiseSamples={4}/>
                    <SMAA/>
                </EffectComposer>
            </Canvas>
        </div>
    </div>
)

function Clump({mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props}) {
    const texture = useTexture("/cross.jpg")
    const [ref, api] = useSphere(() => ({
        args: [1],
        mass: 1,
        angularDamping: 0.1,
        linearDamping: 0.65,
        position: [rfs(20), rfs(20), rfs(20)]
    }))
    useFrame((state) => {
        for (let i = 0; i < 40; i++) {
            // Get current whereabouts of the instanced sphere
            ref.current.getMatrixAt(i, mat)
            // Normalize the position and multiply by a negative force.
            // This is enough to drive it towards the center-point.
            api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0])
        }
    })
    return (
        <instancedMesh ref={ref} castShadow receiveShadow args={[sphereGeometry, baubleMaterial, 40]}
                       material-map={texture}>
            <Outlines thickness={0.0}/>
        </instancedMesh>
    )
}

function Pointer() {
    const viewport = useThree((state) => state.viewport)
    const [, api] = useSphere(() => ({type: "Kinematic", args: [3], position: [0, 0, 0]}))
    return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
}

export default App