"use client"

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

export function Post() {
    const [likes, setLikes] = useState(0)
    const [curtido, setCurtido] = useState(false)

    const alternarCurtida = () => {
        if (curtido) {
            setLikes(likes - 1)
            setCurtido(false)
        } else {
            setLikes(likes + 1)
            setCurtido(true)
        }
    }

    return (
        <div className="border border-gray-300 p-4 mb-4 rounded-lg max-w-[300px]">
            <h2 className="text-xl font-bold mb-2">Publicação</h2>
            <p className="mb-4 text-gray-700">Estou aprendendo React!</p>

            <p className="mb-4 font-medium">Curtidas: {likes}</p>

            <button className={`btn ${curtido ? 'btn-danger' : 'btn-primary'}`} onClick={alternarCurtida}>{curtido ? <ThumbsDown/> : <ThumbsUp/>}</button>
        </div>
    )
}