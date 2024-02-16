import React from 'react';

function NewsLetter() {
  return (
    <div className='news-letter'>
      <div className='container'>
        <h2>NEWSLETTER</h2>
        <p>
          We hand-pick our favorites and send you the hottest deals every week!
        </p>
        <form className='subscribe-for-news'>
          <input type='text' placeholder='Email address...' />
          <button>Subscribe</button>
        </form>
        <span>{`We'll never share your email address with a third-party.`}</span>
      </div>
    </div>
  );
}

export default NewsLetter;
