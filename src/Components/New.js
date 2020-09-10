import React, { useState, useEffect } from "react";
import "./Styles/New.css";
import { UnsplashImage } from "./UnsplashImage";
import { Loader } from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import unsplash from "./API/Unsplash";

function New() {
  const [images, setImage] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (page = 1) => {
    const response = await unsplash.get(
      `/collections/139386/photos?page=${page}`
    );
    setImage([...images, ...response.data]);
    setPageNum(pageNum + 1);
  };
  console.log(pageNum);
  return (
    <div className="new">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages(pageNum)}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="image_wrapper">
          {images.map((image) => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default New;
