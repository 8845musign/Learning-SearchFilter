import { useState } from "react";
import type { FC } from "react";

type Props = {
  onChangeCallback?: (searchTerm: string) => void;
};

const Input: FC<Props> = ({ onChangeCallback }) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setValue(value);

    onChangeCallback && onChangeCallback(value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="Type to search"
    />
  );
};

export default Input;
