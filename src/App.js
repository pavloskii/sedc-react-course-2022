import { useState } from "react";
import { Home } from "./components/Home";
import { UserDetails } from "./components/UserDetails";

function App() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  function toggleView(){
    setIsHomeVisible(!isHomeVisible)
  }

  return (
    <div>
      <button onClick={toggleView}>Toggle between home and Post Details</button>
      <hr />
      {!isHomeVisible && <UserDetails />}
      {isHomeVisible && <Home />}
    </div>
  );
}

export { App };
