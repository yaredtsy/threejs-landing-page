import React, { useEffect, useRef } from "react";

const useLayer = (layers = [0]) => {
  const ref = useRef<any>();

  useEffect(() => {
    ref.current.layers.disableAll();

    layers.sort().forEach((layer) => {
      ref.current.layers.enable(layer);
    });
  });
  return ref;
};

export default useLayer;
