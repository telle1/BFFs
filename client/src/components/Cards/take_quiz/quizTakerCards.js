import React, { useEffect, useState } from 'react';

import axios from 'axios';

function QuizTakerCards() {

    const [quizCards, setQuizCards] = useState([]);
    const [score, setScores] = useState(0);

    useEffect(() => {
        const fetchUserCards = async () => {
            const result = await axios.get('/api/take-quiz/:quizId');
        // fetch('/api/take-quiz/:quizId')
        // .then(res => res.json())
        // .then(data=> console.log(data))
            console.log('WHATS IN USER CARDS', result.data.test)
            setQuizCards(result.data.test)
        }
        fetchUserCards();
        // setQuizCards(getUserCards.data)
    }, []);

    return <div>{quizCards}</div>;
}

export default QuizTakerCards;
