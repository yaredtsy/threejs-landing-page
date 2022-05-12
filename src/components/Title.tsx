import { Text } from "@react-three/drei";
import useLayer from "hooks/use-layer";
import React, { useEffect, useRef } from "react";

interface TitleProps {
  layer?: any;
  name: string;
  position: any;
}

const TEXT_PROPS = {
  fontSize: 2.5,
  font: "https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff",
};

const Title: React.FC<TitleProps> = ({ layer, name, position, ...props }) => {
  const group = useRef<any>();
  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);

  const textRef = useLayer(layer);

  return (
    <group name={name} position={position} {...props} ref={group}>
      <Text
        ref={textRef}
        name="text-panna"
        material-toneMapped={false}
        material-color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        {...TEXT_PROPS}
      >
        {"KANOPY \n LABS"}
      </Text>
    </group>
  );
};

export default Title;
