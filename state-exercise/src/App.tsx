import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";
import ClickCounter from "./components/ClickCounter";
import { useState } from "react";

const App = () => {
  /* Your states here */
  const [isLightsOn, setIsLightOn] = useState<boolean>(false);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0,
  ]);
  const [count, setCount] = useState<number>(1);

  const handleLightOn = () => setIsLightOn((t) => !t);

  const handleLottoNumbers = () => {
    const numbers = new Set<number>();
    while (numbers.size < 7) {
      numbers.add(Math.floor(Math.random() * 51));
    }
    setLottoNumbers(Array.from(numbers));
  };

  const handleCount: () => void = () => setCount((c) => c + 1);

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle onLightOn={handleLightOn} />
      <div
        style={{
          backgroundColor: `${isLightsOn ? "black" : "white"}`,
          color: `${isLightsOn ? "white" : "black"}`,
        }}
      >
        Change this background color using the style attribute
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers onLottoNumbers={handleLottoNumbers} />
      <div className="output">
        {lottoNumbers.map((num, i) => (
          <span key={i}> {num}</span>
        ))}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter onCount={handleCount} />
      <div className="output">{count}</div>
    </div>
  );
};

export default App;
