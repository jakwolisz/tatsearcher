import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Loader from "./Loader";
import Gallery from "./Gallery";

const Items = ({ color, searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  
  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery color={color} data={images} />}
    </div>
  );
};

export default Items;
