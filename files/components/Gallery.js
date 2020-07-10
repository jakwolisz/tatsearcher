import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";

const Gallery = ({ color, data}) => {
  const results = data;

  let images;
  let noImages;

  if (results.length > 0) {
    images = results.map(image => {
      let url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
      return <Image color={color} url={url} key={image.id} alt={image.title} id={image.id} />;
    });
  } else {
    noImages = <NoImages />;
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
