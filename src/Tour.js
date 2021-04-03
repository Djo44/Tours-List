import React, { useState, useEffect } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [text, setText] = useState(true);

  return (
    <main>
      <article className='single-tour'>
        <img src={image} alt='' />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {text ? info.substring(0, 200) : info}
            {text ? <button onClick={() => setText(!text)}>Read more</button> : <button onClick={() => setText(!text)}>Reduce text</button>}
          </p>
          <button className='delete-btn' onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </footer>
      </article>
    </main>
  );
};

export default Tour;
