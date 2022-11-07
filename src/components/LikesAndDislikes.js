import { CounterButton } from "./CounterButton";

export function LikesAndDislikes() {
  return (
    <div>
      <hr />
      <CounterButton label="Likes">
        <i className="fa-solid fa-thumbs-up"></i>
      </CounterButton>
      <CounterButton label="Dislikes">
        <i className="fa-solid fa-thumbs-down"></i>
      </CounterButton>
    </div>
  );
}
