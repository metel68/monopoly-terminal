import { useCallback, useEffect, useState } from "react";

import './Cubes.css';

const randomness = new Uint8Array(1000);

export const Cubes = () => {
  const [dig1, setDig1] = useState(0);
  const [dig2, setDig2] = useState(0);
  const [i, setIndex] = useState(0);

  const generateRandomness = useCallback(() => {
    crypto.getRandomValues(randomness);
  }, []);

  useEffect(() => {
    generateRandomness();
  }, [generateRandomness]);

  const generate = () => {
    setDig1(randomness[i] % 6 + 1);
    setDig2(randomness[i + 1] % 6 + 1);
    setIndex((i) => i+2);

    if (i + 2 >= randomness.length) {
      generateRandomness();
      setIndex(0);
    }
  }

  return <div>
    {dig1 > 0 && <div className="cubes-container">
      <div className="cube">{dig1}</div>
      +
      <div className="cube">{dig2}</div>
      =
      <div className={dig1 === dig2 ? "cube double" : "cube"}>{dig1 + dig2}</div>
    </div>}
    <button onClick={generate}>Бросить кубики</button>
  </div>
}