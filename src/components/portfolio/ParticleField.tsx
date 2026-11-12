import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const COUNT = 140;
const LINK = 1.6;

function Network() {
  const group = useRef<THREE.Group>(null);
  const pts = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);
  const { pos, vel } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i++) {
      pos[i] = (Math.random() - 0.5) * (i % 3 === 2 ? 6 : 14);
      vel[i] = (Math.random() - 0.5) * 0.004;
    }
    return { pos, vel };
  }, []);
  const linePos = useMemo(() => new Float32Array(COUNT * COUNT * 0.2 * 6), []);
  const lineCol = useMemo(() => new Float32Array(COUNT * COUNT * 0.2 * 6), []);
  const blue = new THREE.Color("#4f8cff"), violet = new THREE.Color("#9b6bff");

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05) * 60;
    for (let i = 0; i < COUNT * 3; i++) {
      pos[i] += vel[i]! * dt;
      const lim = i % 3 === 2 ? 3 : 7;
      if (Math.abs(pos[i]!) > lim) vel[i] *= -1;
    }
    let n = 0;
    for (let a = 0; a < COUNT; a++) for (let b = a + 1; b < COUNT; b++) {
      const dx = pos[a*3]!-pos[b*3]!, dy = pos[a*3+1]!-pos[b*3+1]!, dz = pos[a*3+2]!-pos[b*3+2]!;
      const d = Math.sqrt(dx*dx+dy*dy+dz*dz);
      if (d < LINK && n < linePos.length / 6) {
        const f = 1 - d / LINK;
        linePos.set([pos[a*3]!,pos[a*3+1]!,pos[a*3+2]!,pos[b*3]!,pos[b*3+1]!,pos[b*3+2]!], n*6);
        const c = blue.clone().lerp(violet, (pos[a*3]!+7)/14).multiplyScalar(f * 0.7);
        lineCol.set([c.r,c.g,c.b,c.r,c.g,c.b], n*6);
        n++;
      }
    }
    if (pts.current) pts.current.geometry.attributes["position"]!.needsUpdate = true;
    if (lines.current) {
      const g = lines.current.geometry;
      g.setDrawRange(0, n * 2);
      g.attributes["position"]!.needsUpdate = true;
      g.attributes["color"]!.needsUpdate = true;
    }
    if (group.current) {
      const { x, y } = state.pointer;
      group.current.rotation.y += (x * 0.25 - group.current.rotation.y) * 0.03;
      group.current.rotation.x += (-y * 0.15 - group.current.rotation.x) * 0.03;
      group.current.position.y = -window.scrollY * 0.002;
    }
  });

  return (
    <group ref={group}>
      <points ref={pts}>
        <bufferGeometry><bufferAttribute attach="attributes-position" args={[pos, 3]} /></bufferGeometry>
        <pointsMaterial size={0.06} color="#8fb4ff" transparent opacity={0.85} sizeAttenuation />
      </points>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePos, 3]} />
          <bufferAttribute attach="attributes-color" args={[lineCol, 3]} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.5} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

export default function ParticleField() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <Network />
    </Canvas>
  );
}
