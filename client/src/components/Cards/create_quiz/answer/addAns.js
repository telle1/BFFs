function AddAnswer({
  setAnsOptions,
  cardNumber,
  quizInfo,
  setQuizInfo,
  ansOptions,
}) {
  let ansOptionlength = Object.keys(ansOptions).length;
  let lastOptionNum = Object.keys(ansOptions)[ansOptionlength - 1];
  let nextOptionNum = Number(lastOptionNum) + 1;

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
