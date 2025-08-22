import { useCallback, useState } from "react"
import QuestionsTeacher from "./QuestionsTeacher";
import { quiz, setQuiz } from "./store";

export default function TeacherFlow() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [questions, setQuestions] = useState([])
    const [addMore, setAddMore] = useState(true)

    const addQuestion = useCallback((newQuestion) => {
        setQuestions([...questions, newQuestion])
    }, []);


    function submitQuiz() {
        
        const newQuiz = {
            title,
            description,
            time,
            questions
        };
        
        setQuiz(newQuiz)
        console.log('Q' , questions)
        console.log('quiz', quiz)
    }

console.log('Hi')

    return <div>

       
            <div className="my-2">
                <label htmlFor="title">Title: </label>
                <input className="border" type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="my-2">
                <label htmlFor="description">Description: </label>
                <input className="border" type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="my-2">
                <label htmlFor="time">Time: </label>
                <input className="border" type="number" id="time" onChange={(e) => setTime(e.target.value)} /> Min
            </div>
            <div className="my-2">
                {
                    questions.map((question, idx) => <QuestionsTeacher key={idx} prefillData={question} handleQuestionSubmit={addQuestion} />)
                    
                }
                {
                 addMore && <QuestionsTeacher key={questions.length} handleQuestionSubmit={addQuestion} />
                }

            
                {/* <button onClick={() => {
                    setAddMore(true)
                }}>Add more Questions</button> */}
            </div>

            <button onClick={submitQuiz}>Submit Quiz</button>

            <pre>{JSON.stringify(quiz)}</pre>
        

    </div>
}