import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add event listener for "Press any key to return"
    const handleKeyDown = () => {
      navigate(-1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{
        backgroundColor: '#0000aa',
        color: '#aaaaaa',
        fontFamily: "'VT323', monospace",
        fontSize: 'clamp(16px, 3vw, 24px)'
      }}
      onClick={() => navigate(-1)} // Also allow clicking to go back
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
          
          .bsod-centered {
            text-align: center;
          }
          .bsod-inverted {
            background-color: #aaaaaa;
            color: #0000aa;
          }
          .bsod-row {
            margin-bottom: 10px;
          }
          .bsod-shadow {
            text-shadow: 2px 2px #000000;
          }
          .bsod-blink {
            animation: bsod-blink-animation 1s steps(2, start) infinite;
            -webkit-animation: bsod-blink-animation 1s steps(2, start) infinite;
          }
          @keyframes bsod-blink-animation {
            to {
              visibility: hidden;
            }
          }
          @-webkit-keyframes bsod-blink-animation {
            to {
              visibility: hidden;
            }
          }
        `}
      </style>

      <div className="w-full max-w-3xl flex flex-col cursor-pointer">
        <div className="bsod-centered"><span className="bsod-inverted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;</div>
        <div className="bsod-centered"><span className="bsod-inverted">&nbsp;4&nbsp;0&nbsp;4&nbsp;</span><span className="bsod-shadow">&nbsp;</span></div>
        <div className="bsod-centered"><span className="bsod-inverted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="bsod-shadow">&nbsp;</span></div>
        <div className="bsod-centered">&nbsp;<span className="bsod-shadow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div className="bsod-row">&nbsp;</div>
        <div className="bsod-row">A fatal exception 404 has occurred at C0DE:ABAD1DEA in 0xC0DEBA5E.</div>
        <div className="bsod-row">The current request will be terminated.</div>
        <div className="bsod-row">&nbsp;</div>
        <div className="bsod-row">* Press any key to return to the previous page.</div>
        <div className="bsod-row">* Press CTRL+ALT+DEL to restart your computer. You will</div>
        <div className="bsod-row">&nbsp;&nbsp;lose any unsaved information in all applications.</div>
        <div className="bsod-row">&nbsp;</div>
        <div className="bsod-centered">Press any key to continue <span className="bsod-blink">&#9608;</span></div>
      </div>
    </div>
  );
}
