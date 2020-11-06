import React from 'react';
import './styles/Project.css';

function LeftArrow({ goPrevItem }) {
  return (
    <div>
      <button type='button' onClick={goPrevItem} className='projects-arrow'>
        ◄
      </button>
    </div>
  );
}

export default LeftArrow;