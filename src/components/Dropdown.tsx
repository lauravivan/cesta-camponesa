import { useEffect, useState } from "react";

interface DropdownType {
  desc: string;
  options: string[];
  handleOptionSelect: (filters: FilterType[]) => void;
}

export function Dropdown({ desc, options, handleOptionSelect }: DropdownType) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState<FilterType[]>([]);
  const [optionsApplied, setOptionsApplied] = useState<string[]>([]);

  useEffect(() => {
    const filter = filtersApplied.find((val) => val.desc === desc);
    if (filter) {
      setOptionsApplied(filter.options);
    } else {
      setOptionsApplied([]);
    }
  }, [filtersApplied, desc]);

  useEffect(() => {
    handleOptionSelect(filtersApplied);
  }, [filtersApplied]);

  const handleOptionSelected = (option: string) => {
    setFiltersApplied((prevVal) => {
      let fs = [...prevVal];

      const descIndex = fs.findIndex((op) => op.desc === desc);

      if (descIndex >= 0) {
        const filter = fs[descIndex];
        let optionsArray = [...filter.options];
        const optionIndex = optionsArray.indexOf(option);

        if (optionIndex >= 0) {
          optionsArray = optionsArray.filter((f) => f !== option);
        } else {
          optionsArray.push(option);
        }

        fs[descIndex] = { ...filter, options: optionsArray };

        if (optionsArray.length === 0) {
          fs = fs.filter((_, i) => i !== descIndex);
        }

        return fs;
      }

      fs.push({
        desc: desc,
        options: [option],
      });

      return fs;
    });
  };

  const handleDropdownClick = () => {
    setToggleDropdown((prevVal) => !prevVal);
  };

  const reset = () => {
    setFiltersApplied((prev) => {
      return prev.filter((filter) => filter.desc !== desc);
    });
  };

  return (
    <div className="dropdown">
      <div className="dropdown__btn" onClick={handleDropdownClick}>
        <span>{desc}</span>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      <div className={`dropdown__options${toggleDropdown ? "-show" : ""}`}>
        <span onClick={reset}>reset</span>
        {options.map((option, i) => (
          <span
            className={`dropdown__options-show__option${
              optionsApplied.includes(option) ? "--selected" : ""
            }`}
            key={i}
            onClick={handleOptionSelected.bind(self, option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
}
