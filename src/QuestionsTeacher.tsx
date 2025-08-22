import { useState } from "react"

export default function QuestionsTeacher({handleQuestionSubmit, prefillData}) {
    console.log(prefillData)

    const [question, setQuestion] = useState(prefillData?.question ?? '')
    const [type, setType] = useState(prefillData?.type ?? '')
    const [answers, setAnswers] = useState(prefillData?.answers ?? Array(1).fill(''));
    const [correctAnswer , setCorrectAnswer] = useState(prefillData?.correctAnswer ?? 0)


 return <div className="flex flex-col gap-2 border-2 border-gray-400 m-2 p-2">
    <div className="flex gap-2">
    <label htmlFor="question">Question</label>
    <input className="border" id="question" type="text" value={question} onChange={e => setQuestion(e.target.value)} />
    </div>
    
    <select className="border text-start" name="type" id="type" onChange={e=> setType(e.target.value)}>
        <option value="single">Single</option>
        <option value="mcq">Multiple</option>
    </select>
    
    <div>
        <label htmlFor="answers"> Answers :</label>
        <div className="flex flex-wrap gap-3">
        {
            answers.map((answer, idx) => (<input value={answer} onChange={(e) => {
                setAnswers(prev => {
                    const newState = [...prev];
                    newState[idx] = e.target.value;
                    return newState
                })
            }} type="text" className="border" placeholder={idx+1} />))
        }
        <button className="border bg-gray-400" onClick={() => setAnswers([...answers, ''])}>Add more Answer</button>
        </div>

        <select className="border text-start" name="type" id="type" onChange={e=> setType(e.target.value)}>
            {
                answers.map((item, idx) => <option value={idx}>{idx + 1}</option>)
            }
        
    </select>
        

    </div>
    {!prefillData?.question && <button onClick={() => {
        const newQuestion  =  {
            question,
            type,
            answers,
            correctAnswer
        }
        handleQuestionSubmit(newQuestion)
    } }>Submit Question</button>}
 </div>
}