import React, { useContext } from "react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import { context } from "../Context/contextApi";

const Feed = () => {
  const { images, loading } = useContext(context);
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-wrap items-center justify-center">
          {!loading ? (
            images.map((item) => (
              <ImageCard
                key={item.id}
                urlToImage={item.webformatURL}
                tags={item.tags}
                views={item.views}
                likes={item.likes}
                comments={item.comments}
              />
            ))
          ) : (
            <p className="text-2xl text-gray-500">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Feed;
