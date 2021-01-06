import React from 'react';
import { SetQuiz } from './QuizContext'

function BgColor({ cardNumber, color }){

    const changeCardProp = SetQuiz()

    return (
        <div
        key={color}
        className='btn pick-a-color mr-1'
        style={{ backgroundColor: color }}
        onClick={() => changeCardProp(cardNumber, 'bgColor', color)}
      ></div>
    )
}

export default BgColor;