import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";


export default function Breadcrumbs({ items = [] }) {
  return (
    <div className="w-full flex justify-center pt-4 max-lg:px-4 max-lg:pt-8 items-center">
      <div className="w-full relative overflow-hidden max-w-7xl py-24 mt-24 max-lg:mt-12 max-xl:py-10 rounded-2xl flex justify-center items-center shadow-xl">
        <div className="flex  justify-center text-white items-center flex-col gap-5">
          <Image className="absolute left-0 w-full" src={items[0].image} alt="" width={1000} height={1000}/>
          <div className="w-full h-full bg-black/50 absolute left-0"></div>
          <h1 className="uppercase z-10 text-center text-5xl max-lg:text-3xl font-bold">
            {items.map((item) => (
              <>{item.page}</>
            ))} 
          </h1>
          <ul className="flex gap-2 z-10">
            <a href="/">Home</a>
            {items.map((item, index) => {
              const result = index === item.length - 1;
              return (
                <li className="flex gap-2">
                  <ChevronRight />
                  {result ? (
                    <p>{item.label}</p>
                  ) : (
                    <a href={item.href}> {item.label}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
