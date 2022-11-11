import { useEffect, useRef, useState } from "react";
import { Loader } from "../components/Loader";
import { UserCard } from "../components/UserCard";
import { Pagination } from "../components/Pagination";
import { useUsers } from "../api/users";
import "./Home.css";

export function Home() {
  const [page, setPage] = useState(1);
  const { data: users, error, isLoading } = useUsers(page);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const searchInputRef = useRef();

  useEffect(() => {
    if (users === null) {
      return;
    }

    searchInputRef.current.focus();
    setFilteredUsers(users.data);
  }, [users]);

  function filterUsers(event) {
    const value = event.target.value.toLowerCase();

    const filtered = users.data.filter(
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
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search.."
          onInput={filterUsers}
        />
        <button disabled>
          <i className="fa fa-search"></i>
        </button>
      </div>

      <main>
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
            image={user.avatar}
          />
        ))}
      </main>

      <Pagination
        totalPages={users.total_pages}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
