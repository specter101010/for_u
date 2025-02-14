import "./describe.css";
import me2_m from "./assets/me2.gif";
import she from './assets/she.gif';
import soundkey from "../home/assets/keyboard.mp3";

import { useState, useEffect, useRef } from "react";

function Describe3() {
  const [show34, setShow34] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [botReply, setBotReply] = useState(null);
  const [showSecondQuestion, setShowSecondQuestion] = useState(false);
  const [showSecondOptions, setShowSecondOptions] = useState(false);
  const [secondReply, setSecondReply] = useState(null);
  const [finalMessage, setFinalMessage] = useState(null);

  const audio1 = useRef(new Audio(soundkey));
  const audio2 = useRef(new Audio(soundkey));

  useEffect(() => {
    audio1.current.play();
    setTimeout(() => {
      audio1.current.pause();
      audio1.current.currentTime = 0;
    }, 2000);

    const timerB = setTimeout(() => {
      setShow34(true);
    }, 2000);

    return () => {
      clearTimeout(timerB);
    };
  }, []);

  const handleShowOptions = () => {
    setShowOptions(true);
    setShow34(false);

    audio2.current.play();
    setTimeout(() => {
      audio2.current.pause();
      audio2.current.currentTime = 0;
    }, 2000);
  };

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setShowOptions(false);

    audio2.current.play();
    setTimeout(() => {
      audio2.current.pause();
      audio2.current.currentTime = 0;
    }, 2000);

    setTimeout(() => {
      if (message === "Ga dong ngapain marah !!") {
        setBotReply("Beneran? Aku lega banget!");
      } else if (message === "Ga marah kok.") {
        setBotReply("Syukurlah! Aku takut kakak marah");
      }

      setTimeout(() => {
        setShowSecondQuestion(true);
      }, 2500);
    }, 2500);
  };

  const handleShowSecondOptions = () => {
    setShowSecondOptions(true);
  };

  const handleSelectSecondMessage = (message) => {
    setSecondReply(message);
    setShowSecondOptions(false);

    setTimeout(() => {
      setFinalMessage("Kalo mau hadiah tapi ada syaratnya nih!");
    }, 2000);
  };

  return (
    <div className="container_descirbe3">
      <div className="container_describe_flex_m">
        <div className="profile">
          <img src={me2_m} alt="me2_m" className="me2_m" />
        </div>

        <div className="buble_chat">
          <p className="p_buble">Tapi sebelumnya kakak marah ga??</p>
        </div>
      </div>

      {show34 && (
        <div className="container_enter_button_d3">
          <button
            className="enter_button animate__animated animate__pulse"
            onClick={handleShowOptions}
          >
            Balas
          </button>
        </div>
      )}

      {showOptions && (
        <div className="container_chat">
          <button
            className="enter_button_M animate__animated animate__pulse"
            onClick={() => handleSelectMessage("Ga dong ngapain marah !!")}
          >
            <div className="buble_chat">
              <p className="p_buble">Ga dong ngapain marah !!</p>
            </div>
          </button>

          <button
            className="enter_button_M animate__animated animate__pulse"
            onClick={() => handleSelectMessage("Ga marah kok.")}
          >
            <div className="buble_chat">
              <p className="p_buble">Ga marah kok.</p>
            </div>
          </button>
        </div>
      )}

      {selectedMessage && (
        <div className="container_describe_flex_f">
          <div className="buble_chat">
            <p className="p_buble">{selectedMessage}</p>
          </div>
          <div className="profile">
            <img src={she} alt="she" className="she" />
          </div>
        </div>
      )}

      {botReply && (
        <div className="container_describe_flex_m">
          <div className="profile">
            <img src={me2_m} alt="me2_m" className="me2_m" />
          </div>
          <div className="buble_chat">
            <p className="p_buble">{botReply}</p>
          </div>
        </div>
      )}

      {showSecondQuestion && (
        <div className="container_describe_flex_m">
            <div className="geser"></div>
          <div className="buble_chat">
            <p className="p_buble">Kakak mau hadiah ga?</p>
          </div>
        </div>
      )}

      {showSecondQuestion && !showSecondOptions && !secondReply && (
        <div className="container_enter_button_d3">
          <button
            className="margin_top enter_button animate__animated animate__pulse"
            onClick={handleShowSecondOptions}
          >
            Balas
          </button>
        </div>
      )}

      {showSecondOptions && (
        <div className="container_chat">
          <button
            className="enter_button_M animate__animated animate__pulse"
            onClick={() => handleSelectSecondMessage("Mau dong!")}
          >
            <div className="buble_chat">
              <p className="p_buble">Mau dong!</p>
            </div>
          </button>

          <button
            className="enter_button_M animate__animated animate__pulse"
            onClick={() => handleSelectSecondMessage("Mau.")}
          >
            <div className="buble_chat">
              <p className="p_buble">Mau.</p>
            </div>
          </button>
        </div>
      )}

      {secondReply && (
        <div className="container_describe_flex_f">
          <div className="buble_chat">
            <p className="p_buble">{secondReply}</p>
          </div>
          <div className="profile">
            <img src={she} alt="she" className="she" />
          </div>
        </div>
      )}


        {finalMessage && (
          <div className="container_describe_flex_m">
            <div className="profile">
              <img src={me2_m} alt="me2_m" className="me2_m" />
            </div>
            <div className="buble_chat">
              <p className="p_buble">{finalMessage}</p>
            </div>
          </div>
        )}
     


    </div>
 

  );
}

export default Describe3;
