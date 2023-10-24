import { useEffect, useState } from "react";
import './game.css'

export function Game() {
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    function jumpHandler() {
        setPosition(position - 10);
    }

    function keyUpHandler(e) {
        if (e.key === 'ArrowUp') {
            jumpHandler();
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setScore(score + 1);
            setTime(time + 10);
        }, 10000);
        return () =>
            clearInterval(interval);
    }, [score, time]);

    return (
        <div className="game-container" onKeyUp={keyUpHandler} tabIndex={0}>
            <div>
                <p>punti{score}</p>
                <p>tempo{time}</p></div>
            <div className="player" style={{ top: position + 'px' }}>
                <img src="" alt="player" />
            </div>

        </div>
    )
}