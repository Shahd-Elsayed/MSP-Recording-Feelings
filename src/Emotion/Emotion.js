import React from 'react';
import '../Emotion/Emotion.css';
function Emotions({images}){
    return( 
        <>
            {
                images.map((image,idx)=>(
                  <div>
                  <input type="radio" id={idx} value={idx} className='emojibtn' name='emojibtn' />
                  <label htmlFor={idx}>
                    <img src={image} className="Emoji" alt="Emoji" />
                  </label>
                  </div>
                ))
            }
        </>
    );
}
export default Emotions;