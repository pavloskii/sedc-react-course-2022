import { Loader } from "./Loader";
import { UserCard } from "./UserCard";
import "./Home.css";
import { useUsers } from "../api/users";
import { useState } from "react";

export function Home() {
  const { data: users, error, isLoading } = useUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);

  function filterUsers(event) {
    const value = event.target.value.toLowerCase();

    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(value) ||
        user.last_name.toLowerCase().includes(value)
    );

    setFilteredUsers(filtered);
  }

  if (isLoading) {
    return (
      <div className="Home">
        <Loader />
      </div>
    );
  }

  if (error !== null) {
    return <p>{error}</p>;
  }

  return (
    <div className="Home">
      <div className="search-container">
        <input type="text" placeholder="Search.." onInput={filterUsers} />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>

      {filteredUsers.map((user) => (
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
