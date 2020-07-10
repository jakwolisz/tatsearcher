import React from "react";

const Modal = ({ isOpen, handleModal, children }) => {
  const showClassName = isOpen ? 'modal-block' : 'modal-none';

  return (
 
      <div className={showClassName}>
        <div style={{width: `30%`, height: `50%`, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end", padding: "1000px", backgroundColor: "black", boxSizing: "content-box"}}>

        {children}
        <button className="button-modal close" onClick={handleModal}>x</button>
        
        </div>
      </div>
  );
};

export default Modal;