import { useEffect, useState } from "react";
import MouseTracker from "./MouseTracker";

function App() {
  const [ temperature, setTemperature ] = useState(0);
  const [ description, setDescription ] = useState("");
  const [ city, setCity ] = useState("Generic city");

  useEffect(() => {
    setTimeout(() => {
      setTemperature(27);
      setDescription("Clear");
    }, 1500);
  });

  return (
    <>
      <div class="App">
        <h1>Weather forecast at {city}</h1>
          {
            temperature
            ?
              <div>
                <p>Temperature: {temperature}°C</p>
                <p>Climate: {description}</p>
              </div>
            :
              <p>Loading...</p>
          }
      </div>

      <MouseTracker />
    </>
  );
}

export default App;
