import { useUser } from "../api/users";
import { Loader } from "./Loader";

export function UserDetails() {
  const { data, isLoading } = useUser(10);

  if (isLoading) {
    return <Loader />;
  }
  
  return (
    <div>
      <h1>
        User Details: {data.first_name} {data.last_name}
      </h1>
    </div>
  );
}
