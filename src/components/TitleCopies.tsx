import React, { useMemo } from "react";
import * as THREE from "three";
import Title from "./Title";

interface TitleCopiesProps {
  layers: any;
}
const TitleCopies: React.FC<TitleCopiesProps> = ({ layers }) => {
  const vertices: THREE.Vector3 = useMemo(() => {
    const vertex = new THREE.Vector3();
    const geometry: THREE.IcosahedronGeometry = new THREE.IcosahedronGeometry(
      10
    );
    const positionAttribute = geometry.getAttribute("position");

    for (
      let vertexIndex = 0;
      vertexIndex < positionAttribute.count;
      vertexIndex++
    ) {
      vertex.fromBufferAttribute(positionAttribute, vertexIndex);
    }

    return vertex;
  }, []);

  return (
    <group name="titleCopies">
      {vertices.toArray().map((vertex: any, i: number) => (
        <Title
          name={"titleCopy-" + i}
          layer={layers}
          position={vertex}
          key={vertex}
        />
      ))}
    </group>
  );
};

export default TitleCopies;
