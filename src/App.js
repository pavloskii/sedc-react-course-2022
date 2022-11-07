import { useState } from "react";
import { Home } from "./components/Home";
import { LikesAndDislikes } from "./components/LikesAndDislikes";

function App() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  function toggleView(){
    setIsHomeVisible(!isHomeVisible)
  }

  return (
    <div>
      <button onClick={toggleView}>Toggle between home and likes</button>
      <hr />
      {!isHomeVisible && <LikesAndDislikes />}
      {isHomeVisible && <Home />}
    </div>
  );
}

export { App };
