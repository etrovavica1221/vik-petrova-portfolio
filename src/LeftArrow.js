import React from 'react';
import './styles/Project.css';

function LeftArrow({ goPrevItem }) {
  return (
    <div className="arrow-container">
      <button type='button' onClick={goPrevItem} id="left-arrow" className='projects-arrow'>
        ◄
      </button>
    </div>
  );
}

export default LeftArrow;