import { memo } from "react";
import audio from "../assets/audio.svg"
import book from "../assets/books.svg"

const BookCart = ({ img, name, title, star, id }) => {
  return (
    <div onClick={id}>
      <div className="w-[239px]">
        <img src={img} alt="" />
      </div>
      <h1 className="mt-[18px] mb-[18px]">{name}</h1>
      <p className="opacity-50">{title}</p>
      <div className="flex justify-between mt-4">
        <div className="flex gap-2.5">
          <img src={star} alt="" />
          <h1 className="text-[#ff7f4d] text-[18px]">4.7</h1>
        </div>
        <div className="flex items-center gap-4">
          <img src={audio} alt="audio" />
          <img src={book} alt="book" />
        </div>
      </div>
    </div>
  );
};

export default memo(BookCart);
