import React, { useState, useEffect } from "react";
import DevLangList from "./components/DevLangList";
import UseDevLangState from "./components/UseDevLangState";
import DevLangButtons from "./components/DevLangButtons";
import noSelection from "./utils/NoSelection";
import moveCheckedDevLang from "./utils/MoveCheckedDevLang";
import Modal from "./components/Modal";
import "./App.scss";

function App() {
  const { leftSide, setLeftSide, rightSide, setRightSide } = UseDevLangState();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="container">
        <div className="left-side">
          <DevLangList list={leftSide} setList={setLeftSide} />
        </div>
        <div className="buttons-container">
          <DevLangButtons
            leftSide={leftSide}
            setLeftSide={setLeftSide}
            rightSide={rightSide}
            setRightSide={setRightSide}
            noSelection={noSelection}
            moveCheckedDevLang={moveCheckedDevLang}
          />
        </div>
        <div className="right-side">
          <DevLangList list={rightSide} setList={setRightSide} />
        </div>
      </div>
    </div>
  );
}

export default App;
