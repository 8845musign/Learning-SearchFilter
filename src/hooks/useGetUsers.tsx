import { useState, useEffect } from "react";
import type { User } from "../types";

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message as string);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
};
