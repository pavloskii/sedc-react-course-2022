import { useNavigate } from "react-router-dom";
import "./UserCard.css";

export function UserCard({ firstName, lastName, image, email, id }) {
  const navigate = useNavigate();

  function goToUserDetails() {
    navigate("/user-details/" + id);
  }

  return (
    <div className="UserCard" onClick={goToUserDetails}>
      <img src={image} alt="Avatar" style={{ width: "100%" }} />
      <div className="UserCard__container">
        <h4>
          <b>
            {firstName} {lastName}
          </b>
        </h4>
        <p>{email.length > 27 ? email.slice(0, 27) + "..." : email}</p>
      </div>
    </div>
  );
}
