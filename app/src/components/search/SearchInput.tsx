import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import { IoIosSearch, IoIosCloseCircle } from "react-icons/io"; // クリアアイコンを追加

type Props = {
  className?: string;
  onChange?: (e: string) => void;
  onKeyDown?: KeyboardEventHandler;
};

export const SearchInput = ({ className, onChange, onKeyDown }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
    onChange?.("");
  };

  return (
    <div className={`relative ${className}`}>
      <div className="text-xl text-gray-500 absolute left-3 top-[11px]">
        <IoIosSearch />
      </div>
      {inputValue && (
        <div
          className="text-xl text-gray-500 absolute right-3 top-[11px] cursor-pointer"
          onClick={clearInput}
        >
          <IoIosCloseCircle />
        </div>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        placeholder="キーワードを入力"
        className="focus:shadow-input focus:shadow-sky-400 focus:border-blue-400 duration-300 ease-in-out w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md outline-none"
      />
    </div>
  );
};
