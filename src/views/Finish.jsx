/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom';

import './Finish.scoped.scss';

function end() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }
  return (
    <div className="everything">
      <h1>Your order is complete!!</h1>
      <button type="button" onClick={goHome}>
        Go to home page
      </button>
    </div>
  );
}

export default end;
