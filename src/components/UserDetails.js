import { useUser } from "../api/users";

export function UserDetails() {
  const { data } = useUser(10);

  return (
    <div>
      <h1>User Details: {data.first_name} {data.last_name}</h1>
    </div>
  );
}
