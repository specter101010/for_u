import "./describe.css";
import me1 from "../home/assets/me1.gif";
import soundkey from "../home/assets/keyboard.mp3";
import correctImg from "./assets/correct.gif"

import { useState, useEffect } from "react";

function Describe4() {
  const [showDialog, setShowDialog] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showquest1, setshowquest1] = useState(false);
  const [showchat2, setshowchat2] = useState(false);
  const [showchat3, setshowchat3] = useState(false);
  const [showjawab1, setshowjawab1] = useState(false);
  const [showCorrectImage, setShowCorrectImage] = useState(false);
  const [showButtonNext, setshowButtonNext] = useState(false);
  const [showpertanyaan2, setshowpertanyaan2] = useState(false);
  const [showpertanaanchat2, setshowpertanaanchat2] = useState(false);
  
  useEffect(() => {
    const audio1 = new Audio(soundkey);


    audio1.play();
    setTimeout(() => {
      audio1.pause();
      audio1.currentTime = 0;
    }, 2000);

    setTimeout(() => {
        setshowchat2(true);
    }, 2000);

    setTimeout(() => {
        setshowchat3(true);
    }, 4000);

    setTimeout(() => {
        setShowButton(true);
    }, 5000);




  

    return () => {
     
    };
  }, []);

  const handleShowFinalMessage = () => {
    setShowDialog(false);
    setShowFinalMessage(true);
    setShowButton(false);

    setTimeout(() => {
        setshowquest1(true);
      }, 2000);

          
    setTimeout(() => {
        setshowjawab1(true);
    }, 4000);


  


  };

  const [isDisabled, setIsDisabled] = useState(false);

  const handleAnswerClick = () => {
    if (isDisabled) return; // Cegah klik jika sedang dalam proses

    setTimeout(() => {
      setshowButtonNext(true)
  }, 2000);
  
    setIsDisabled(true); // Nonaktifkan klik
    setShowCorrectImage(true); 
  
    setTimeout(() => {
      setShowCorrectImage(false);
      setIsDisabled(false); // Aktifkan kembali setelah 3.5 detik
    }, 3500);

  
  };
  const nextButton = () => {

    setshowButtonNext(false)
    setshowpertanyaan2(true)
    setTimeout(() => {
      setshowpertanaanchat2(true)
    }, 2500);


  
  };
  


  return (
    <div className="container_descirbe3" >
      <div className="container_describe_flex_m">
      
        {showDialog && (
            <div className="flex">
                    <div className="profile">
                    <img src={me1} alt="me1" className="me2_m" />
                    </div>
                <div className="buble_chat">
                    <p className="p_buble">Sebelum dapetin hadianya ada beberapa</p>
                    {showchat2 && (
                        <p className='p_buble'>quests yang perlu diselesaikan dulu!!</p>

                    )}
                    {showchat3 && (
                         <p className='p_buble'>jadi semangattt!!</p>

                    )}

                </div>
            </div>
        
        )}
      </div>

      {showButton && (
        <div className="container_enter_button_d3">
          <button className="enter_button" onClick={handleShowFinalMessage}>
            Enter
          </button>
        </div>
      )}


      {showFinalMessage && (
        <div className="container_describe_flex_m">
          <div className="profile">
            <img src={me1} alt="me1" className="me2_m" />
          </div>
          <div className="buble_chat">
            <p className="p_buble">Semangatt!!!</p>
          </div>

        </div>
      )}

      {showquest1 && (
        <div className="container_question">
            <div className="bingkai_quetion">
           <div className="flext">
           <p className="p_buble">1. apa makhluk yang paling ku sukai ?</p>
           </div>
<br />
<br />

            {showjawab1 && (
                <div className="container_jawab">
                <div className="container_jawab">
                    <p className="p_buble click" disabled={isDisabled} onClick={handleAnswerClick}>A. kucing</p>
                </div>
                <div className="container_jawab">
                    <p className="p_buble click" disabled={isDisabled} onClick={handleAnswerClick}>B. meong</p>
                </div>
                <div className="container_jawab">
                    <p className="p_buble click" disabled={isDisabled} onClick={handleAnswerClick}>C. pus pus</p>
                </div>
            </div>
            )}

          
      {showButtonNext && (
        <div className="container_enter_button_d3">
          <button className="enter_button" onClick={nextButton}>
            next ?
          </button>
        </div>
      )}

      {showpertanyaan2 && (
        <div>
            <br />
        <br />
                <p className="p_buble">2. Dari daftar di bawah ini, mana yang paling </p>
                {showpertanaanchat2 && (
                         <p className='p_buble deserDikit'>mendeskripsikan kepribadianku?</p>

                    )}
        </div>

      )}


          
            </div>
        </div>
      )}


      {showCorrectImage && (
        <div className="container_correct_image">
          <span className="span_correct">
            <p>anjaaiii tau</p>
            <p> benerr xixixixi !!!</p>
            </span>
          <img src={correctImg} alt="Correct Answer" className="correct_img" />
        </div>
      )}

    </div>
  );
}

export default Describe4;
