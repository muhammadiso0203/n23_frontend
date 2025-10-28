import { memo } from "react";
import BookCart from "./components/book_cart";
import book from "./data/book";
import audio from "./data/audio"

const App = () => {
  return (
    <section className="container">
      <div >
        <h2 className="text-[32px] font-semibold pb-8">Янги қўшилганлар</h2>
        <div className="flex gap-6">
          {book.map((item) => (
            <BookCart img={item.img} name={item.name} title={item.title} star={item.star} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[32px] font-semibold pb-8 mt-8">Аудио китоблар</h2>
        <div className="flex gap-6 pb-9">
          {audio.map((audio) => (
            <BookCart img={audio.img} name={audio.name} title={audio.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(App);
