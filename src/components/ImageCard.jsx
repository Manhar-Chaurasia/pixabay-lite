import React, { useContext } from "react";
import { abbreviateNumber } from "js-abbreviation-number";

const ImageCard = ({ urlToImage, tags, views, likes, comments }) => {
  return (
    <>
      <div class="w-72 h-96 group relative mx-3 my-5 transition shadow-2xl rounded-lg border-2 border-stone-100">
        <img
          src={urlToImage}
          alt="Your Image"
          className="w-full h-72 object-cover rounded-t-xl"
        />
        <div class="absolute top-5 left-4 cursor-pointer text-white bg-white bg-opacity-35 py-1 px-2 rounded-md transform transition duration-300 opacity-0 group-hover:opacity-100">
          <i class="fa-solid fa-bookmark"></i>
        </div>
        <div class="absolute top-5 left-14 cursor-pointer text-white bg-white bg-opacity-35 py-1 px-2 rounded-md transform transition duration-300 opacity-0 group-hover:opacity-100">
          <i class="fa-solid fa-heart"></i>
        </div>

        <div class="absolute bottom-[6.5rem] left-4 cursor-pointer bg-slate-300 bg-opacity-35 rounded-full text-white py-1 px-2  transform transition duration-300">
          <i class="fa-solid fa-thumbs-up"></i>
          <span className="text-xs ml-1">{abbreviateNumber(likes, 2)}</span>
        </div>
        <div class="absolute bottom-[6.5rem] left-20 cursor-pointer bg-slate-300 bg-opacity-35 rounded-full text-white py-1 px-2  transform transition duration-300 ml-2">
          <i class="fa-solid fa-comment"></i>
          <span className="text-xs ml-1">{abbreviateNumber(comments, 2)}</span>
        </div>
        <div class="absolute bottom-[6.5rem] left-36 cursor-pointer bg-slate-300 bg-opacity-35 rounded-full text-white py-1 px-2  transform transition duration-300 ml-1">
          <i class="fa-solid fa-eye"></i>
          <span className="text-xs ml-1">{abbreviateNumber(views, 2)}</span>
        </div>

        <div class="py-3 px-4 text-xs">
          {tags.split(",").map((tag, index) => (
            <span
              key={index}
              className="inline-block text-gray-600 cursor-pointer bg-slate-300 bg-opacity-35 rounded-lg px-2  py-1 mr-2 my-1"
            >
              #{tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
