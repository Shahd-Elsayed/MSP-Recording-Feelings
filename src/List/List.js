import React from 'react';
import "../List/List.css";
function List({record,fun}){
    return(
        <>
        {
            record.map((d,indx)=>(
                <div key={indx} className='list'>
                <div className='record'>
                    <img src={d.emoji} className="Emo" alt="Emoji" />
                    <h2 className='feelingText'>{d.text}</h2>
                </div>
                <button className='deleteBtn' onClick={(e)=>fun(e,indx)}>delete</button>
                </div>
            ))
        }

        </>
    );
}
export default List;