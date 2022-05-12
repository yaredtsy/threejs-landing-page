import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useLayer from "hooks/use-layer";
import React from "react";

interface MirrorProps {
  sideMaterial: any;
  reflectionMaterial: any;
  args: any;
  layers: any;
  name: string;
}
const Mirror: React.FC<MirrorProps> = ({
  sideMaterial,
  reflectionMaterial,
  args,
  layers,
  name,
  ...props
}) => {
  const ref = useLayer(layers);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x += 0.01;
    }
  });
  return (
    <Box
      {...props}
      name={name}
      ref={ref}
      args={args}
      material={[
        sideMaterial,
        sideMaterial,
        sideMaterial,
        sideMaterial,
        reflectionMaterial,
        reflectionMaterial,
      ]}
    />
  );
};

export default Mirror;
