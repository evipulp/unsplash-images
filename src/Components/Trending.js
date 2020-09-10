import React, { useState, useEffect } from "react";
import "./Styles/Trending.css";
import { UnsplashImage } from "./UnsplashImage";
import { Loader } from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import unsplash from "./API/Unsplash";

function Trending() {
  const [images, setImages] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (page = 1) => {
    const response = await unsplash.get(
      `/collections/1580860/photos?page=${page}`
    );
    setImages([...images, ...response.data]);
    setPageNum(pageNum + 1);
  };

  return (
    <div className="trending">
      <InfiniteScroll
        dataLength={images.length}
        next={() => fetchImages(pageNum)}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="trending_image_wrapper">
          {images.map((image) => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Trending;
