import { useFetch } from "../hooks/useFetch";

export function useUsers() {
  return useFetch("/users");
}

export function useUser(id) {
  return useFetch("/users/" + id);
}
