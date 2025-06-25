import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Minimal, accessible 3D hero visual using react-three-fiber

// PUBLIC_INTERFACE
function RotatingIcosahedron(props) {
  /**
   * A smooth, subtle, rotating icosahedron (20-sided polyhedron) with basic material,
   * designed for visual interest as a hero centerpiece.
   * Accessible alternative text provided below Canvas.
   */
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.008;
      mesh.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh
      ref={mesh}
      {...props}
      castShadow
      receiveShadow
      aria-label="Animated 3D geometric shape"
      tabIndex={-1}
    >
      <icosahedronGeometry args={[1.55, 0]} />
      <meshStandardMaterial
        color="#e67e22"
        roughness={0.35}
        metalness={0.7}
        emissive="#e67e22"
        emissiveIntensity={0.09}
      />
    </mesh>
  );
}

// PUBLIC_INTERFACE
function Hero3D() {
  /**
   * The main 3D centerpiece for the hero/banner area.
   * Renders a smooth rotating geometric object in a styled container.
   * Ensures accessibility with alt text and non-obtrusive visuals for minimalism.
   */
  return (
    <div
      style={{
        // Responsive sizing
        width: "min(380px, 70vw)",
        height: "min(320px, 57vw)",
        margin: "0 auto 0.5rem auto",
        borderRadius: "18px",
        boxShadow: "0 5px 36px rgba(230,126,34,0.07)",
        background: "radial-gradient(ellipse farthest-corner at 55% 60%, #fff7ed 90%, #f1f1ec 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 40 }}
        style={{
          width: "100%",
          height: "100%",
          outline: "none",
          borderRadius: "inherit"
        }}
      >
        <ambientLight intensity={0.56} />
        <directionalLight position={[3, 7, 7]} intensity={0.76} />
        <pointLight position={[-4, -3, 8]} intensity={0.14} color="#ffd8bc" />
        <RotatingIcosahedron position={[0, 0, 0]} />
      </Canvas>
      <span className="sr-only">
        Visually interesting geometric 3D centerpiece, animated and decorative.
      </span>
    </div>
  );
}

export default Hero3D;
