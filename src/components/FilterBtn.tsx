import { useState } from "react";

export function FilterBtn({ desc, options }: FilterType) {
  const [showOptions, setShowOptions] = useState(false);

  const handleFilterClick = () => {
    setShowOptions((showOptionsState) => !showOptionsState);
  };

  return (
    <div className="filter-btn">
      <button onClick={handleFilterClick}>{desc}</button>
      <div
        className={`filter-btn__filter-options ${
          showOptions ? "filter-btn__filter-options-show" : ""
        }`}
      >
        {options.map((option, i) => (
          <span key={i}>{option}</span>
        ))}
      </div>
    </div>
  );
}
