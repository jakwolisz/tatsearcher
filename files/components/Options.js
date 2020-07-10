import React, {useContext} from "react";
import { PhotoContext } from "../context/PhotoContext";

const Options = ({color}) => {

const { number, updatePerPage, page, updatePages } = useContext(PhotoContext);

return (
   <>
   <div className="options-group">
  <div className={`form-group-${color}`}>
    <span>Ilość</span>
    <input className={`form-field-${color}`} type="text" name="number" placeholder={""} value={number} onChange={updatePerPage}></input>
  </div>

  <div className={`form-group-${color}`}>
    <span>Strony</span>
    <input className={`form-field-${color}`} type="text" name="number" placeholder={""} value={page} onChange={updatePages}></input>
  </div>
  </div>
</>
);
};

export default Options;
