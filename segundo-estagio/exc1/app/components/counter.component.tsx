"use client"

import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { Shuffle } from "lucide-react";
import { useState } from "react";

interface CounterProps {
    initialValue?: number
}

export function Counter(props: CounterProps) {
    const valorInicial = props.initialValue ?? 0

    const [count, setCount] = useState(valorInicial)

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
        const numeroAleatorio = Math.floor(Math.random() * 100 + 1)

        setCount(numeroAleatorio)

        console.log(count)
    }

    return (
        <div>
            <h1 className="text-lg font-bold flex items-start m-2">{count}</h1>
            
            <div className="flex gap-2 m-2">
                <button className="btn btn-primary p-4" onClick={incrementar}><Plus/></button>
                <button className="btn btn-secondary p-4" onClick={decrementar}><Minus/></button>
                <button className="btn btn-danger p-4" onClick={zerar}><RotateCcw/></button>
                <button className="btn btn-sucess p-4" onClick={randomizar}><Shuffle/></button>
            </div>
        </div>
    )
}