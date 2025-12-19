import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(8000), { radius: 2.5 })], []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#64ffda"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();
  const mesh2Ref = useRef();
  const mesh3Ref = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.position.y = Math.sin(time * 0.8) * 0.3;
    
    mesh2Ref.current.rotation.x = -time * 0.1;
    mesh2Ref.current.rotation.z = time * 0.05;
    mesh2Ref.current.position.x = Math.cos(time * 0.5) * 0.5;
    
    mesh3Ref.current.rotation.y = time * 0.2;
    mesh3Ref.current.position.z = Math.sin(time * 0.3) * 0.2;
  });

  return (
    <>
      <mesh ref={meshRef} position={[3, 0, -8]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial color="#64ffda" wireframe opacity={0.08} transparent />
      </mesh>
      
      <mesh ref={mesh2Ref} position={[-4, 2, -6]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color="#64ffda" wireframe opacity={0.06} transparent />
      </mesh>
      
      <mesh ref={mesh3Ref} position={[0, -3, -10]}>
        <tetrahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#64ffda" wireframe opacity={0.04} transparent />
      </mesh>
    </>
  );
}



export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <Stars />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}