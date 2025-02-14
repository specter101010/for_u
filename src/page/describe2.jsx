import './describe.css'
import me2 from './assets/me2.gif'

import soundkey from "../home/assets/keyboard.mp3";

import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useState, useEffect } from "react";

function Describe2(){
    const [showd, setShowd] = useState(false);
    const [showd2, setShowd2] = useState(false);
    const [showd3, setShowd3] = useState(false);
    const [showd4, setShowd4] = useState(false);

  const [show34, setShow34] = useState(false);

  const navigate = useNavigate(); // Hook untuk navigasi
 

   
  
    useEffect(() => {

      const audio1 = new Audio(soundkey);
      const audio2 = new Audio(soundkey);
      const audio3 = new Audio(soundkey);
      const audio4 = new Audio(soundkey);
      const audio5 = new Audio(soundkey);

        audio1.play();
        setTimeout(() => {
          audio1.pause();
          audio1.currentTime = 0;
        }, 2000);
  
      const timer = setTimeout(() => {
          setShowd(true);

          audio2.play();
          setTimeout(() => {
            audio2.pause();
            audio2.currentTime = 0;
          }, 2000);

      }, 2000);

      const timer2 = setTimeout(() => {
        setShowd2(true);

        audio3.play();
        setTimeout(() => {
            audio3.pause();
            audio3.currentTime = 0;
        }, 2000);

      }, 4000);

      const timer3 = setTimeout(() => {
          setShowd3(true);

          audio4.play();
          setTimeout(() => {
            audio4.pause();
            audio4.currentTime = 0;
          }, 2000);

      }, 6000);

      const timer4 = setTimeout(() => {
          setShowd4(true);

          audio5.play();
          setTimeout(() => {
            audio5.pause();
            audio5.currentTime = 0;
          }, 2000);

      }, 8000);

      const timerB = setTimeout(() => {
        setShow34(true);
      }, 11000);

     
  
      return () => {
        clearTimeout(timer,timer2,timer3,timer4,timerB);
      };
    }, []);

    const handleEnterClick = () => {
        navigate("/describe3"); // Arahkan ke halaman lain
      };
    
         
    return(
      
        <div className="container_describe">
            
            <img src={me2} alt="me2" className='me2' />
            <div className="buble_chat">
                <p className='p_buble'>
                Mungkin ini nggak bisa menggantikan 
                </p>
                
            {showd ? (
                <p className='p_buble'>
                 momen ulang tahun yang sudah berlalu,
             </p>
            ) : (
              <p></p>
            )}

            {showd2 ? (
                <p className='p_buble'>
               tapi aku harap ini bisa tetap membuat
            </p>
            ) : (
              <p></p>
            )}

            {showd3 ? (
                <p className='p_buble'>
                  kakak tersenyum.Sekali lagi, maaf ya kak
             </p>
            ) : (
              <p></p>
            )}
              

            {showd4 ? (
                <p className='p_buble'>
                   atas keterlambatannya, semoga kakak suka!! 
             </p>
            ) : (
              <p></p>
            )}
              

              {show34 ? (
          <div className="container_enter_button">
            <button
              className="enter_button animate__animated animate__pulse"
              onClick={handleEnterClick} // Panggil fungsi navigasi
            >
              Enter
            </button>
          </div>
        ) : (
          <p></p>
        )}


          
              
               
            </div>

        </div>

    );
}


export default Describe2