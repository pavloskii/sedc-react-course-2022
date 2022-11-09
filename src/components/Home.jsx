import { Loader } from "./Loader";
import { UserCard } from "./UserCard";
import "./Home.css";
import { useUsers } from "../api/users";

export function Home() {
  const { data: users, error, isLoading } = useUsers();

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
