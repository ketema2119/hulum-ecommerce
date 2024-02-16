import React, { useState } from 'react';

function Message() {
  const [close, setClose] = useState(false);
  if (close) {
    return null;
  } else {
    return (
      <div className='top-message'>
        <h5> USE THE CODE DARREL10 AT CHECKOUT FOR 10% OFF! 3 DAYS ONLY! </h5>
        <div
          className='close'
          onClick={() => {
            setClose(true);
          }}
        >
          &#10006;
        </div>
      </div>
    );
  }
}

export default Message;
