import { Octahedron, useMatcapTexture } from "@react-three/drei";
import useRenderTarget from "hooks/use-render-target";
import useSlerp from "hooks/use-slerp";
import React from "react";

import * as THREE from "three";
import { CubeCamera } from "three";
import Mirrors from "./Mirrors";
import Title from "./Title";
import TitleCopies from "./TitleCopies";

const Header = () => {
  const [cubeCamera, renderTarget] = useRenderTarget();
  const group = useSlerp();

  const [matcapTexture] = useMatcapTexture("1D2A21_43443B_655B54_545C54");

  return (
    <>
      <group name="sceneContainer" ref={group}>
        <Octahedron name="background" args={[20, 4]} position={[0, 0, -10]}>
          <meshMatcapMaterial
            matcap={matcapTexture}
            side={THREE.BackSide}
            transparent
            opacity={0.3}
            color="#FFFFFF"
          />
        </Octahedron>
        <cubeCamera
          name="cubeCamera"
          ref={cubeCamera}
          args={[0.1, 100, renderTarget]}
          position={[0, 0, 5]}
        />
        <Title name="title" position={[0, 0, -10]} />
        <TitleCopies layers={[11]} />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
      </group>
    </>
  );
};

export default Header;
