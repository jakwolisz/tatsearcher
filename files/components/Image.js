import React, { useState } from "react";
import Modal from "./Modal";


const Image = ({ color, url, alt, id}) => {

  const [isOpen, updateState] = useState(false);

  const handleModal = () => {
    updateState(!isOpen)
  }


  return (
<>
  <li className={color}>
    <img className="list" src={url} alt={alt} onClick={handleModal} />
  </li>
  <Modal isOpen={isOpen} handleModal={handleModal} >
    <img className="modal-img" src={url} alt={alt} />
  </Modal>
</>
)};

export default Image;
