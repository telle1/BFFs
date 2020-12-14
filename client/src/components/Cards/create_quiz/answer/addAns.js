function AddAnswer({
  setAnsOptions,
  cardNumber,
  quizInfo,
  setQuizInfo,
  ansOptions,
}) {
  let ansOptionlength = Object.keys(ansOptions).length;
  let nextOptionNum = Number(ansOptionlength) + 1;
  
  console.log('ansoptionlength', ansOptionlength, 'nextoptionum', nextOptionNum)
  const addAnswerOption = (e) => {
    e.preventDefault();

    setAnsOptions({ ...ansOptions, [nextOptionNum]: '' });

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
