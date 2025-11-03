import React from "react";
import { Banner } from "./components/banner";
import { Spark } from "../../assets/icons/spark";
import Category from "./components/category";
import {categories} from "../../data/data" 
import book from "../../data/book";
import audio from "../../data/audio";
import BookCart from "../../components/bookCart"

const Home = () => {
  return (
    <>
      <Banner />

      <section>
        <div className="container">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <Spark />
              <div className="w-[212px]">
                <h2 className="text-[15px] font-bold ">Тезкор етказиш</h2>
                <p className="text-[11px] font-normal text-[#aaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Spark />
              <div className="w-[212px]">
                 <h2 className="text-[15px] font-bold ">Тўлов химояси</h2>
                <p className="text-[11px] font-normal text-[#aaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Spark />
              <div className="w-[212px]">
                 <h2 className="text-[15px] font-bold ">Юқори сифат</h2>
                <p className="text-[11px] font-normal text-[#aaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Spark />
              <div className="w-[212px]">
                 <h2 className="text-[15px] font-bold ">Энг сара китоблар</h2>
                <p className="text-[11px] font-normal text-[#aaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-[62px]">
        <div className="container">
          <h2>Рукнлар</h2>
          <div className="grid grid-cols-6 gap-4">
            {categories.map((item) => (
              <Category key={item.id} title={item.title} img={item.img}/>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
      <div >
        <h2 className="text-[32px] font-semibold pb-8">Янги қўшилганлар</h2>
        <div className="flex gap-6">
          {book.map((item) => (
            <BookCart key={item.id} id={item.id} img={item.img} name={item.name} title={item.title} star={item.star} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[32px] font-semibold pb-8 mt-8">Аудио китоблар</h2>
        <div className="flex gap-6 pb-9">
          {audio.map((audio) => (
            <BookCart key={audio.id} img={audio.img} name={audio.name} title={audio.title} star={audio.star}/>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
