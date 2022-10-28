import { CounterButton } from "./components/CounterButton";

function App() {
  return (
    <div>
      <CounterButton label="Likes">
        <i className="fa-solid fa-thumbs-up"></i>
      </CounterButton>
      <CounterButton label="Dislikes">
        <i className="fa-solid fa-thumbs-down"></i>
      </CounterButton>
    </div>
  );
}

export { App };
