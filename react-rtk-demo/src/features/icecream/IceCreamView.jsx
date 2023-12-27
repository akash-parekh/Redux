import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const numofIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  return (
    <div>
      <h2>Number of Ice Creams - {numofIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice Cream
      </button>
    </div>
  );
};
