import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../components/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true)
  const [number, setNumber] = useState("25")
  const [page, setPage] = useState("1")


  const updatePerPage = (e) => {
    const value = e.target.value;
    setNumber(value);
  }

  const updatePages = (e) => {
    const value = e.target.value;
    setPage(value);
  }

  const runSearch = query => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${number}&format=json&nojsoncallback=1`
      )
      .then(response => {
        setLoading(true);
        setImages(response.data.photos.photo);
      })
      .then(() => {
        setTimeout(() => {setLoading(false)}, 2000);
      })
      .catch(error => {
        console.log(
          "Error:",
          error
        );
      });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch, number, updatePerPage, page, updatePages }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
