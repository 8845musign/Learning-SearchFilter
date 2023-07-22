import type { FC } from "react";
import type { User } from "../types";

type Props = {
  items: User[];
};

const ItemList: FC<Props> = ({ items }) => {
  return (
    <>
      {items.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {items.map((user) => {
            return <li key={user.id}>{user.firstName}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default ItemList;
