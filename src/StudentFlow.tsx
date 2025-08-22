import { useCallback, useEffect, useState } from "react";
import { quiz } from "./store";

function useTimer(initial= 30) {
    const [sec, setSec] = useState(initial);
    const timerRef = 

    useEffect(() => {
        setInterval(() => {
            setSec(prev => prev -1)
        }, 1000)
    }, []);

    const start = useCallback(() => {

    }, [])

 return {
    sec,
    start
 }
}

export default function StudentFlow() {
    const [quiz, setQuiz] = useState(quiz)
 
    return <div className="flex flex-col gap-2 p-4">
        <div>
            {/* useTimerhook there */}
        </div>
        <div>
            <h2>{quiz.title}</h2>
            <h4>{quiz.description}</h4>
        </div>
        
    </div>
}