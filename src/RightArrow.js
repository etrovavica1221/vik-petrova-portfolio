import React from 'react';
import './styles/Project.css';

function RightArrow({ goNextItem }) {
  return (
    <div>
      <button type='button' onClick={goNextItem} className='projects-arrow'>
        ►
      </button>
    </div>
  );
}

export default RightArrow;