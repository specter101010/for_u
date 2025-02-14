import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./home.css";
import me1 from "./assets/me1.gif";
import soundkey from "./assets/keyboard.mp3";

function Home() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi

  const audio1 = new Audio(soundkey);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      audio1.play();
      setTimeout(() => {
        audio1.pause();
        audio1.currentTime = 0;
      }, 2000);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShow2(true);
      audio1.play();
      setTimeout(() => {
        audio1.pause();
        audio1.currentTime = 0;
      }, 2000);
    }, 4000);

    const timer3 = setTimeout(() => {
      setShow3(true);
    }, 6400);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Fungsi untuk pindah ke halaman baru
  const handleEnterClick = () => {
    navigate("/describe"); // Arahkan ke halaman lain
  };

  return (
    <div className="container_home">
      <div>
        <div className="flex">
          <img src={me1} alt="saya" className="me1" />
          <div className="title_home">
            {show ? (
              <div className="message_welcome">Hallo kakak cantik !!</div>
            ) : (
              <p className="loding_home">Hallo kakak cantik !!</p>
            )}

            {show2 ? (
              <div className="container_text_home">
                <div className="teks_home">
                  Sebelumnya maaf nii🙏🥺, ngaretnyaa kelamaan
                </div>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>

        {show3 ? (
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

export default Home;
