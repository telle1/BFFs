function AddAnswer({
  cardNumber,
  quizInfo,
  setQuizInfo,
  ansOptions,
}) {
  let ansOptionlength = Object.keys(ansOptions).length;
  let lastAnsOptionNum = Object.keys(ansOptions)[Object.keys(ansOptions).length-1]
  // console.log('last ans option num', lastAnsOptionNum)
  // let nextOptionNum = Number(ansOptionlength) + 1;
  let nextOptionNum = Number(lastAnsOptionNum) + 1
  
  // console.log('ansoptionlength', ansOptionlength, 'nextoptionum', nextOptionNum)
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
