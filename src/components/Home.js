import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { UserCard } from "./UserCard";
import "./Home.css";

export function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://reqres.in/api/users?delay=3")
      .then((response) => {
        const newUsers = response.data.data;

        setUsers(newUsers);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="center-horizontally">
        <Loader />
      </div>
    );
  }

  if (error !== null) {
    return <p>{error}</p>;
  }

  return (
    <div className="center-horizontally">
      {users.map((user) => (
        <UserCard
          key={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          image={user.avatar}
        />
      ))}
    </div>
  );
}
