import React from 'react'
import { useState } from 'react'
import QuestionList from "../questions.json"

export default function QuizScreen() {
    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const[markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    return (
        <div>QuizScreen</div>
    )
}
