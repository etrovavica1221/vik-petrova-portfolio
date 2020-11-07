import React from 'react';
import './styles/Project.css';

function RightArrow({ goNextItem }) {
  return (
    <div className="arrow-container">
      <button type='button' onClick={goNextItem} id="right-arrow" className='projects-arrow'>
        ►
      </button>
    </div>
  );
}

export default RightArrow;