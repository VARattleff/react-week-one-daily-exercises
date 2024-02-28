import { useEffect, useState } from "react";
import { BaseProps } from "../types.ts";

export default function UseEffectDemo({ title }: BaseProps) {

    const [count, setCount] = useState(0);
    const [shouldCount, setShouldCount] = useState(false);

        useEffect(() => {
            if(!shouldCount) return;
            const i = setInterval(() => {
                setCount((prev) => prev + 1);
                console.log(count);
            }, 1000);
            return () => clearInterval(i);
        }, [shouldCount]);

        //bool flag solution
      /* useEffect(() => {
            let intervalId;
            if (shouldCount) {
                intervalId = setInterval(() => {
                    setCount((prev) => prev + 1);
                }, 1000);
            }
            return () => clearInterval(intervalId);
        }, [shouldCount]);*/

    return (
        <>
            <h2>{title}</h2>
            <p>{count}</p>
            <button onClick={() => setShouldCount((prev) => !prev)}>
                {shouldCount ? "Stop Count" : "Start Count"}
            </button>
        </>
    );
}
