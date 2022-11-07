import "./UserCard.css";

export function UserCard({ firstName, lastName, image, email }) {
  return (
    <div className="UserCard">
      <img src={image} alt="Avatar" style={{ width: "100%" }} />
      <div className="UserCard__container">
        <h4>
          <b>
            {firstName} {lastName}
          </b>
        </h4>
        <p>
          {email.length > 27
            ? email.slice(0, 27) + "..."
            : email}
        </p>
      </div>
    </div>
  );
}
