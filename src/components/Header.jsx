import DropdownButton from "./DropdownButton.jsx";
import "./Header.css";

export default function Header({ setCategory }) {
  const dropdownInfo = {
    label: "Category",
    buttons: ["Electronics", "Clothing", "Household"],
    defaultText: "All",
    setState: setCategory,
  };

  return (
    <div className="header">
      <DropdownButton dropdownInfo={dropdownInfo} />
    </div>
  );
}
