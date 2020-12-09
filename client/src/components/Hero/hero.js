import { useHistory } from 'react-router-dom';
import './hero.css';

function Hero() {
  const history = useHistory();

  return (
    <div className='hero'>
      <h1 className='hero-header'>BFFs</h1>
      <br />
      <h2 className='hero-description mt-n4'>
        The ultimate friendship quiz to test how well your friends know you!
      </h2>

      <div className="user-options d-flex flex-column">
      <button
        className='btn pink-button mt-2 d-block'
        onClick={() => history.push('/create-quiz')}
      >
        Create my quiz
      </button>
      <h2 className="or align-self-center mt-2">OR</h2>
      <button
        className='btn pink-button mt-2 d-block'
        onClick={() => history.push('/create-quiz')}
      >
        View my results
      </button>
      </div>

    </div>
  );
}

export default Hero;
