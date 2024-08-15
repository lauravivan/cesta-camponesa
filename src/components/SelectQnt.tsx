import { forwardRef, useState } from "react";

interface SelectQntType {
  qnt: number;
}

export const SelectQnt = forwardRef<HTMLDivElement, SelectQntType>(
  function SelectQnt({ qnt }, ref) {
    const [selectedQnt, setSelectedQnt] = useState(qnt);

    const handleSubtraction = () => {
      setSelectedQnt((prevQnt) => prevQnt - 1);
    };

    const handleAddition = () => {
      setSelectedQnt((prevQnt) => {
        const newQnt = prevQnt + 1;

        if (newQnt <= qnt) {
          return newQnt;
        }

        return prevQnt;
      });
    };

    return (
      <div className="select-qnt">
        <div onClick={handleSubtraction}>
          <ion-icon name="remove-sharp"></ion-icon>
        </div>
        <div ref={ref}>{selectedQnt}</div>
        <div onClick={handleAddition}>
          <ion-icon name="add-sharp"></ion-icon>
        </div>
      </div>
    );
  }
);
