import './App.css';
import React, { useState } from 'react';
import List from '../List/List';
import logo from '../images/MSPLogo.svg';
import firstEmoji from '../images/Emoji1.png';
import secondEmoji from '../images/Emoji2.png';
import thirdEmoji from '../images/Emoji3.png';
import forthEmoji from '../images/Emoji4.png';
import mainImage from '../images/mainImage.png';
function App() {
  const images=[firstEmoji,secondEmoji,thirdEmoji,forthEmoji];
   //const record=[];
  const[record,setRecords] =useState([])
  const deleteRecord =(even,deletedi)=>{
    setRecords(record.filter((e,indx)=>indx!==deletedi));
  }
   const recordData=()=>{
    const text=document.getElementsByTagName("input")[0];
    const emoji=document.querySelector("input[type='radio']:checked");
    console.log(emoji);
    if(text.value&&emoji){
      setRecords([...record,{text:text.value,emoji:images[emoji.value]}])
        console.log(record);
         text.value="";
         emoji.checked=false;   
    }else{
      alert("please fill all data.");
    }
   }

  return (
    <>
        {/* App Header */}
          <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="title">
              RECORDING FEELINGS
            </h1>
        </header>

        {/* App Content */}
        <main className="App-content" >

          {/* First Section */}
          <div className='firstSection'>
            <input type='text' className='inputText' placeholder='Write Your Feelings here...'></input>
            <h2>Select Emoji</h2>
            <div className='selectEmoji'>
            <div className='Emojis'>
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

                </div>
                <div className='btn'>
                  <button className='RecordBtn' onClick={recordData}>Record</button>
                </div>
                <img className='mainImg' src={mainImage} alt='mainImage' />
            </div>
          </div>
          {/* Second Section */}
          <div className='secondSection'>
            <List record={record} fun={deleteRecord}/>
          </div>
        </main>    
    </>
  );
}
export default App;