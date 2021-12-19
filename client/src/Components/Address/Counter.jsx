import React, { useEffect, useState } from 'react'
import "../../Styles/address.css"

function Counter() {
    const [min,setMin] = useState(14);
    const [sec,setSec] = useState(59);
    const [count,setCount] = useState(899);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((prev) => {
                if (prev % 60 === 0) {
                    (setMin(min-1));
                    setSec(60);
                }
                else {
                    setSec(sec-1);
                }
                if (prev === 0) {
                    setMin("00");
                    setSec("00");
                    clearInterval(timer);
                    return 0;
                }
                return prev-1;
            })
        },1000)
    },[count]);
    return (
        <div style={{color:"#FF0000",paddingLeft:"10px"}}>
            00:{min}:{sec}seconds
        </div>
    )
}

export default Counter
