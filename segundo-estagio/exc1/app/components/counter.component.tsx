"use client"

import { count } from "console";
import { use, useState } from "react";

export function Counter(props: any) {
    const [count, setCount] = useState(0)

    function incrementar() {
        setCount(count + 1)

        console.log(count)
    }

    function decrementar() {
        if (count > 0) setCount(count - 1);

        console.log(count)
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <h1 className="text-lg font-bold">{count}</h1>
            <button className="btn btn-primary" onClick={incrementar}>Incrementar</button>
            <button className="btn btn-danger" onClick={decrementar}>Decrementar</button>
        </div>
    )
}