function AddAnswer({
  cardNumber,
  quizInfo,
  setQuizInfo,
  ansOptions,
}) {

  let lastAnsOptionNum = Object.keys(ansOptions)[Object.keys(ansOptions).length-1]
  if (!lastAnsOptionNum){
    lastAnsOptionNum = 0;
  }
  
  let nextOptionNum = Number(lastAnsOptionNum) + 1
  
  const addAnswerOption = (e) => {
    e.preventDefault();

    setQuizInfo({
      ...quizInfo,
      [cardNumber]: {
        ...quizInfo[cardNumber],
        ansOptions: { ...ansOptions, [nextOptionNum]: '' },
      },
    });
  };

  return (
    <button className='btn btn-secondary' onClick={addAnswerOption}>
      Add answer option
    </button>
  );
}

export default AddAnswer;
