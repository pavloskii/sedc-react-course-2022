import { useFetch } from "../hooks/useFetch";

export function useUsers(page) {
  return useFetch(`/users?page=${page}`);
}

export function useUser(id) {
  return useFetch("/users/" + id);
}
