"use client"

import { count } from "console";
import { StepForward } from "lucide-react";
import { StepBack } from "lucide-react";
import { X } from "lucide-react";
import { RefreshCw } from "lucide-react";
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

    function zerar() {
        setCount(0)

        console.log(count)
    }

    function randomizar() {
        let numeroAleatorio = Math.floor(Math.random() * 100 + 1)

        setCount(numeroAleatorio)

        console.log(count)
    }

    return (
        <div>
            <h1 className="text-lg font-bold flex items-start m-2">{count}</h1>
            <button className="btn btn-primary m-2 p-4" onClick={incrementar}><StepForward/></button>
            <button className="btn btn-secondary m-2 p-4" onClick={decrementar}><StepBack/></button>
            <button className="btn btn-danger m-2 p-4" onClick={zerar}><X/></button>
            <button className="btn btn-sucess m-2 p-4" onClick={randomizar}><RefreshCw/></button>
        </div>
    )
}