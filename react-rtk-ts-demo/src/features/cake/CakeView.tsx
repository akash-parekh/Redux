import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";

export const CakeView = () => {
    const [value, setValue] = useState(1);
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
    const dispatch = useAppDispatch();
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(restocked(value))}>Restock Cake</button>
        </div>
    );
};
