import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useUser } from "../api/users";

export function UserDetails() {
  const params = useParams();
  const { data, isLoading } = useUser(params.userId);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <img src={data.data.avatar} alt="user's avatar" />
      <h1>
        User Details: {data.data.first_name} {data.data.last_name}
      </h1>
    </div>
  );
}
