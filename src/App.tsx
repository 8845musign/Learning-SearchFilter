import { useEffect, useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import Input from "./components/Input";
import { useGetUsers } from "./hooks/useGetUsers";

type User = {
  firstName: string;
  id: number;
};

function App() {
  const { users, loading, error } = useGetUsers();
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    if (Object.keys(users).length === 0) return;

    setFilteredUsers(users);
  }, [users]);

  const filterItem = (searchTerm: string): void => {
    const fileteredItems = users.filter((user) => {
      return user.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredUsers(fileteredItems);
  };

  return (
    <>
      <div>
        <Input onChangeCallback={filterItem}></Input>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <ItemList items={filteredUsers}></ItemList>}
      </div>
    </>
  );
}

export default App;
