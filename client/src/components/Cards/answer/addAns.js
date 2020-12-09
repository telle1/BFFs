function AddAnswer({ setAnsOptions, ansOptions }) {
    const addAnswerOption = (e) => {
      e.preventDefault();
      setAnsOptions((ansOptions) => [...ansOptions, '']);
    };
  
    return (
      <button className='btn btn-secondary' onClick={addAnswerOption}>
        Add answer option
      </button>
    );
  }

export default AddAnswer;