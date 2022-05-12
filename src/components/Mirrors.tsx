import React, { useRef, useState } from "react";

// import ThinFilmFresnelMap from "utils/ThinFilmFresnelMap";
import { mirrorsData } from "utils/mirror-data";
import { ThinFilmFresnelMap } from "utils/ThinFilmFresnelMap";
import Mirror from "./Mirror";
interface MirrorsProps {
  envMap: any;
  layers: any;
}

const Mirrors: React.FC<MirrorsProps> = ({ envMap, layers, ...props }) => {
  const [thinFilmFresnelMap] = useState<ThinFilmFresnelMap>(
    new ThinFilmFresnelMap()
  );
  const sideMaterial = useRef<any>();
  const reflectionMaterial = useRef<any>();

  return (
    <group name="mirrors" {...props}>
      <meshLambertMaterial
        ref={sideMaterial}
        map={thinFilmFresnelMap}
        color="#AAAAAA"
      />
      <meshLambertMaterial
        ref={reflectionMaterial}
        map={thinFilmFresnelMap}
        envMap={envMap}
        color="#FFFFFF"
      />
      {mirrorsData.mirrors.map((mirror, index) => (
        <Mirror
          key={`mirror-${index}`}
          layers={layers}
          name={`mirror-${index}`}
          sideMaterial={sideMaterial.current}
          reflectionMaterial={reflectionMaterial.current}
          {...mirror}
        />
      ))}
    </group>
  );
};

export default Mirrors;
