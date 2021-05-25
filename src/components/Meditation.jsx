import React, { useState, useEffect } from 'react'

function Meditation() {
    const [counter, setCounter] = useState(10)
    const [isActive, setIsActive] = useState(false)
    const [isFinished, setIsFinished] = useState(false)

    const formatCounter = (counter) => {
        let min = parseInt(counter / 60, 10)
        let hou = parseInt(min / 60, 10)
        let sec = counter % 60
        min = min % 60
        return (
            <h4>
                {hou > 0 ? hou.toString().padStart(2, '0').concat(":") : ""}{min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
            </h4>
        )
    }


    useEffect(() => {
        if (counter === 0) {
            setIsActive(false)
            setCounter(0)
            setIsFinished(true)
        }
        if (isActive) {
            setTimeout(() => {
                setCounter(counter - 1)
            }, 1000);

        }
    }, [counter, isActive])

    if (isFinished) {
        return <h1>HA ACABADO</h1>
    } else {
        return (
            <div>
                <button onClick={() => setIsActive(isActive ? false : true)}>{isActive ? "PAUSA 🌒" : "EMPEZAR 🌄"}</button><br />
                {formatCounter(counter)}
            </div>
        )
    }
}

export default Meditation
